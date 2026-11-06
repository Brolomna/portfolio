import type { VisualProps } from './primitives'
import { FrameDots } from './primitives'

export function WebConstructionVisual({ reduced }: VisualProps) {
  return (
    <div className={`viz viz-web${reduced ? ' is-static' : ''}`} aria-label="Interface assembling in a browser">
      <div className="build-browser">
        <div className="build-browser__bar">
          <FrameDots />
          <span>localhost:5173</span>
        </div>
        <div className="build-stage">
          <div className="layer layer--wire" />
          <div className="layer layer--html">
            <header />
            <main>
              <div />
              <div />
            </main>
          </div>
          <div className="layer layer--css">
            <header>Studio</header>
            <main>
              <article>
                <h3>Useful things</h3>
                <p>Structure, layout, behavior.</p>
                <button type="button">Open</button>
              </article>
              <aside />
            </main>
          </div>
          <div className="layer layer--js">
            <div className="js-pulse" />
          </div>
        </div>
      </div>
      <div className="web-labels">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
    </div>
  )
}
