import React from "react";

interface LogoProps extends React.HTMLProps<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`} {...props}>
      <svg 
        viewBox="0 0 140 240" 
        className="h-10 w-auto text-white overflow-visible" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none"
      >
        <defs>
          <linearGradient id="shard-purple" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#E9D8FD" />
          </linearGradient>
          <linearGradient id="shard-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>
        </defs>

        {/* Side Facets */}
        <path d="M 70 5 L 10 90 L 45 90 L 70 45 Z" fill="url(#shard-purple)" opacity="0.95" />
        <path d="M 10 90 L 70 235 L 70 200 L 45 90 Z" fill="url(#shard-purple)" opacity="0.7" />
        <path d="M 70 5 L 130 90 L 95 90 L 70 45 Z" fill="url(#shard-blue)" opacity="0.95" />
        <path d="M 130 90 L 70 235 L 70 200 L 95 90 Z" fill="url(#shard-blue)" opacity="0.7" />

        {/* Central White Shard */}
        <path d="M 70 45 L 45 90 L 70 200 L 95 90 Z" fill="white" fillOpacity="0.98" />

        {/* Outlines */}
        <g stroke="white" strokeOpacity="0.25" strokeWidth="1.5">
          <path d="M 70 5 L 130 90 L 70 235 L 10 90 Z" strokeOpacity="0.15" />
          <path d="M 70 45 L 95 90 L 70 200 L 45 90 Z" />
        </g>
      </svg>
      <div className="flex flex-col">
        <span className="font-outfit text-4xl font-light tracking-tight text-white leading-none">
          advayant
        </span>
        <div className="flex items-center gap-3 mt-1.5">
          <div className="h-px w-8 bg-gradient-to-r from-pryz-500 to-transparent opacity-40" />
          <span className="font-space-grotesk text-[10px] font-bold tracking-[0.6em] text-neutral-500 uppercase leading-none">
            INTELLIGENCE
          </span>
        </div>
      </div>
    </div>
  );
}
