import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pryz AI | The Next Evolution of Personal Intelligence';
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
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            borderRadius: '100%',
          }}
        />

        {/* Logo Shard (Simplified for OG) */}
        <div style={{ display: 'flex', marginBottom: '40px' }}>
          <svg width="120" height="200" viewBox="0 0 140 240" fill="none">
            <path d="M 70 5 L 10 90 L 45 90 L 70 45 Z" fill="#A855F7" opacity="0.95" />
            <path d="M 10 90 L 70 235 L 70 200 L 45 90 Z" fill="#A855F7" opacity="0.7" />
            <path d="M 70 5 L 130 90 L 95 90 L 70 45 Z" fill="#06B6D4" opacity="0.95" />
            <path d="M 130 90 L 70 235 L 70 200 L 95 90 Z" fill="#06B6D4" opacity="0.7" />
            <path d="M 70 45 L 45 90 L 70 200 L 95 90 Z" fill="white" />
          </svg>
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}
        >
          Pryz AI
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#a3a3a3',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          Intelligence optimized for every swipe. <br/>
          Secure. Private. Predictive.
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ width: '8px', height: '8px', background: '#A855F7', borderRadius: '100%' }} />
          <div style={{ color: '#525252', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>ADVAYANT INTELLIGENCE</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
