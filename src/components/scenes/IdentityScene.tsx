import { domains, projects, site } from '../../data/site'
import { IdentityVisual } from '../visuals/IdentityVisual'

type IdentitySceneProps = {
  onExplore: () => void
  reduced?: boolean
}

export function IdentityScene({ onExplore, reduced }: IdentitySceneProps) {
  return (
    <div className="identity identity--signature">
      <IdentityVisual reduced={reduced} />
      <div className="identity__copy identity__copy--launch">
        <p className="kicker">{site.kicker}</p>
        <p className="identity__name">{site.name}</p>
        <h1>{site.headline}</h1>
        <p className="identity__focus">{site.focus.join(' · ')}</p>
        <div className="identity__actions">
          <button className="primary-btn" type="button" onClick={onExplore}>
            Explore my work
          </button>
        </div>
      </div>
      <div className="domain-row">
        {domains.map((domain) => (
          <span key={domain.id}>{domain.label}</span>
        ))}
      </div>
      <p className="identity__hint muted">
        {projects.length} verified projects below, described from their actual source.
      </p>
    </div>
  )
}
