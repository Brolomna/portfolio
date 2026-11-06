export type OptionalUrl = string

/**
 * Central destinations. Leave a field empty to hide its control.
 * Never use "#" or incomplete mailto values here.
 */
export const urls = {
  github: '',
  linkedin: '',
  youtube: '',
  discord: '',
  instagram: '',
  telegram: '',
  x: '',
  email: '',
  resume: '',
  blog: '',
  moonfall: '',
  aiWorkflow: '',
  dataExtractor: '',
  chillBot: '',
} satisfies Record<string, OptionalUrl>

export const site = {
  name: 'Justin',
  givenName: 'Justin',
  shortName: 'J',
  title: 'Justin — Developer, Automation & AI',
  description:
    'Cinematic portfolio for Justin — Python automation, AI-assisted development, Linux systems, and web interfaces.',
  identity: 'Developer · Automation · AI · Technology',
  headline: 'Building useful things with technology.',
  kicker: 'Developer · Automation · AI',
  focus: ['Python', 'AI', 'Automation', 'Linux', 'Web Development'],
  profileImage: '/profile.jpg',
}

export const skills = [
  { id: 'python', label: 'Python', detail: 'Automation, scripting, and practical tools' },
  { id: 'javascript', label: 'JavaScript', detail: 'Interactive interfaces in the browser' },
  { id: 'htmlcss', label: 'HTML & CSS', detail: 'Structure, layout, and visual systems' },
  { id: 'linux', label: 'Linux', detail: 'Systems, shells, and troubleshooting' },
  { id: 'git', label: 'Git & GitHub', detail: 'Version control and collaboration' },
  { id: 'automation', label: 'Python automation', detail: 'Turning repeatable work into workflows' },
  { id: 'ai-dev', label: 'AI-assisted development', detail: 'Building faster with intelligent tools' },
  { id: 'ai-int', label: 'AI integration', detail: 'Connecting models to useful pipelines' },
  { id: 'web', label: 'Web development', detail: 'From idea to working interface' },
  { id: 'security', label: 'Cybersecurity fundamentals', detail: 'Networks, the web, and defensive basics' },
]

export const domains = [
  { id: 'python', label: 'Python & Automation', icon: 'code' as const },
  { id: 'linux', label: 'Linux & Systems', icon: 'terminal' as const },
  { id: 'security', label: 'Cybersecurity', icon: 'shield' as const },
  { id: 'ai', label: 'AI Integration', icon: 'spark' as const },
  { id: 'teach', label: 'Teaching & Communication', icon: 'teach' as const },
]

export const experience = [
  {
    id: 'crimson',
    role: 'Computer Instructor',
    org: 'Crimson Education Hub',
    dates: 'October 2017 – May 2019',
    summary: 'Taught computing fundamentals and helped students work through practical problems.',
  },
  {
    id: 'brilliant',
    role: 'English Teacher',
    org: 'Shree Brilliant English Boarding School',
    dates: 'November 2021 – June 2023',
    summary: 'Taught English with an emphasis on clarity, structure, and communication.',
  },
]

export type Project = {
  id: string
  name: string
  blurb: string
  description: string
  href?: string
  tags: string[]
  cover: 'moonfall' | 'workflow' | 'extractor' | 'web'
}

export const projects: Project[] = [
  {
    id: 'moonfall',
    name: 'Moonfall',
    blurb: 'A werewolf game for players in the same room.',
    description:
      'Roles, night and day phases, and shared game state drive a local multiplayer session. Players stay in one place; the software keeps the round together.',
    href: urls.moonfall,
    tags: ['Game', 'Local multiplayer'],
    cover: 'moonfall',
  },
  {
    id: 'ai-workflow',
    name: 'AI Workflow Assistant',
    blurb: 'Notes become summaries, actions, and labels.',
    description:
      'A Python CLI that turns plain-text notes into summaries, action items, and classifications. It includes an offline demo mode and can call an OpenAI-compatible API.',
    href: urls.aiWorkflow,
    tags: ['Python', 'AI', 'CLI'],
    cover: 'workflow',
  },
  {
    id: 'data-extractor',
    name: 'Data Extractor',
    blurb: 'Pull structure out of messy input.',
    description:
      'A project focused on extracting, parsing, and exporting structured information from raw input.',
    href: urls.dataExtractor,
    tags: ['Python', 'Data'],
    cover: 'extractor',
  },
  {
    id: 'chill-bot',
    name: 'Chill Corner Bot',
    blurb: 'Community operations for Chill Corner.',
    description: 'The official bot for the Chill Corner community.',
    href: urls.chillBot,
    tags: ['Bot', 'Community'],
    cover: 'web',
  },
]

export const social = [
  { id: 'github', label: 'GitHub', href: urls.github },
  { id: 'linkedin', label: 'LinkedIn', href: urls.linkedin },
  { id: 'youtube', label: 'YouTube', href: urls.youtube },
  { id: 'discord', label: 'Discord', href: urls.discord },
  { id: 'instagram', label: 'Instagram', href: urls.instagram },
  { id: 'telegram', label: 'Telegram', href: urls.telegram },
  { id: 'email', label: 'Email', href: urls.email },
  { id: 'resume', label: 'Resume', href: urls.resume },
  { id: 'blog', label: 'Blog', href: urls.blog },
] as const
