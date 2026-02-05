import asyncio
from playwright.async_api import async_playwright
import subprocess
import os

async def record_intro():
    print("Starting intro animation recording...")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 800, "height": 600},
            record_video_dir="/tmp/video",
            record_video_size={"width": 800, "height": 600}
        )
        
        page = await context.new_page()
        
        # Clear session storage first to ensure intro plays
        await page.goto("http://localhost:3000", wait_until="networkidle")
        await page.evaluate("sessionStorage.removeItem('introShown')")
        
        # Reload to get fresh intro
        await page.reload(wait_until="networkidle")
        await page.wait_for_timeout(1000)
        
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
        
        # Convert to GIF using ffmpeg with optimization for WhatsApp
        # Skip first 1 second (before clicking), take ~16 seconds of animation
        cmd = [
            "ffmpeg", "-y",
            "-i", video_path,
            "-ss", "1",  # Start after 1 second 
            "-t", "16",  # Take 16 seconds
            "-vf", "fps=12,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3",
            "-loop", "0",
            gif_path
        ]
        
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"GIF created successfully: {gif_path}")
            # Get file size
            size = os.path.getsize(gif_path) / (1024 * 1024)
            print(f"File size: {size:.2f} MB")
        else:
            print(f"Error creating GIF: {result.stderr}")
    else:
        print("No video file found!")

if __name__ == "__main__":
    asyncio.run(main())
