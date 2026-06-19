export function WaterBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {/* Blob 1 — azul primario */}
      <div style={{
        position: 'absolute', top: '-8%', left: '-4%',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,169,224,0.20) 0%, transparent 65%)',
        animation: 'blobDrift 14s ease-in-out infinite',
      }} />
      {/* Blob 2 — dorado suave */}
      <div style={{
        position: 'absolute', top: '10%', right: '-6%',
        width: '380px', height: '380px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(239,162,32,0.12) 0%, transparent 65%)',
        animation: 'blobDrift 18s ease-in-out 4s infinite reverse',
      }} />
      {/* Blob 3 — azul profundo */}
      <div style={{
        position: 'absolute', bottom: '5%', left: '25%',
        width: '600px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,48,96,0.18) 0%, transparent 65%)',
        animation: 'blobDrift 11s ease-in-out 7s infinite',
      }} />
      {/* Blob 4 — verde complementario */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(57,130,69,0.10) 0%, transparent 65%)',
        animation: 'blobDrift 20s ease-in-out 2s infinite',
      }} />

      {/* Olas corporativas — wave SVG animado */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '90px' }}>
        <svg
          viewBox="0 0 2880 90" preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', animation: 'waveDrift 18s linear infinite' }}
        >
          <path
            d="M0,45 C240,75 480,15 720,45 C960,75 1200,15 1440,45 C1680,75 1920,15 2160,45 C2400,75 2640,15 2880,45 L2880,90 L0,90 Z"
            fill="rgba(238,243,251,0.55)"
          />
        </svg>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '65px' }}>
        <svg
          viewBox="0 0 2880 65" preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', animation: 'waveDrift 12s linear infinite reverse' }}
        >
          <path
            d="M0,32 C320,55 640,10 960,32 C1280,55 1600,10 1920,32 C2240,55 2560,10 2880,32 L2880,65 L0,65 Z"
            fill="rgba(238,243,251,0.75)"
          />
        </svg>
      </div>
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40px' }}>
        <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,25 1440,20 L1440,40 L0,40 Z"
          fill="#EEF3FB" />
      </svg>
    </div>
  )
}
