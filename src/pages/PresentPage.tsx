import { useEffect, useRef } from 'react'
import { PresentationStage } from '../components/stage/PresentationStage'
import { exitPresent } from '../hooks/useHashPresent'
import { usePresentation } from '../hooks/usePresentation'
import { leaveTheater } from '../lib/fullscreen'

export function PresentPage() {
  const presentation = usePresentation({ autoPlay: true })
  const armed = useRef(false)

  useEffect(() => {
    armed.current = Boolean(document.fullscreenElement)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        event.preventDefault()
        presentation.toggle()
      }
      if (event.key === 'ArrowRight') presentation.next()
      if (event.key === 'ArrowLeft') presentation.prev()
      if (event.key === 'Escape') {
        void leaveTheater()
        exitPresent()
      }
    }
    const onFull = () => {
      if (document.fullscreenElement) armed.current = true
      else if (armed.current) exitPresent()
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('fullscreenchange', onFull)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('fullscreenchange', onFull)
    }
  }, [presentation.toggle, presentation.next, presentation.prev])

  return (
    <div className="site">
      <PresentationStage
        mode="theater"
        presentation={presentation}
        onExplore={() => presentation.goTo(6)}
      />
    </div>
  )
}
