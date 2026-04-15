import React, { useEffect, useRef, useState } from 'react';

const VideoInvitePage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoUrl = `${process.env.REACT_APP_BACKEND_URL}/api/video/wedding-invite`;
  const videoWebmUrl = `${process.env.REACT_APP_BACKEND_URL}/api/video/wedding-invite-webm`;

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    return () => { if (header) header.style.display = ''; };
  }, []);

  // Fetch video as blob to avoid range request issues
  useEffect(() => {
    let cancelled = false;
    const loadVideo = async () => {
      try {
        // Try WebM first (better browser support without proprietary codecs), fallback to MP4
        let res = await fetch(videoWebmUrl);
        if (!res.ok) {
          res = await fetch(videoUrl);
        }
        if (!res.ok) throw new Error('Failed to load video');
        const blob = await res.blob();
        if (!cancelled) {
          const url = URL.createObjectURL(blob);
          setVideoSrc(url);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    loadVideo();
    return () => { cancelled = true; };
  }, [videoUrl, videoWebmUrl]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleDownload = async () => {
    try {
      const res = await fetch(videoUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Soumi-James-Wedding-Invite.mp4';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 25%, #1f2f24 50%, #283828 75%, #1a2a1f 100%)',
        zIndex: 9999,
      }}
      data-testid="video-invite"
    >
      {/* Ambient glow */}
      <div 
        className="absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212,184,150,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Video Container */}
      <div 
        className="relative rounded-lg overflow-hidden shadow-2xl cursor-pointer"
        style={{ 
          maxWidth: '360px',
          maxHeight: '75vh',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          border: '1px solid rgba(212,184,150,0.15)',
        }}
        onClick={handleVideoClick}
        data-testid="video-container"
      >
        {loading && (
          <div className="flex items-center justify-center" style={{ width: '360px', height: '500px' }}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" 
                   style={{ borderColor: 'rgba(212,184,150,0.4)', borderTopColor: 'transparent' }} />
              <p className="text-xs tracking-widest" style={{ color: 'rgba(212,184,150,0.5)' }}>
                LOADING VIDEO
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center p-8" style={{ width: '360px', height: '300px' }}>
            <p className="text-sm text-center" style={{ color: 'rgba(212,184,150,0.6)' }}>
              Video unavailable. Use download button below.
            </p>
          </div>
        )}

        {videoSrc && (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              playsInline
              muted={false}
              preload="auto"
              className="w-full h-full object-cover"
              style={{ maxHeight: '75vh' }}
              data-testid="video-player"
              onEnded={() => setIsPlaying(false)}
            />

            {/* Play overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.35)' }}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); handlePlay(); }}
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{
                    background: 'rgba(212,184,150,0.2)',
                    backdropFilter: 'blur(12px)',
                    border: '2px solid rgba(212,184,150,0.4)',
                  }}
                  data-testid="play-button"
                >
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                    <path d="M2 2L22 14L2 26V2Z" fill="rgba(240,230,211,0.9)" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Title & Download */}
      <div className="mt-6 text-center relative z-10">
        <p 
          className="font-cormorant text-xl tracking-wide mb-1"
          style={{ color: '#d4c4a8' }}
        >
          Soumi & James
        </p>
        <p 
          className="text-xs tracking-[0.2em] uppercase mb-5"
          style={{ color: 'rgba(138,154,124,0.7)' }}
        >
          Wedding Invitation
        </p>

        <button
          onClick={handleDownload}
          className="px-6 py-2.5 rounded-full text-sm tracking-wider transition-all hover:scale-105"
          style={{
            background: 'rgba(212,184,150,0.15)',
            border: '1px solid rgba(212,184,150,0.3)',
            color: '#d4c4a8',
            backdropFilter: 'blur(8px)',
          }}
          data-testid="download-button"
        >
          Download for WhatsApp
        </button>
      </div>
    </div>
  );
};

export default VideoInvitePage;
