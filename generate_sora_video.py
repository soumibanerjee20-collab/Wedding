import os
import sys
import subprocess
from dotenv import load_dotenv

load_dotenv('/app/backend/.env')

from emergentintegrations.llm.openai.video_generation import OpenAIVideoGeneration

def generate_wedding_video():
    print("Generating cinematic wedding video with Sora 2...")
    
    video_gen = OpenAIVideoGeneration(api_key=os.environ['EMERGENT_LLM_KEY'])
    
    prompt = (
        "Cinematic slow-motion shot of a breathtaking Wyoming mountain landscape at golden hour. "
        "Camera slowly glides over rolling green meadows with wildflowers, revealing majestic snow-capped "
        "mountain peaks in the distance. Warm golden sunlight streams through dramatic clouds, casting long "
        "shadows across the prairie. A gentle breeze moves the tall grass. The scene transitions to a dreamy "
        "close-up of golden light filtering through delicate flower petals. Soft, romantic, ethereal mood. "
        "Film grain, warm color grading, shallow depth of field. No people, no text."
    )
    
    video_bytes = video_gen.text_to_video(
        prompt=prompt,
        model="sora-2",
        size="1024x1792",
        duration=12,
        max_wait_time=600
    )
    
    if video_bytes:
        raw_path = "/tmp/sora_raw.mp4"
        video_gen.save_video(video_bytes, raw_path)
        print(f"Raw video saved: {raw_path}")
        return raw_path
    else:
        print("Video generation failed!")
        return None

def add_overlays_and_music(raw_video):
    print("Adding text overlays and music...")
    
    music_url = "https://customer-assets.emergentagent.com/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/baw44cd1_Ruelle%20-%20I%20Get%20To%20Love%20You%20%20Piano%20and%20Strings%20Cover.mp3"
    subprocess.run(["curl", "-sL", "-o", "/tmp/music.mp3", music_url], check=True)
    
    output = "/app/frontend/public/wedding-invite-video.mp4"
    
    # Add text overlays using ffmpeg drawtext + music
    subprocess.run([
        "ffmpeg", "-y",
        "-i", raw_video,
        "-i", "/tmp/music.mp3",
        "-t", "15",
        "-filter_complex",
        # Text overlays with fade-in/out timing
        "[0:v]"
        # "You're Invited" - appears 0-3s
        "drawtext=text='You\\'re Invited':"
        "fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf:"
        "fontsize=52:fontcolor=white@0.9:"
        "x=(w-text_w)/2:y=(h-text_h)/2-50:"
        "enable='between(t,0.5,3.5)':"
        "alpha='if(lt(t,1),t-0.5,if(gt(t,3),3.5-t,1))',"
        
        # "Soumi & James" - appears 3.5-8s
        "drawtext=text='Soumi & James':"
        "fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf:"
        "fontsize=72:fontcolor=white:"
        "x=(w-text_w)/2:y=(h-text_h)/2-40:"
        "enable='between(t,3.5,8.5)':"
        "alpha='if(lt(t,4),t-3.5,if(gt(t,8),8.5-t,1))',"
        
        # Decorative line under names
        "drawtext=text='________________':"
        "fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf:"
        "fontsize=24:fontcolor=white@0.4:"
        "x=(w-text_w)/2:y=(h/2)+30:"
        "enable='between(t,4,8.5)':"
        "alpha='if(lt(t,4.5),t-4,if(gt(t,8),8.5-t,1))',"
        
        # "SAVE THE DATES" - appears 9-15s
        "drawtext=text='SAVE THE DATES':"
        "fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf:"
        "fontsize=28:fontcolor=white@0.7:"
        "x=(w-text_w)/2:y=(h/2)-100:"
        "enable='between(t,9,15)':"
        "alpha='if(lt(t,9.5),t-9,1)',"
        
        # US Wedding date
        "drawtext=text='August 8, 2026  •  Casper, Wyoming':"
        "fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf:"
        "fontsize=36:fontcolor=white@0.9:"
        "x=(w-text_w)/2:y=(h/2)-30:"
        "enable='between(t,9.5,15)':"
        "alpha='if(lt(t,10),t-9.5,1)',"
        
        # Indian Wedding date
        "drawtext=text='November 5-6, 2027  •  Kolkata, India':"
        "fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf:"
        "fontsize=36:fontcolor=white@0.9:"
        "x=(w-text_w)/2:y=(h/2)+30:"
        "enable='between(t,10,15)':"
        "alpha='if(lt(t,10.5),t-10,1)',"
        
        # Website
        "drawtext=text='soumiandjames.com':"
        "fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf:"
        "fontsize=24:fontcolor=white@0.5:"
        "x=(w-text_w)/2:y=(h/2)+100:"
        "enable='between(t,11,15)':"
        "alpha='if(lt(t,11.5),t-11,1)'"
        
        "[v]",
        "-map", "[v]",
        "-map", "1:a",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "20",
        "-c:a", "aac",
        "-b:a", "128k",
        "-shortest",
        "-af", "afade=t=in:st=0:d=1.5,afade=t=out:st=13:d=2",
        "-pix_fmt", "yuv420p",
        "-movflags", "+faststart",
        output
    ], check=True)
    
    size = os.path.getsize(output)
    print(f"Final video: {output} ({size / 1024 / 1024:.1f} MB)")

if __name__ == "__main__":
    raw = generate_wedding_video()
    if raw:
        add_overlays_and_music(raw)
        print("Done!")
    else:
        print("Failed to generate video")
