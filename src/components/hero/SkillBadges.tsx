import { Code2, Ellipsis, Globe, Shield, SquareTerminal, Braces } from 'lucide-react'
import { skills } from '../../data/site'

const icons = {
  code: Code2,
  script: Braces,
  linux: SquareTerminal,
  shield: Shield,
  web: Globe,
  more: Ellipsis,
}

export function SkillBadges() {
  return (
    <ul className="skill-row" aria-label="Skills">
      {skills.map((skill) => {
        const Icon = icons[skill.icon]
        return (
          <li key={skill.id}>
            <span className="skill-chip">
              <Icon size={14} aria-hidden="true" />
              {skill.label}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
