import type { VisualProps } from './primitives'

export function AIProcessingVisual({ reduced }: VisualProps) {
  return (
    <div className={`viz viz-ai${reduced ? ' is-static' : ''}`} aria-label="AI processing workflow">
      <div className="ai-col ai-col--in">
        <article className="doc-card doc-1">
          <span>source</span>
          <p>Meeting notes from the last working session…</p>
        </article>
        <article className="doc-card doc-2">
          <span>context</span>
          <p>Keep only tasks, owners, and dates.</p>
        </article>
      </div>
      <div className="ai-core" aria-hidden="true">
        <div className="ai-plane ai-plane--a" />
        <div className="ai-plane ai-plane--b" />
        <div className="ai-plane ai-plane--c" />
        <p>Model</p>
        <small>one tool in the pipeline</small>
      </div>
      <div className="ai-col ai-col--out">
        <article className="result-card result-1">
          <span>summary</span>
          <p>Three follow-ups, one blocked item.</p>
        </article>
        <article className="result-card result-2">
          <span>actions</span>
          <p>Draft the parser tests.</p>
        </article>
        <article className="result-card result-3">
          <span>classify</span>
          <p>planning · follow-up</p>
        </article>
        <div className="review-pill">
          <i />
          Human review
        </div>
      </div>
    </div>
  )
}
