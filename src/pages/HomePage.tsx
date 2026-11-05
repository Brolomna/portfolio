import { useEffect } from 'react'
import { SiteNav } from '../components/nav/SiteNav'
import { PortfolioSections } from '../components/sections/PortfolioSections'
import { PresentationStage } from '../components/stage/PresentationStage'
import { site } from '../data/site'
import { usePresentation } from '../hooks/usePresentation'

export function HomePage() {
  const presentation = usePresentation({ autoPlay: true })

  useEffect(() => {
    const node = document.getElementById('showcase')
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        presentation.setHold(!entry.isIntersecting)
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [presentation.setHold])

  return (
    <div className="site">
      <SiteNav onNavigate={presentation.pause} />
      <PresentationStage
        mode="embed"
        presentation={presentation}
        onExplore={() => {
          presentation.pause()
          document.getElementById('work')?.scrollIntoView({ behavior: presentation.reduced ? 'auto' : 'smooth' })
        }}
      />
      <PortfolioSections onInteract={presentation.pause} />
      <footer className="site-footer">
        {site.name} · Explore · Learn · Build · Grow
      </footer>
    </div>
  )
}
