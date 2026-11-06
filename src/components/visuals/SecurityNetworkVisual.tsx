import type { VisualProps } from './primitives'

export function SecurityNetworkVisual({ reduced }: VisualProps) {
  return (
    <div className={`viz viz-sec${reduced ? ' is-static' : ''}`} aria-label="Network inspection environment">
      <div className="sec-map">
        <section className="zone zone--ext">
          <p>Internet</p>
          <span className="flow flow--in" />
          <span className="flow flow--bad" />
        </section>
        <section className="zone zone--edge">
          <p>Gateway</p>
          <small>inspect</small>
          <div className="fw-ring" />
        </section>
        <section className="zone zone--int">
          <article>Web app</article>
          <article>DNS</article>
          <article>Services</article>
        </section>
        <section className="zone zone--policy">
          <p>Policy</p>
          <span className="sec-ok">allow</span>
          <span className="sec-block">block</span>
        </section>
      </div>
      <aside className="sec-panels">
        <div className="mini-panel">
          <span>traffic</span>
          <b className="spark" />
        </div>
        <div className="mini-panel">
          <span>inspect</span>
          <p>GET /health · 200</p>
        </div>
        <div className="mini-panel mini-panel--alert">
          <span>event</span>
          <p>unknown probe isolated</p>
        </div>
      </aside>
    </div>
  )
}
