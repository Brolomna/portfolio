import { site } from '../../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <span className="site-footer__mark" aria-hidden="true">
        {site.shortName}
      </span>
      <p>
        {site.name} • {site.location}
      </p>
      <p>Made with ❤️ for the community.</p>
    </footer>
  )
}
