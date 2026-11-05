import { projects, social } from '../../data/site'
import { configured, externalLink, isConfigured } from '../../lib/links'
import { SceneCopy } from './SceneCopy'

export function ProjectsScene() {
  const featured = projects.slice(0, 3)

  return (
    <div className="scene">
      <SceneCopy
        index="07"
        kicker="Real projects"
        headline="Work that already exists."
        support="Moonfall · AI Workflow Assistant · Data Extractor"
      />
      <div className="project-strip project-strip--scene">
        {featured.map((project) => {
          const inner = (
            <>
              <div className={`cover cover--${project.cover}`} />
              <h3>{project.name}</h3>
              <p>{project.blurb}</p>
            </>
          )
          return isConfigured(project.href) ? (
            <a className="project-card" key={project.id} {...externalLink(project.href!)}>
              {inner}
            </a>
          ) : (
            <article className="project-card" key={project.id}>
              {inner}
            </article>
          )
        })}
      </div>
    </div>
  )
}

export function TeachingScene() {
  return (
    <div className="scene">
      <SceneCopy
        index="08"
        kicker="Teaching and communication"
        headline="Technology meets communication."
        support="Teaching · Communication · Problem solving"
      />
      <p className="overlay-note">
        Computer instruction from 2017 to 2019, then English teaching from 2021 to 2023.
      </p>
    </div>
  )
}

export function ContactScene() {
  const available = configured([...social])

  return (
    <div className="scene">
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
