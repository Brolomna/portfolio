import { site } from '../../data/site'
import type { Theme } from '../../hooks/useTheme'
import { ThemeToggle } from '../theme/ThemeToggle'

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#social-links">
        Skip to links
      </a>
      <div className="brand-lockup">
        <span className="brand-lockup__mark">{site.shortName}</span>
        <span className="brand-lockup__name">{site.name}</span>
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  )
}
