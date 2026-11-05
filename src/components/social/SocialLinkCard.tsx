import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { SocialLink } from '../../data/site'
import { BrandIcon } from '../icons/BrandIcons'
import { linkProps } from '../../lib/links'

type SocialLinkCardProps = {
  link: SocialLink
}

export function SocialLinkCard({ link }: SocialLinkCardProps) {
  return (
    <a
      className="social-card"
      style={{ '--accent': link.accent } as CSSProperties}
      {...linkProps(link.href)}
    >
      <span className="social-card__icon">
        <BrandIcon name={link.icon} />
      </span>
      <span className="social-card__copy">
        <span className="social-card__label">{link.label}</span>
        <span className="social-card__desc">{link.description}</span>
      </span>
      <span className="social-card__go" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </a>
  )
}
