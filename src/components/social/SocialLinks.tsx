import { socialLinks } from '../../data/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'
import { SocialLinkCard } from './SocialLinkCard'

export function SocialLinks() {
  const reduced = usePrefersReducedMotion()
  const { ref, visible } = useReveal(reduced)

  return (
    <div ref={ref} className={`area-social reveal${visible ? ' is-in' : ''}`}>
    <section id="social-links" aria-label="Social links">
      <ul className="social-list">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <SocialLinkCard link={link} />
          </li>
        ))}
      </ul>
    </section>
    </div>
  )
}
