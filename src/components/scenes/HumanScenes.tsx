import { projects, social } from '../../data/site'
import { configured, externalLink } from '../../lib/links'
import { AIWorkflowProjectVisual } from '../visuals/AIWorkflowProjectVisual'
import { ContactVisual } from '../visuals/ContactVisual'
import { DataExtractorProjectVisual } from '../visuals/DataExtractorProjectVisual'
import { MoonfallProjectVisual } from '../visuals/MoonfallProjectVisual'
import { TeachingVisual } from '../visuals/TeachingVisual'
import { SceneCopy } from './SceneCopy'

type MotionProps = {
  reduced: boolean
}

export function ProjectsScene({ reduced }: MotionProps) {
  const featured = projects.filter((project) => project.id !== 'chill-bot').slice(0, 3)

  return (
    <div className="scene scene--stack scene--projects">
      <SceneCopy
        index="07"
        kicker="Real projects"
        headline="Work that already exists."
        support="Moonfall · AI Workflow Assistant · Data Extractor"
      />
      <div className="project-stage">
        {featured.map((project) => (
          <article className="project-board" key={project.id}>
            {project.id === 'moonfall' ? <MoonfallProjectVisual reduced={reduced} /> : null}
            {project.id === 'ai-workflow' ? <AIWorkflowProjectVisual reduced={reduced} /> : null}
            {project.id === 'data-extractor' ? <DataExtractorProjectVisual reduced={reduced} /> : null}
            <h3>{project.name}</h3>
            <p>{project.blurb}</p>
            <span className="tech-tag">{project.tags.join(' · ')}</span>
          </article>
        ))}
      </div>
    </div>
  )
}

export function TeachingScene({ reduced }: MotionProps) {
  return (
    <div className="scene scene--stack">
      <SceneCopy
        index="08"
        kicker="Teaching and communication"
        headline="Technology meets communication."
        support="Teaching · Communication · Problem solving"
      />
      <TeachingVisual reduced={reduced} />
    </div>
  )
}

export function ContactScene({ reduced }: MotionProps) {
  const available = configured([...social])

  return (
    <div className="scene scene--center">
      <ContactVisual reduced={reduced} />
      <SceneCopy
        index="09"
        kicker="Closing"
        headline="Let's build something useful."
        support="Open to meaningful opportunities and collaborations."
      />
      <div className="contact-slot">
        {available.length > 0 ? (
          <div className="contact-row">
            {available.map((link) => (
              <a className="ghost-btn" key={link.id} {...externalLink(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="muted">A reserved space for conversation, when the channels are ready.</p>
        )}
      </div>
    </div>
  )
}
