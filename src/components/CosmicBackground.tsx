import React from 'react';

export function CosmicBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020617]">
            {/* Dynamic Starfield (Asymmetric & Multi-layered) */}
            <svg width="100%" height="100%" className="absolute inset-0 opacity-40">
                <defs>
                    <pattern id="stars-layer-1" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
                        {/* Randomized, non-uniform star placement */}
                        <circle cx="23" cy="45" r="1.2" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0.2s", opacity: 0.8 }} />
                        <circle cx="150" cy="18" r="0.8" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "1.5s", opacity: 0.5 }} />
                        <circle cx="312" cy="80" r="1.5" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0.7s", opacity: 0.9 }} />
                        <circle cx="95" cy="190" r="0.6" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "2.1s", opacity: 0.4 }} />
                        <circle cx="280" cy="240" r="2.0" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "1.1s", opacity: 1.0 }} />
                        <circle cx="55" cy="310" r="1.0" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0.4s", opacity: 0.7 }} />
                        <circle cx="190" cy="350" r="1.5" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "1.8s", opacity: 0.8 }} />
                        <circle cx="360" cy="380" r="0.5" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "0.9s", opacity: 0.3 }} />
                        <circle cx="220" cy="120" r="1.2" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "2.5s", opacity: 0.6 }} />
                        <circle cx="40" cy="210" r="0.8" fill="#FFF" className="animate-pulse-soft" style={{ animationDelay: "1.3s", opacity: 0.8 }} />
                    </pattern>
                    <pattern id="stars-layer-2" x="150" y="250" width="500" height="500" patternUnits="userSpaceOnUse">
                        {/* Smaller, denser, drifting background stars */}
                        <circle cx="50" cy="100" r="0.5" fill="#FFF" opacity="0.3" />
                        <circle cx="250" cy="50" r="0.8" fill="#FFF" opacity="0.4" />
                        <circle cx="450" cy="150" r="0.6" fill="#FFF" opacity="0.2" />
                        <circle cx="100" cy="300" r="0.7" fill="#FFF" opacity="0.5" />
                        <circle cx="350" cy="280" r="0.5" fill="#FFF" opacity="0.3" />
                        <circle cx="180" cy="450" r="0.8" fill="#FFF" opacity="0.4" />
                        <circle cx="390" cy="420" r="0.4" fill="#FFF" opacity="0.2" />
                    </pattern>
                </defs>
                {/* Slow drifting animation for deep space parallax feel */}
                <rect x="0" y="0" width="100%" height="100%" fill="url(#stars-layer-1)" className="animate-float" style={{ animationDuration: '40s' }} />
                <rect x="0" y="0" width="100%" height="100%" fill="url(#stars-layer-2)" className="animate-float" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
            </svg>

            {/* Shooting Stars (Indian Cosmos) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[20%] w-[150px] h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 animate-shooting-star" style={{ animationDuration: '6s', animationDelay: '2s' }} />
                <div className="absolute top-[-20%] right-[60%] w-[250px] h-px bg-gradient-to-r from-transparent via-[#C5A55A]/80 to-transparent opacity-0 animate-shooting-star" style={{ animationDuration: '9s', animationDelay: '7s' }} />
                <div className="absolute top-[20%] right-[-10%] w-[100px] h-px bg-gradient-to-r from-transparent via-[#1B2A4A]/80 to-transparent opacity-0 animate-shooting-star" style={{ animationDuration: '14s', animationDelay: '0.5s' }} />
                <div className="absolute top-[5%] right-[80%] w-[180px] h-px bg-gradient-to-r from-transparent via-[#e67e22]/60 to-transparent opacity-0 animate-shooting-star" style={{ animationDuration: '11s', animationDelay: '4s' }} />
            </div>

            {/* Subtle Dynamic Nebula (Indian Cosmic Essence) */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen overflow-hidden">
                {/* Nebula 1 - Deep Cosmic Indigo (Advayant intelligence) */}
                <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-[100%] bg-[radial-gradient(circle_at_center,rgba(27,42,74,0.3)_0%,transparent_60%)] animate-float blur-[80px]" style={{ animationDuration: '25s' }} />

                {/* Nebula 2 - Ethereal Saffron/Gold Core (Indian essence) */}
                <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[80vw] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(197,165,90,0.12)_0%,transparent_50%)] animate-float blur-[100px]" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />

                {/* Nebula 3 - Earthy Deep Orange Warp */}
                <div className="absolute bottom-[-20%] left-[10%] w-[80vw] h-[60vw] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(230,126,34,0.08)_0%,transparent_60%)] animate-pulse-soft blur-[120px]" style={{ animationDuration: '20s' }} />
            </div>

            {/* Ultra-subtle geometric overlay representing structure within chaos */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,90,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,90,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none mix-blend-screen" />
        </div>
    );
}
