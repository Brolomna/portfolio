export type SceneId =
  | 'identity'
  | 'python'
  | 'ai'
  | 'linux'
  | 'security'
  | 'web'
  | 'projects'
  | 'teaching'
  | 'contact'

export type SceneDef = {
  id: SceneId
  index: string
  duration: number
  kicker: string
  headline: string
  support: string
}

export const scenes: SceneDef[] = [
  {
    id: 'identity',
    index: '01',
    duration: 8000,
    kicker: 'Personal identity',
    headline: 'Building useful things with technology.',
    support: 'Developer · Automation · AI · Technology',
  },
  {
    id: 'python',
    index: '02',
    duration: 10000,
    kicker: 'Python and automation',
    headline: 'Turning complexity into automation.',
    support: 'Python · Workflow Automation · Practical Software',
  },
  {
    id: 'ai',
    index: '03',
    duration: 10000,
    kicker: 'Artificial intelligence',
    headline: 'Building with intelligence.',
    support: 'AI Integration · AI-assisted Development · Intelligent Workflows',
  },
  {
    id: 'linux',
    index: '04',
    duration: 10000,
    kicker: 'Linux and systems',
    headline: 'Understanding what happens underneath.',
    support: 'Linux · Systems · Troubleshooting · Networking',
  },
  {
    id: 'security',
    index: '05',
    duration: 10000,
    kicker: 'Cybersecurity',
    headline: 'Exploring the security behind technology.',
    support: 'Networking · Web Security · Security Fundamentals',
  },
  {
    id: 'web',
    index: '06',
    duration: 10000,
    kicker: 'Web development',
    headline: 'From ideas to interfaces.',
    support: 'JavaScript · HTML · CSS · Web Development',
  },
  {
    id: 'projects',
    index: '07',
    duration: 12000,
    kicker: 'Real projects',
    headline: 'Work that already exists.',
    support: 'Moonfall · AI Workflow Assistant · Data Extractor',
  },
  {
    id: 'teaching',
    index: '08',
    duration: 8000,
    kicker: 'Teaching and communication',
    headline: 'Technology meets communication.',
    support: 'Teaching · Communication · Problem Solving',
  },
  {
    id: 'contact',
    index: '09',
    duration: 8000,
    kicker: 'Contact',
    headline: "Let's build something useful.",
    support: 'Open to meaningful opportunities and collaborations.',
  },
]

export const TRANSITION_MS = 1100
