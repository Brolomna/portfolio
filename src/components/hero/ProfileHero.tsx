import { site } from '../../data/site'
import { SkillBadges } from './SkillBadges'

export function ProfileHero() {
  return (
    <section className="hero" aria-labelledby="profile-name">
      <div className="hero__avatar-wrap">
        <span className="hero__ring" />
        <img
          className="hero__avatar"
          src={site.profileImage}
          width={168}
          height={168}
          alt={`${site.name} profile`}
        />
        <span className="hero__status" aria-label="Online" />
      </div>
      <h1 id="profile-name" className="hero__name">
        {site.name}
      </h1>
      <p className="hero__role">{site.role}</p>
      <p className="hero__tagline">{site.tagline}</p>
      <SkillBadges />
    </section>
  )
}
