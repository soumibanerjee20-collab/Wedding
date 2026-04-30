from fastapi import FastAPI, APIRouter, HTTPException, Header
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Admin password
ADMIN_PASSWORD = os.environ['ADMIN_PASSWORD']

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class AdminLogin(BaseModel):
    password: str

class GuestCreate(BaseModel):
    name: str
    phone: str

class GuestUpdate(BaseModel):
    name: Optional[str] = None
    phone: Optional[str] = None

class Guest(BaseModel):
    id: str
    name: str
    phone: str
    invited: bool = False
    invited_at: Optional[str] = None
    created_at: str


# Helper to verify admin token
def verify_admin(token: str):
    if token != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized")


# Existing routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# Admin routes
@api_router.post("/admin/login")
async def admin_login(body: AdminLogin):
    if body.password == ADMIN_PASSWORD:
        return {"success": True, "token": ADMIN_PASSWORD}
    raise HTTPException(status_code=401, detail="Wrong password")


@api_router.get("/admin/guests")
async def get_guests(x_admin_token: str = Header()):
    verify_admin(x_admin_token)
    guests = await db.guests.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return guests


@api_router.post("/admin/guests")
async def add_guest(body: GuestCreate, x_admin_token: str = Header()):
    verify_admin(x_admin_token)
    guest = {
        "id": str(uuid.uuid4()),
        "name": body.name,
        "phone": body.phone,
        "invited": False,
        "invited_at": None,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.guests.insert_one(guest)
    guest.pop("_id", None)
    return guest


@api_router.put("/admin/guests/{guest_id}/mark-invited")
async def mark_invited(guest_id: str, x_admin_token: str = Header()):
    verify_admin(x_admin_token)
    result = await db.guests.update_one(
        {"id": guest_id},
        {"$set": {"invited": True, "invited_at": datetime.now(timezone.utc).isoformat()}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Guest not found")
    return {"success": True}


@api_router.delete("/admin/guests/{guest_id}")
async def delete_guest(guest_id: str, x_admin_token: str = Header()):
    verify_admin(x_admin_token)
    result = await db.guests.delete_one({"id": guest_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Guest not found")
    return {"success": True}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
