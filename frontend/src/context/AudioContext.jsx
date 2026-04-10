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
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
        // Fade in to full volume during intro
        let volume = 0;
        const fadeIn = setInterval(() => {
          if (volume < 0.7) {
            volume += 0.03;
            if (audioRef.current) {
              audioRef.current.volume = Math.min(volume, 0.7);
            }
          } else {
            clearInterval(fadeIn);
          }
        }, 100);
      }).catch(err => console.log('Audio play failed:', err));
    }
  }, [hasStarted]);

  // Fade to background volume (called after intro animation completes)
  const fadeToBackground = useCallback(() => {
    if (audioRef.current && isPlaying) {
      const currentVolume = audioRef.current.volume;
      let volume = currentVolume;
      const fadeDown = setInterval(() => {
        if (volume > 0.15) {
          volume -= 0.02;
          if (audioRef.current) {
            audioRef.current.volume = Math.max(volume, 0.15);
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
        src="https://customer-assets.emergentagent.com/job_94251580-a7d4-48e5-924b-022edb5391d4/artifacts/vpapux1j_Yiruma%20%20-%20River%20Flows%20in%20You.mp3"
        loop
        preload="auto"
      />
      {children}
    </AudioContext.Provider>
  );
};
