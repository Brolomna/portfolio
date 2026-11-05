import { BookOpen, MapPin, Sparkles, User } from 'lucide-react'
import { site } from '../../data/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'

const factIcons = {
  spark: Sparkles,
  pin: MapPin,
  book: BookOpen,
}

export function AboutCard() {
  const reduced = usePrefersReducedMotion()
  const { ref, visible } = useReveal(reduced)

  return (
    <div ref={ref} className={`area-about reveal${visible ? ' is-in' : ''}`}>
    <article className="panel" aria-labelledby="about-title">
      <h2 id="about-title" className="panel__title">
        <User size={16} aria-hidden="true" />
        About Me
      </h2>
      <p className="panel__copy">{site.about}</p>
      <ul className="fact-list">
        {site.facts.map((fact) => {
          const Icon = factIcons[fact.icon]
          return (
            <li key={fact.id}>
              <span className="fact-list__icon">
                <Icon size={14} aria-hidden="true" />
              </span>
              {fact.label}
            </li>
          )
        })}
      </ul>
    </article>
    </div>
  )
}
