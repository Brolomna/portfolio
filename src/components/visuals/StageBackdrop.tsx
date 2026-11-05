export function StageBackdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__glow" />
      <svg className="backdrop__ridge" viewBox="0 0 1440 280" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ridgeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1430" stopOpacity="0.15" />
            <stop offset="38%" stopColor="#100c1c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#09090d" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0 210 C180 168 310 196 460 150 C620 96 780 168 940 128 C1100 88 1260 148 1440 112 L1440 280 L0 280 Z"
          fill="url(#ridgeFill)"
        />
      </svg>
    </div>
  )
}
