import asyncio
from playwright.async_api import async_playwright
import subprocess
import os

async def record_video():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            viewport={"width": 1080, "height": 1920},
            record_video_dir="/tmp/video_raw",
            record_video_size={"width": 1080, "height": 1920},
        )
        page = await context.new_page()
        
        # Navigate and wait for animation
        await page.goto("https://sage-gold-ceremony.preview.emergentagent.com/video-invite")
        await page.wait_for_load_state("networkidle")
        
        # Wait for full 15s animation + 1s buffer
        await asyncio.sleep(16)
        
        await context.close()
        await browser.close()
    
    # Find the recorded video
    video_files = [f for f in os.listdir("/tmp/video_raw") if f.endswith(".webm")]
    if not video_files:
        print("ERROR: No video recorded!")
        return
    
    raw_video = f"/tmp/video_raw/{video_files[0]}"
    print(f"Raw video: {raw_video}")
    
    # Download the music file
    music_url = "https://customer-assets.emergentagent.com/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/baw44cd1_Ruelle%20-%20I%20Get%20To%20Love%20You%20%20Piano%20and%20Strings%20Cover.mp3"
    subprocess.run(["curl", "-sL", "-o", "/tmp/music.mp3", music_url], check=True)
    print("Music downloaded")
    
    # Combine video + music with ffmpeg, trim to 15s
    output = "/app/frontend/public/wedding-invite-video.mp4"
    subprocess.run([
        "ffmpeg", "-y",
        "-i", raw_video,
        "-i", "/tmp/music.mp3",
        "-t", "15",
        "-map", "0:v",
        "-map", "1:a",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "23",
        "-c:a", "aac",
        "-b:a", "128k",
        "-shortest",
        "-af", "afade=t=in:st=0:d=1,afade=t=out:st=13:d=2",
        "-pix_fmt", "yuv420p",
        "-movflags", "+faststart",
        output
    ], check=True)
    
    size = os.path.getsize(output)
    print(f"Video saved: {output} ({size / 1024 / 1024:.1f} MB)")

asyncio.run(record_video())
