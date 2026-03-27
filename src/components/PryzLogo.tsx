import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "icon" | "full";
}

export function PryzLogo({ variant = "icon", className, ...props }: LogoProps) {
  // Concept 1 Final: Extreme Minimalist Symmetrical Shard
  const Shard = ({ className: shardClassName }: { className?: string }) => (
    <svg 
      viewBox="0 0 140 240" 
      className={shardClassName} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient id="facet-purple" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#E9D8FD" />
        </linearGradient>
        <linearGradient id="facet-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>

      {/* Side Facets (The "Frame") */}
      {/* Top Left */}
      <path d="M 70 5 L 10 90 L 45 90 L 70 45 Z" fill="url(#facet-purple)" opacity="0.95" />
      {/* Bottom Left */}
      <path d="M 10 90 L 70 235 L 70 200 L 45 90 Z" fill="url(#facet-purple)" opacity="0.7" />
      {/* Top Right */}
      <path d="M 70 5 L 130 90 L 95 90 L 70 45 Z" fill="url(#facet-blue)" opacity="0.95" />
      {/* Bottom Right */}
      <path d="M 130 90 L 70 235 L 70 200 L 95 90 Z" fill="url(#facet-blue)" opacity="0.7" />

      {/* Central White Shard */}
      <path d="M 70 45 L 45 90 L 70 200 L 95 90 Z" fill="white" fillOpacity="0.98" />

      {/* Detailed Outlines (The "Mechanical" look) */}
      <g stroke="white" strokeOpacity="0.25" strokeWidth="0.8">
        {/* Outer Diamond */}
        <path d="M 70 5 L 130 90 L 70 235 L 10 90 Z" strokeOpacity="0.15" />
        {/* Inner Diamond */}
        <path d="M 70 45 L 95 90 L 70 200 L 45 90 Z" />
        {/* Facet Connection Lines */}
        <path d="M 70 5 L 70 45" />
        <path d="M 130 90 L 95 90" />
        <path d="M 70 235 L 70 200" />
        <path d="M 10 90 L 45 90" />
        {/* Core Split line */}
        <path d="M 70 45 L 70 200" strokeOpacity="0.3" />
      </g>
    </svg>
  );

  if (variant === "icon") {
    return <Shard className={className} />;
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Shard className="w-8 h-8" />
      <span className="font-medium text-xl tracking-[0.25em] text-white uppercase leading-none">
        Pryz
      </span>
    </div>
  );
}
