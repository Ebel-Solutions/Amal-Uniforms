"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  // Initialise audio once on mount
  useEffect(() => {
    const audio = new Audio("/music/background.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.muted = true; // start muted so autoplay policy is satisfied
    audioRef.current = audio;

    // Try to start playing silently (autoplay-policy allows muted autoplay)
    audio.play().catch(() => {
      // Browser blocked even muted autoplay — we'll start on first interaction
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      audio.muted = false;
      // If play was blocked earlier, resume now that the user interacted
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.muted = true;
      setMuted(true);
    }
  };

  return (
    <button
      id="music-toggle-btn"
      onClick={toggle}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
      className="music-player-btn"
    >
      {/* Spinning ring with text */}
      <span className="music-ring" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="music-ring-svg">
          <defs>
            <path
              id="music-text-circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="music-ring-text">
            <textPath href="#music-text-circle" startOffset="0%">
              UNMUTE THE MAGIC • UNMUTE THE MAGIC •&nbsp;
            </textPath>
          </text>
        </svg>
      </span>

      {/* Centre icon */}
      <span className="music-icon-wrap">
        {muted ? (
          /* Muted speaker */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          /* Unmuted speaker with waves */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </span>
    </button>
  );
}
