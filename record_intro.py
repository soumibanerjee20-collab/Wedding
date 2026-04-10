import asyncio
from playwright.async_api import async_playwright
import subprocess
import os

async def record_intro():
    print("Starting intro animation recording...")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 720, "height": 540},
            record_video_dir="/tmp/video",
            record_video_size={"width": 720, "height": 540}
        )
        
        page = await context.new_page()
        
        # Clear session storage first to ensure intro plays
        await page.goto("http://localhost:3000", wait_until="networkidle")
        await page.evaluate("sessionStorage.removeItem('introShown')")
        
        # Hide the Emergent badge
        await page.evaluate("document.getElementById('emergent-badge').style.display = 'none'")
        
        # Reload to get fresh intro
        await page.reload(wait_until="networkidle")
        await page.wait_for_timeout(500)
        
        # Hide badge again after reload
        await page.evaluate("document.getElementById('emergent-badge').style.display = 'none'")
        await page.wait_for_timeout(500)
        
        # Click the "Click to Enter" button to start
        try:
            await page.click("text=Click to Enter", timeout=5000)
            print("Clicked 'Click to Enter' button")
        except:
            print("Could not find Click to Enter button")
        
        # Wait for the full animation (about 17 seconds)
        print("Recording animation for ~17 seconds...")
        await page.wait_for_timeout(17000)
        
        # Close context to save the video
        await context.close()
        await browser.close()
        
    print("Recording complete!")
    return True

async def main():
    await record_intro()
    
    # Find the recorded video
    video_dir = "/tmp/video"
    video_files = [f for f in os.listdir(video_dir) if f.endswith('.webm')]
    
    if video_files:
        video_path = os.path.join(video_dir, video_files[0])
        gif_path = "/app/frontend/public/wedding-invite.gif"
        
        print(f"Converting {video_path} to GIF...")
        
        # High quality GIF conversion in single command
        gif_cmd = [
            "/usr/bin/ffmpeg", "-y",
            "-i", video_path,
            "-ss", "0.5",
            "-t", "16",
            "-vf", "fps=15,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256:stats_mode=full[p];[s1][p]paletteuse=dither=sierra2_4a",
            "-loop", "0",
            gif_path
        ]
        
        result = subprocess.run(gif_cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"GIF created successfully: {gif_path}")
            size = os.path.getsize(gif_path) / (1024 * 1024)
            print(f"File size: {size:.2f} MB")
        else:
            print(f"Error creating GIF: {result.stderr}")
    else:
        print("No video file found!")

if __name__ == "__main__":
    asyncio.run(main())
