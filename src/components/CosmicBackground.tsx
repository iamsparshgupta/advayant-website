import React from 'react';

export function CosmicBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
            {/* Dynamic Starfield Pattern */}
            <svg width="100%" height="100%" className="absolute inset-0 opacity-50">
                <defs>
                    <pattern id="stars" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1.5" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0s" }} />
                        <circle cx="80" cy="40" r="1" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "1s" }} />
                        <circle cx="150" cy="80" r="2" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
                        <circle cx="210" cy="30" r="1.5" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "2s" }} />
                        <circle cx="40" cy="120" r="1" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
                        <circle cx="110" cy="160" r="2" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0.8s" }} />
                        <circle cx="180" cy="140" r="1" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "1.2s" }} />
                        <circle cx="230" cy="190" r="1.5" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0.3s" }} />
                        <circle cx="50" cy="220" r="2" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "1.8s" }} />
                        <circle cx="140" cy="230" r="1" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0.7s" }} />
                    </pattern>
                    <pattern id="stars-small" x="50" y="50" width="150" height="150" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="0.8" fill="#FFF" opacity="0.5" />
                        <circle cx="70" cy="50" r="0.8" fill="#FFF" opacity="0.3" />
                        <circle cx="120" cy="90" r="0.8" fill="#FFF" opacity="0.6" />
                        <circle cx="30" cy="110" r="0.8" fill="#FFF" opacity="0.4" />
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#stars)" />
                <rect x="0" y="0" width="100%" height="100%" fill="url(#stars-small)" />
            </svg>

            {/* Aurora / Galaxy Glowing Orbs */}
            {/* Top Left - Advayant Cosmic Indigo / Violet */}
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary-900/30 blur-[150px] mix-blend-screen animate-pulse-soft" style={{ animationDuration: '8s' }} />

            {/* Middle Right - Deep Amethyst / Space Purple */}
            <div className="absolute top-[20%] -right-[20%] w-[50%] h-[70%] rounded-full bg-accent-900/30 blur-[150px] mix-blend-screen animate-float" style={{ animationDuration: '10s' }} />

            {/* Bottom Left - Flux Emerald / Cyan (Very subtle, blends with the rest) */}
            <div className="absolute -bottom-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-flux-900/20 blur-[160px] mix-blend-screen animate-float" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
        </div>
    );
}
