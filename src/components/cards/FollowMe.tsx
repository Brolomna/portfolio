import { followLinks } from '../../data/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'
import { BrandIcon } from '../icons/BrandIcons'
import { linkProps } from '../../lib/links'

export function FollowMe() {
  const reduced = usePrefersReducedMotion()
  const { ref, visible } = useReveal(reduced)

  return (
    <div ref={ref} className={`area-follow reveal${visible ? ' is-in' : ''}`}>
    <section className="panel" aria-labelledby="follow-title">
      <h2 id="follow-title" className="panel__title">
        Follow Me
      </h2>
      <ul className="follow-grid">
        {followLinks.map((link) => (
          <li key={link.id}>
            <a className="follow-orb" {...linkProps(link.href)} aria-label={link.label}>
              <BrandIcon name={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
    </div>
  )
}
