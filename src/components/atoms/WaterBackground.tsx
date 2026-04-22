export function WaterBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {/* animated blobs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,160,198,0.25) 0%, transparent 70%)',
        animation: 'blobDrift 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '-8%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,165,80,0.18) 0%, transparent 70%)',
        animation: 'blobDrift 16s ease-in-out infinite reverse',
        animationDelay: '3s',
      }} />
      <div style={{
        position: 'absolute', bottom: '-5%', left: '30%',
        width: '600px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,43,114,0.15) 0%, transparent 70%)',
        animation: 'blobDrift 10s ease-in-out infinite',
        animationDelay: '6s',
      }} />
      {/* wave SVG at bottom */}
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80px' }}>
        <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="rgba(240,245,250,0.8)" />
      </svg>
    </div>
  )
}
