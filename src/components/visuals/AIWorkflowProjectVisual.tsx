import type { VisualProps } from './primitives'

export function AIWorkflowProjectVisual({ reduced }: VisualProps) {
  return (
    <div className={`proj proj-flow${reduced ? ' is-static' : ''}`} aria-label="CLI turning notes into structured output">
      <pre className="flow-src">{`notes.txt
decide parser tests
follow up on export`}</pre>
      <div className="flow-mid">CLI</div>
      <div className="flow-out">
        <p>
          <span>summary</span> two follow-ups
        </p>
        <p>
          <span>actions</span> write tests
        </p>
        <p>
          <span>classify</span> planning
        </p>
      </div>
    </div>
  )
}
