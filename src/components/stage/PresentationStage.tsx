import { AnimatePresence, motion } from 'motion/react'
import { TRANSITION_MS } from '../../data/scenes'
import type { Presentation } from '../../hooks/usePresentation'
import { PresentationChrome } from '../presentation/PresentationChrome'
import { IdentityScene } from '../scenes/IdentityScene'
import { ContactScene, ProjectsScene, TeachingScene } from '../scenes/HumanScenes'
import { AIScene, LinuxScene, PythonScene, SecurityScene, WebScene } from '../scenes/TechnicalScenes'
import { AmbientCanvas } from '../visuals/AmbientCanvas'
import { MorphField } from '../visuals/MorphField'
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
      className={`stage stage--${mode}`}
      id="showcase"
      aria-roledescription="carousel"
      aria-label="Autonomous professional showcase"
    >
      <div className="stage__canvas">
        <StageBackdrop />
        <AmbientCanvas active={playing} reduced={reduced} />
        <MorphField sceneId={scene.id} reduced={reduced} active={playing} />
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduced ? 0 : TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: '100%', position: 'relative', zIndex: 2 }}
          >
            {scene.id === 'identity' ? <IdentityScene onExplore={onExplore} /> : null}
            {scene.id === 'python' ? <PythonScene /> : null}
            {scene.id === 'ai' ? <AIScene /> : null}
            {scene.id === 'linux' ? <LinuxScene /> : null}
            {scene.id === 'security' ? <SecurityScene /> : null}
            {scene.id === 'web' ? <WebScene reduced={reduced} /> : null}
            {scene.id === 'projects' ? <ProjectsScene /> : null}
            {scene.id === 'teaching' ? <TeachingScene /> : null}
            {scene.id === 'contact' ? <ContactScene /> : null}
          </motion.div>
        </AnimatePresence>
        {mode === 'theater' ? <PresentationChrome presentation={presentation} /> : null}
      </div>
    </section>
  )
}
