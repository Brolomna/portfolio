import { AnimatePresence, motion } from 'motion/react'
import { TRANSITION_MS } from '../../data/scenes'
import type { Presentation } from '../../hooks/usePresentation'
import { PresentationChrome } from '../presentation/PresentationChrome'
import { IdentityScene } from '../scenes/IdentityScene'
import { ContactScene, ProjectsScene, TeachingScene } from '../scenes/HumanScenes'
import { AIScene, LinuxScene, PythonScene, SecurityScene, WebScene } from '../scenes/TechnicalScenes'
import { AmbientCanvas } from '../visuals/AmbientCanvas'
import { StageBackdrop } from '../visuals/StageBackdrop'

type PresentationStageProps = {
  presentation: Presentation
  mode: 'embed' | 'theater'
  onExplore: () => void
}

export function PresentationStage({ presentation, mode, onExplore }: PresentationStageProps) {
  const { scene, reduced, playing } = presentation

  return (
    <section
      className={`stage stage--${mode} scene-skin scene-skin--${scene.id}${playing ? '' : ' is-paused'}`}
      id="showcase"
      aria-roledescription="carousel"
      aria-label="Autonomous professional showcase"
    >
      <div className="stage__canvas">
        <StageBackdrop />
        <AmbientCanvas active={playing} reduced={reduced} sceneId={scene.id} />
        <div className="handoff" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            initial={reduced ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, x: -18 }}
            transition={{ duration: reduced ? 0 : TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: '100%', position: 'relative', zIndex: 2 }}
          >
            {scene.id === 'identity' ? <IdentityScene onExplore={onExplore} reduced={reduced} /> : null}
            {scene.id === 'python' ? <PythonScene reduced={reduced} /> : null}
            {scene.id === 'ai' ? <AIScene reduced={reduced} /> : null}
            {scene.id === 'linux' ? <LinuxScene reduced={reduced} /> : null}
            {scene.id === 'security' ? <SecurityScene reduced={reduced} /> : null}
            {scene.id === 'web' ? <WebScene reduced={reduced} /> : null}
            {scene.id === 'projects' ? <ProjectsScene reduced={reduced} /> : null}
            {scene.id === 'teaching' ? <TeachingScene reduced={reduced} /> : null}
            {scene.id === 'contact' ? <ContactScene reduced={reduced} /> : null}
          </motion.div>
        </AnimatePresence>
        {mode === 'theater' ? <PresentationChrome presentation={presentation} /> : null}
      </div>
    </section>
  )
}
