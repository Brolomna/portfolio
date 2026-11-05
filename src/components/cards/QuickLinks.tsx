import { ArrowUpRight } from 'lucide-react'
import { quickLinks } from '../../data/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'
import { BrandIcon } from '../icons/BrandIcons'
import { linkProps } from '../../lib/links'

export function QuickLinks() {
  const reduced = usePrefersReducedMotion()
  const { ref, visible } = useReveal(reduced)

  return (
    <div ref={ref} className={`area-quick reveal${visible ? ' is-in' : ''}`}>
    <section className="panel" aria-labelledby="quick-title">
      <h2 id="quick-title" className="panel__title">
        Quick Links
      </h2>
      <ul className="quick-list">
        {quickLinks.map((link) => (
          <li key={link.id}>
            <a className="quick-row" {...linkProps(link.href)}>
              <span className="quick-row__icon">
                <BrandIcon name={link.icon} />
              </span>
              <span>{link.label}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
    </div>
  )
}
