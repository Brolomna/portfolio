import { Presentation } from 'lucide-react'
import { site, urls } from '../../data/site'
import { enterPresent } from '../../hooks/useHashPresent'
import { requestTheater } from '../../lib/fullscreen'
import { externalLink, isConfigured } from '../../lib/links'

function GitHubMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

type SiteNavProps = {
  onNavigate?: () => void
}

export function SiteNav({ onNavigate }: SiteNavProps) {
  const go = () => onNavigate?.()

  return (
    <header className="nav">
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <a className="brand" href="#showcase" onClick={go}>
        <span className="brand__mark">{site.shortName}</span>
        {site.name}
      </a>
      <nav className="nav__links" aria-label="Primary">
        <a href="#work" onClick={go}>Work</a>
        <a href="#about" onClick={go}>About</a>
        <a href="#skills" onClick={go}>Skills</a>
        <a href="#contact" onClick={go}>Contact</a>
      </nav>
      <div className="nav__actions">
        {isConfigured(urls.github) ? (
          <a className="icon-btn" aria-label="GitHub" {...externalLink(urls.github)}>
            <GitHubMark />
          </a>
        ) : null}
        <button
          className="ghost-btn"
          type="button"
          onClick={() => {
            enterPresent()
            void requestTheater()
          }}
        >
          <Presentation size={16} />
          Presentation
        </button>
      </div>
    </header>
  )
}
