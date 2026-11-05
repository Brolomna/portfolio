import { useEffect, useState } from 'react'
import { AboutCard } from './components/cards/AboutCard'
import { FollowMe } from './components/cards/FollowMe'
import { QuickLinks } from './components/cards/QuickLinks'
import { QuoteCard } from './components/cards/QuoteCard'
import { Atmosphere } from './components/atmosphere/Atmosphere'
import { CustomCursor } from './components/cursor/CustomCursor'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { ProfileHero } from './components/hero/ProfileHero'
import { Loader } from './components/loader/Loader'
import { ScrollToTop } from './components/scroll/ScrollToTop'
import { SocialLinks } from './components/social/SocialLinks'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()
  const reduced = usePrefersReducedMotion()
  const [booting, setBooting] = useState(!reduced)

  useEffect(() => {
    if (reduced) {
      setBooting(false)
      return
    }
    const timer = window.setTimeout(() => setBooting(false), 1100)
    return () => window.clearTimeout(timer)
  }, [reduced])

  return (
    <div className="app-shell">
      <Loader visible={booting} />
      <Atmosphere />
      <CustomCursor />
      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        <ProfileHero />
        <div className="hub-grid">
          <SocialLinks />
          <QuickLinks />
          <AboutCard />
          <FollowMe />
          <QuoteCard />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
