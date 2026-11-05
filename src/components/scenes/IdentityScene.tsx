import { Code2, GraduationCap, Shield, Sparkles, SquareTerminal } from 'lucide-react'
import { domains, projects, site, urls } from '../../data/site'
import { externalLink, isConfigured } from '../../lib/links'

const icons = {
  code: Code2,
  terminal: SquareTerminal,
  shield: Shield,
  spark: Sparkles,
  teach: GraduationCap,
}

type IdentitySceneProps = {
  onExplore: () => void
}

export function IdentityScene({ onExplore }: IdentitySceneProps) {
  const featured = projects.slice(0, 4)

  return (
    <div className="identity">
      <div className="identity__hero">
        <div className="identity__copy">
          <p className="kicker">{site.kicker}</p>
          <p className="identity__name">{site.name}</p>
          <h1>{site.headline}</h1>
          <p className="identity__focus">{site.focus.join(' · ')}</p>
          <div className="identity__actions">
            <button className="primary-btn" type="button" onClick={onExplore}>
              Explore my work
            </button>
            {isConfigured(urls.github) ? (
              <a className="ghost-btn" {...externalLink(urls.github)}>
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="featured">
        <div className="featured__top">
          <div>
            <h2>Selected work</h2>
            <p>Verified projects, described as they actually exist.</p>
          </div>
          <a className="muted" href="#work">
            View all
          </a>
        </div>
        <div className="project-strip">
          {featured.map((project) => {
            const inner = (
              <>
                <div className={`cover cover--${project.cover}`} />
                <h3>{project.name}</h3>
                <p>{project.blurb}</p>
              </>
            )
            return isConfigured(project.href) ? (
              <a className="project-card" key={project.id} {...externalLink(project.href!)}>
                {inner}
              </a>
            ) : (
              <article className="project-card" key={project.id}>
                {inner}
              </article>
            )
          })}
        </div>
      </div>

      <div className="domain-row">
        {domains.map((domain) => {
          const Icon = icons[domain.icon]
          return (
            <span key={domain.id}>
              <Icon size={14} aria-hidden="true" />
              {domain.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
