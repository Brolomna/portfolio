import type { VisualProps } from './primitives'
import { FrameDots } from './primitives'

export function PythonWorkflowVisual({ reduced }: VisualProps) {
  return (
    <div className={`viz viz-python${reduced ? ' is-static' : ''}`} aria-label="Automation workflow">
      <div className="engine">
        <div className="engine__inputs">
          <article className="data-card data-card--in">
            <strong>notes.md</strong>
            <span>source</span>
          </article>
          <article className="data-card data-card--in delay">
            <strong>files.py</strong>
            <span>batch</span>
          </article>
        </div>
        <svg className="engine__map" viewBox="0 0 920 280">
          <path className="pipe" d="M40 140 H210" />
          <path className="pipe" d="M210 140 H380" />
          <path className="pipe" d="M380 140 H550" />
          <path className="pipe pipe--ok" d="M550 140 C620 140 620 70 700 70 H860" />
          <path className="pipe pipe--err" d="M550 140 C620 140 620 210 700 210 H820" />
          <circle className="pkt pkt--a" r="4" />
          <circle className="pkt pkt--b" r="4" />
          <g transform="translate(210,140)">
            <rect x="-54" y="-28" width="108" height="56" rx="12" className="node" />
            <text y="-2" textAnchor="middle" className="node-title">Parse</text>
            <text y="16" textAnchor="middle" className="node-sub">read</text>
          </g>
          <g transform="translate(380,140)">
            <rect x="-54" y="-28" width="108" height="56" rx="12" className="node node--hot" />
            <text y="-2" textAnchor="middle" className="node-title">Process</text>
            <text y="16" textAnchor="middle" className="node-sub">rules</text>
          </g>
          <g transform="translate(550,140)">
            <polygon points="0,-34 40,0 0,34 -40,0" className="node node--decision" />
            <text y="4" textAnchor="middle" className="node-title">OK?</text>
          </g>
          <g transform="translate(820,70)">
            <rect x="-62" y="-28" width="124" height="56" rx="12" className="node node--out" />
            <text y="-2" textAnchor="middle" className="node-title">Output</text>
            <text y="16" textAnchor="middle" className="node-sub">success</text>
          </g>
          <g transform="translate(820,210)">
            <rect x="-62" y="-22" width="124" height="44" rx="12" className="node node--err" />
            <text y="5" textAnchor="middle" className="node-sub">retry / log</text>
          </g>
        </svg>
        <div className="engine__status">
          <span className="pulse-dot" />
          <span>run complete</span>
          <b className="run-count">12</b>
        </div>
      </div>
      <aside className="support-col">
        <div className="code-frame">
          <FrameDots />
          <pre>{`for path in files:
    data = parse(path)
    if valid(data):
        emit(data)`}</pre>
        </div>
        <div className="term-frame">
          <FrameDots />
          <pre>
            <span className="ok">ok</span> parsed 3 notes
            {'\n'}
            <span className="ok">ok</span> wrote actions.json
          </pre>
        </div>
      </aside>
    </div>
  )
}
