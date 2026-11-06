import type { VisualProps } from './primitives'

export function IdentityVisual({ reduced }: VisualProps) {
  return (
    <div className={`viz viz-identity${reduced ? ' is-static' : ''}`} aria-hidden="true">
      <div className="viz-identity__glow" />
      <svg className="viz-identity__rings" viewBox="0 0 520 520">
        <circle className="draw-ring draw-ring--1" cx="260" cy="260" r="232" />
        <circle className="draw-ring draw-ring--2" cx="260" cy="260" r="176" />
        <circle className="draw-ring draw-ring--3" cx="260" cy="260" r="118" />
        <path className="orbit-path" d="M260 84 A176 176 0 1 1 259.9 84" />
      </svg>
      <div className="viz-identity__core">
        <span>J</span>
      </div>
      <span className="orbit-chip orbit-chip--py">Py</span>
      <span className="orbit-chip orbit-chip--sh">sh</span>
      <span className="orbit-chip orbit-chip--web">{'</>'}</span>
      <span className="orbit-chip orbit-chip--ai">AI</span>
      <span className="orbit-chip orbit-chip--teach">Teach</span>
    </div>
  )
}
