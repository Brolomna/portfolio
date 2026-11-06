import type { VisualProps } from './primitives'

const phrases = ['Build together', 'Solve problems', 'Keep learning', 'Explore opportunities']

export function ContactVisual({ reduced }: VisualProps) {
  return (
    <div className={`viz viz-contact${reduced ? ' is-static' : ''}`} aria-hidden="true">
      <div className="contact-core">
        <span>J</span>
      </div>
      <div className="contact-rings" />
      <ul className="contact-phrases">
        {phrases.map((phrase) => (
          <li key={phrase}>{phrase}</li>
        ))}
      </ul>
    </div>
  )
}
