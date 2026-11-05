import { ChevronLeft, ChevronRight, Maximize, Minimize, Pause, Play, X } from 'lucide-react'
import type { Presentation } from '../../hooks/usePresentation'
import { exitPresent } from '../../hooks/useHashPresent'
import { leaveTheater, requestTheater } from '../../lib/fullscreen'

type PresentationChromeProps = {
  presentation: Presentation
}

export function PresentationChrome({ presentation }: PresentationChromeProps) {
  const { playing, toggle, next, prev, progress, reduced, scene, scenes } = presentation

  return (
    <div className="chrome" role="group" aria-label="Presentation controls">
      <button
        type="button"
        className="icon-btn"
        onClick={prev}
        aria-label="Previous scene"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        className="icon-btn"
        onClick={toggle}
        aria-label={playing ? 'Pause' : 'Play'}
        disabled={reduced}
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
      </button>
      <button type="button" className="icon-btn" onClick={next} aria-label="Next scene">
        <ChevronRight size={16} />
      </button>
      <div className="chrome__progress" aria-hidden="true">
        <span style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>
      <p className="chrome__label">
        {scene.index} · {scene.kicker}
      </p>
      <button
        type="button"
        className="icon-btn"
        aria-label="Toggle fullscreen"
        onClick={() => {
          if (document.fullscreenElement) void leaveTheater()
          else void requestTheater()
        }}
      >
        {document.fullscreenElement ? <Minimize size={14} /> : <Maximize size={14} />}
      </button>
      <button
        type="button"
        className="ghost-btn"
        onClick={() => {
          void leaveTheater()
          exitPresent()
        }}
      >
        <X size={14} />
        Exit
      </button>
      <span className="visually-hidden">
        {scenes.length} scenes
      </span>
    </div>
  )
}
