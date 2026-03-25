import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 520 140" className={className || "h-full w-auto text-white overflow-visible"} {...props}>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="100%" stopColor="#C5A55A" />
        </linearGradient>
        <radialGradient id="earthVolume" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </radialGradient>
        <clipPath id="earthClip">
          <circle cx="0" cy="0" r="4.5" />
        </clipPath>

        <mask id="crescentMask1">
          <rect x="-50" y="-50" width="100" height="100" fill="white" />
          <circle cx="1" cy="-1" r="25.2" fill="black" />
          <g transform="rotate(-36)">
            <rect x="23" y="-1.8" width="10" height="3.6" fill="black" />
          </g>
        </mask>
      </defs>
      <g transform="translate(60, 60)">
        <circle cx="0" cy="0" r="28" fill="url(#goldGrad)" mask="url(#crescentMask1)" opacity="0.9" />
        {/* Earth Premium Core */}
        <g clipPath="url(#earthClip)">
          {/* Oceans / Volume */}
          <circle cx="0" cy="0" r="4.5" fill="url(#earthVolume)" />
          {/* Tiny Continents Detail */}
          <path d="M-1,-2.5 Q0.5,-1 0,-0.5 T-1.5,1.5 Q-3,1 -3,-0.5 Q-3,-2 -1,-2.5 Z" fill="#4ade80" opacity="0.85" />
          <path d="M1.5,-1 Q2.5,0 1.5,1 Q2,2 3,1.5 Q4,0.5 2.5,-1.5 Z" fill="#4ade80" fillRule="evenodd" opacity="0.85" />
          <path d="M-0.5,3 Q1,2.5 1.5,3.5 Q0,4.5 -0.5,3 Z" fill="#4ade80" opacity="0.7" />
          {/* 3D Core Highlight */}
          <circle cx="-1" cy="-1" r="4.5" fill="none" stroke="white" strokeWidth="0.8" opacity="0.2" />
        </g>
      </g>
      <text
        x="115"
        y="68"
        fontFamily="'Outfit', sans-serif"
        fontSize="52"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="1"
      >
        advayant
      </text>
      <line x1="115" y1="90" x2="180" y2="90" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.4" />
      <text
        x="190"
        y="94"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="14"
        fontWeight="500"
        fill="#a3a3a3"
        letterSpacing="10"
      >
        INTELLIGENCE
      </text>
      <line x1="418" y1="90" x2="483" y2="90" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}
