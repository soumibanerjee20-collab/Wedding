import React, { createContext, useContext, useRef, useState, useCallback } from 'react';

const AudioContext = createContext(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Start playing music (called when user clicks "Enter")
  const startMusic = useCallback(() => {
    if (audioRef.current && !hasStarted) {
      // Set currentTime to 0 to ensure it plays from start
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      setHasStarted(true);
      setIsPlaying(true);
      // Play immediately - audio should already be buffered via preload
      const playPromise = audioRef.current.play();
      if (playPromise) {
        playPromise.then(() => {
          // Fade in from 0.5 to 0.8
          let volume = 0.5;
          const fadeIn = setInterval(() => {
            if (volume < 0.8) {
              volume += 0.05;
              if (audioRef.current) {
                audioRef.current.volume = Math.min(volume, 0.8);
              }
            } else {
              clearInterval(fadeIn);
            }
          }, 80);
        }).catch(err => console.log('Audio play failed:', err));
      }
    }
  }, [hasStarted]);

  // Fade to background volume (called after intro animation completes)
  const fadeToBackground = useCallback(() => {
    if (audioRef.current && isPlaying) {
      const currentVolume = audioRef.current.volume;
      let volume = currentVolume;
      const fadeDown = setInterval(() => {
        if (volume > 0.4) {
          volume -= 0.02;
          if (audioRef.current) {
            audioRef.current.volume = Math.max(volume, 0.4);
          }
        } else {
          clearInterval(fadeDown);
        }
      }, 100);
    }
  }, [isPlaying]);

  // Toggle mute
  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  return (
    <AudioContext.Provider value={{ 
      isMuted, 
      isPlaying, 
      hasStarted,
      startMusic, 
      fadeToBackground,
      toggleMute 
    }}>
      {/* Audio Element - River Flows in You by Yiruma */}
      <audio
        ref={audioRef}
        src="https://customer-assets.emergentagent.com/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/baw44cd1_Ruelle%20-%20I%20Get%20To%20Love%20You%20%20Piano%20and%20Strings%20Cover.mp3"
        loop
        preload="auto"
        onCanPlayThrough={() => console.log('Audio ready to play')}
      />
      {children}
    </AudioContext.Provider>
  );
};
