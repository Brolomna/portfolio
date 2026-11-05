import { experience, projects, site, skills, social } from '../../data/site'
import { configured, externalLink, isConfigured } from '../../lib/links'

type PortfolioSectionsProps = {
  onInteract: () => void
}

export function PortfolioSections({ onInteract }: PortfolioSectionsProps) {
  const channels = configured([...social])

  return (
    <div onPointerDown={onInteract}>
      <section className="section" id="work">
        <p className="scene-label">Work</p>
        <h2>Projects with public source.</h2>
        <p className="muted">Described from the actual repositories. No invented metrics or screenshots.</p>
        <div className="grid-2" style={{ marginTop: 28 }}>
          {projects.map((project) => (
            <article className="panel" key={project.id}>
              <div className={`cover cover--${project.cover}`} style={{ height: 120, borderRadius: 12, marginBottom: 16 }} />
              <h3>{project.name}</h3>
              <p className="muted">{project.description}</p>
              <div className="chip-wrap" style={{ margin: '14px 0' }}>
                {project.tags.map((tag) => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
              {isConfigured(project.href) ? (
                <a className="ghost-btn" {...externalLink(project.href!)}>
                  Repository
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <p className="scene-label">About</p>
        <h2>A developer who also teaches.</h2>
        <p>
          {site.givenName} builds practical software with Python, JavaScript, and Linux, and uses AI as a tool for
          development and workflow design.
        </p>
        <div className="grid-2" style={{ marginTop: 28 }}>
          {experience.map((item) => (
            <article className="panel" key={item.id}>
              <p className="scene-label">{item.dates}</p>
              <h3>{item.role}</h3>
              <p>{item.org}</p>
              <p className="muted">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <p className="scene-label">Skills</p>
        <h2>Tools used to make useful things.</h2>
        <div className="grid-2" style={{ marginTop: 28 }}>
          {skills.map((skill) => (
            <article className="panel" key={skill.id}>
              <h3>{skill.label}</h3>
              <p className="muted">{skill.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <p className="scene-label">Contact</p>
        <h2>Let&apos;s build something useful.</h2>
        <p className="muted">Open to meaningful opportunities and collaborations.</p>
        {channels.length > 0 ? (
          <div className="contact-row">
            {channels.map((link) => (
              <a className="primary-btn" key={link.id} {...externalLink(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <div className="contact-slot" style={{ marginTop: 24 }}>
            <p className="muted">A reserved space for conversation, when the channels are ready.</p>
          </div>
        )}
      </section>
    </div>
  )
}
