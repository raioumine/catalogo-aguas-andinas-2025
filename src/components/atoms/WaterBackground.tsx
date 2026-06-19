// Gota SVG — elemento gráfico oficial del Manual de Marca Aguas Andinas
function Gota({ color, size = 100, rotate = 0, opacity = 0.18 }: {
  color: string; size?: number; rotate?: number; opacity?: number
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none"
      style={{ transform: `rotate(${rotate}deg)`, opacity }}>
      <path
        d="M50,5 C50,5 12,32 12,58 C12,78 29,95 50,95 C71,95 88,78 88,58 C88,32 50,5 50,5 Z"
        fill={color}
      />
    </svg>
  )
}

// Hoja SVG — elemento gráfico 376c (verde)
function HojaGrafica({ size = 100, opacity = 0.15 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
      <path
        d="M85,10 C85,10 90,55 65,75 C40,95 10,88 10,88 C10,88 5,50 30,30 C55,10 85,10 85,10 Z"
        fill="#72BF44"
      />
      <path
        d="M10,88 C10,88 45,65 65,35"
        stroke="#5a9e30" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"
      />
    </svg>
  )
}

export function WaterBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>

      {/* ── Elementos gráficos oficiales (gotas) ── */}

      {/* Gota dorada grande — top right */}
      <div style={{ position: 'absolute', top: '-2%', right: '3%', animation: 'blobDrift 16s ease-in-out 1s infinite' }}>
        <Gota color="#EFA220" size={160} rotate={-30} opacity={0.13} />
      </div>

      {/* Hoja verde — right middle */}
      <div style={{ position: 'absolute', top: '30%', right: '6%', animation: 'blobDrift 20s ease-in-out 5s infinite reverse' }}>
        <HojaGrafica size={120} opacity={0.12} />
      </div>

      {/* Gota cyan grande — top left */}
      <div style={{ position: 'absolute', top: '-5%', left: '10%', animation: 'blobDrift 14s ease-in-out 3s infinite' }}>
        <Gota color="#00A9E0" size={200} rotate={20} opacity={0.10} />
      </div>

      {/* Gota azul medio — left lower */}
      <div style={{ position: 'absolute', bottom: '15%', left: '-2%', animation: 'blobDrift 18s ease-in-out 7s infinite reverse' }}>
        <Gota color="#0041A8" size={140} rotate={45} opacity={0.12} />
      </div>

      {/* Gota azul claro — center right */}
      <div style={{ position: 'absolute', bottom: '20%', right: '18%', animation: 'blobDrift 22s ease-in-out 2s infinite' }}>
        <Gota color="#6AB4E8" size={100} rotate={-15} opacity={0.14} />
      </div>

      {/* Gota pequeña navy — bottom center */}
      <div style={{ position: 'absolute', bottom: '8%', left: '45%', animation: 'blobDrift 12s ease-in-out 9s infinite reverse' }}>
        <Gota color="#1D3C8F" size={70} rotate={60} opacity={0.15} />
      </div>

      {/* Gota teal — top center */}
      <div style={{ position: 'absolute', top: '5%', left: '45%', animation: 'blobDrift 25s ease-in-out 4s infinite' }}>
        <Gota color="#009B96" size={90} rotate={-45} opacity={0.10} />
      </div>

      {/* ── Olas corporativas animadas ── */}
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
