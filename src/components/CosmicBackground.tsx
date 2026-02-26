'use client';

import React from 'react';

export function CosmicBackground() {
    return (
        <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden bg-black selection:bg-neutral-800">
            {/* Base Deep Space Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

            {/* Apple/Sarvam Style Fluid Mesh Orbs */}
            {/* Deep Indigo/Violet Glow */}
            <div 
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-30 mix-blend-screen pointer-events-none animate-aurora-rotate"
                style={{
                    background: 'radial-gradient(circle, rgba(27,42,74,0.8) 0%, rgba(27,42,74,0) 70%)',
                    filter: 'blur(80px)',
                    animationDuration: '30s'
                }}
            />

            {/* Subtle Saffron/Gold Accent Glow */}
            <div 
                className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-20 mix-blend-screen pointer-events-none animate-aurora-rotate"
                style={{
                    background: 'radial-gradient(circle, rgba(197,165,90,0.6) 0%, rgba(197,165,90,0) 70%)',
                    filter: 'blur(100px)',
                    animationDuration: '45s',
                    animationDirection: 'reverse'
                }}
            />

            {/* Core Center Intelligence Glow */}
            <div 
                className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full opacity-10 mix-blend-screen pointer-events-none animate-aurora-pulse"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
                    filter: 'blur(120px)',
                    animationDuration: '20s'
                }}
            />

            {/* Ultra-fine Noise Grain Texture for Premium Feel */}
            <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-repeat"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />

            {/* Very Subtle Top Overlay Gradient to ground the navbar */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        </div>
    );
}
