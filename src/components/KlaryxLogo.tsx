import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export function KlaryxLogo({ className, ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className || "h-full w-auto text-white"} {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" fillOpacity="0.2" className="transition-all duration-500 group-hover:-translate-y-1" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <path d="M12 12v10" />
    </svg>
  );
}
