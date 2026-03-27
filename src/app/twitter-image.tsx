import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Advayant Intelligence | Building Intelligence for India';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #0a0a0a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Abstract Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '40%',
            height: '40%',
            background: 'radial-gradient(circle, rgba(197, 165, 90, 0.1) 0%, transparent 70%)',
            borderRadius: '100%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '40%',
            height: '40%',
            background: 'radial-gradient(circle, rgba(197, 165, 90, 0.1) 0%, transparent 70%)',
            borderRadius: '100%',
          }}
        />

        {/* Advayant Logo Icon (Golden Crescent) */}
        <div style={{ display: 'flex', marginBottom: '40px' }}>
          <svg width="200" height="200" viewBox="-40 -40 80 80">
            <defs>
              <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE082"/>
                <stop offset="100%" stopColor="#C5A55A"/>
              </linearGradient>
              <mask id="m">
                <rect x="-50" y="-50" width="100" height="100" fill="white"/>
                <circle cx="1" cy="-1" r="25.2" fill="black"/>
                <g transform="rotate(-36)">
                  <rect x="23" y="-1.8" width="10" height="3.6" fill="black"/>
                </g>
              </mask>
            </defs>
            <circle cx="0" cy="0" r="28" fill="url(#g)" mask="url(#m)" />
            <circle cx="0" cy="0" r="5" fill="#C5A55A"/>
            {/* Added a subtle glow behind */}
            <circle cx="0" cy="0" r="35" fill="none" stroke="#C5A55A" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            marginBottom: '16px',
            textTransform: 'lowercase',
            letterSpacing: '0.1em'
          }}
        >
          advayant
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#a3a3a3',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
            fontWeight: 400,
            letterSpacing: '0.6em',
            textTransform: 'uppercase'
          }}
        >
          Intelligence
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '80px',
          padding: '12px 24px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '40px',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ color: 'white', fontSize: '20px', fontWeight: 600 }}>Home of Pryz AI</div>
          <div style={{ width: '6px', height: '6px', background: '#A855F7', borderRadius: '100%' }} />
          <div style={{ color: '#a3a3a3', fontSize: '20px' }}>& Klaryx</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
