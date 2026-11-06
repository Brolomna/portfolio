import type { VisualProps } from './primitives'

export function TeachingVisual({ reduced }: VisualProps) {
  return (
    <div className={`viz viz-teach${reduced ? ' is-static' : ''}`} aria-label="A concept becoming understandable">
      <div className="teach-map">
        <div className="concept">Concept</div>
        <div className="teach-step teach-step--explain">Explain</div>
        <div className="teach-step teach-step--ask">Question</div>
        <div className="teach-step teach-step--do">Example</div>
        <div className="teach-step teach-step--know">Understand</div>
        <span className="know-bar" />
      </div>
      <div className="teach-panel">
        <p>
          <strong>Complex idea</strong> → short explanation → example → shared meaning
        </p>
        <small>Computer Instructor 2017–2019 · English Teacher 2021–2023</small>
      </div>
    </div>
  )
}
