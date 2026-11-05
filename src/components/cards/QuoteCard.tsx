import { site } from '../../data/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'

export function QuoteCard() {
  const reduced = usePrefersReducedMotion()
  const { ref, visible } = useReveal(reduced)

  return (
    <div ref={ref} className={`area-quote reveal${visible ? ' is-in' : ''}`}>
    <figure className="quote-card">
      <span className="quote-card__mark" aria-hidden="true">
        “
      </span>
      <blockquote>
        {site.quote.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </blockquote>
      <figcaption>— {site.quote.attribution}</figcaption>
    </figure>
    </div>
  )
}
