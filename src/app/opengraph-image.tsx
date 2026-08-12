import { ImageResponse } from 'next/og';

export const alt = 'PRD Guide — Professional Product Documentation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #111827, #1f2937)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <div
            style={{
              background: '#DC2626',
              borderRadius: '24px',
              width: '96px',
              height: '96px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '32px'
            }}
          >
             {/* FileText Icon */}
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
               <path d="M14 2v4a2 2 0 0 0 2 2h4" />
               <path d="M10 9H8" />
               <path d="M16 13H8" />
               <path d="M16 17H8" />
             </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '72px', fontWeight: 'bold', margin: 0, letterSpacing: '-0.02em' }}>PRD Guide</h1>
          </div>
        </div>
        <p style={{ fontSize: '36px', color: '#9CA3AF', margin: 0, fontWeight: 500 }}>
          Professional Product Documentation
        </p>
        
        <div style={{ 
          position: 'absolute', 
          bottom: '60px',
          display: 'flex', 
          background: 'rgba(255,255,255,0.1)',
          padding: '12px 32px',
          borderRadius: '100px',
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#F3F4F6'
        }}>
          learnprd.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
