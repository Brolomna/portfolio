export type BrandIconName =
  | 'youtube'
  | 'github'
  | 'discord'
  | 'linkedin'
  | 'instagram'
  | 'telegram'
  | 'mail'
  | 'x'
  | 'globe'
  | 'file'
  | 'book'
  | 'game'
  | 'teach'
  | 'language'

export type SocialLink = {
  id: string
  label: string
  description: string
  href: string
  icon: BrandIconName
  accent: string
}

export type QuickLink = {
  id: string
  label: string
  href: string
  icon: BrandIconName
}

export type FollowLink = {
  id: string
  label: string
  href: string
  icon: BrandIconName
}

export type Skill = {
  id: string
  label: string
  icon: 'code' | 'script' | 'linux' | 'shield' | 'web' | 'more'
}

/**
 * All destinations live here. Replace `#` with real URLs when ready.
 */
export const urls = {
  youtube: '#',
  github: '#',
  discord: '#',
  linkedin: '#',
  instagram: 'https://www.instagram.com/Just9n555/',
  telegram: '#',
  x: '#',
  email: 'mailto:',
  portfolio: '#',
  resume: '#',
  blog: '#',
  moonfall: '#',
  teaching: '#',
  thai: '#',
} as const

export const site = {
  name: 'Justin',
  shortName: 'J',
  title: 'Justin | Developer, Teacher & Creator',
  description:
    'Futuristic link hub for Justin — developer, teacher, cybersecurity enthusiast, and digital creator.',
  role: 'Developer • Teacher • Creator',
  tagline: 'Build • Teach • Explore • Grow',
  location: 'Chiang Mai, Thailand',
  about:
    "Hey! I'm Justin. A passionate developer, teacher and lifelong learner. Welcome to my link hub!",
  quote: {
    lines: ['Dream Big,', 'Build Better.'],
    attribution: 'Justin',
  },
  facts: [
    { id: 'exp', label: '4+ Years Experience', icon: 'spark' as const },
    { id: 'loc', label: 'Chiang Mai, Thailand', icon: 'pin' as const },
    { id: 'learn', label: 'Keep Learning', icon: 'book' as const },
  ],
  profileImage: '/profile.svg',
}

export const skills: Skill[] = [
  { id: 'python', label: 'Python', icon: 'code' },
  { id: 'js', label: 'JavaScript', icon: 'script' },
  { id: 'linux', label: 'Linux', icon: 'linux' },
  { id: 'sec', label: 'Cybersecurity', icon: 'shield' },
  { id: 'web', label: 'Web Development', icon: 'web' },
  { id: 'more', label: 'More...', icon: 'more' },
]

export const socialLinks: SocialLink[] = [
  {
    id: 'youtube',
    label: 'YouTube',
    description: 'Tutorials, Projects & More',
    href: urls.youtube,
    icon: 'youtube',
    accent: '#ff5b5b',
  },
  {
    id: 'github',
    label: 'GitHub',
    description: 'My Projects & Open Source',
    href: urls.github,
    icon: 'github',
    accent: '#d7dde8',
  },
  {
    id: 'discord',
    label: 'Discord',
    description: 'Join the Community',
    href: urls.discord,
    icon: 'discord',
    accent: '#8aa4ff',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: "Let's Connect",
    href: urls.linkedin,
    icon: 'linkedin',
    accent: '#5eb0ff',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    description: '@Just9n555',
    href: urls.instagram,
    icon: 'instagram',
    accent: '#ff7ad9',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    description: 'Updates & More',
    href: urls.telegram,
    icon: 'telegram',
    accent: '#5ec8ff',
  },
  {
    id: 'email',
    label: 'Email Me',
    description: 'Get in Touch',
    href: urls.email,
    icon: 'mail',
    accent: '#d58bff',
  },
]

export const quickLinks: QuickLink[] = [
  { id: 'portfolio', label: 'Portfolio', href: urls.portfolio, icon: 'globe' },
  { id: 'resume', label: 'Resume', href: urls.resume, icon: 'file' },
  { id: 'blog', label: 'Blog', href: urls.blog, icon: 'book' },
  { id: 'moonfall', label: 'Moonfall App', href: urls.moonfall, icon: 'game' },
  { id: 'teaching', label: 'Teaching', href: urls.teaching, icon: 'teach' },
  { id: 'thai', label: 'Thai Learning', href: urls.thai, icon: 'language' },
]

export const followLinks: FollowLink[] = [
  { id: 'youtube', label: 'YouTube', href: urls.youtube, icon: 'youtube' },
  { id: 'github', label: 'GitHub', href: urls.github, icon: 'github' },
  { id: 'discord', label: 'Discord', href: urls.discord, icon: 'discord' },
  { id: 'linkedin', label: 'LinkedIn', href: urls.linkedin, icon: 'linkedin' },
  { id: 'instagram', label: 'Instagram', href: urls.instagram, icon: 'instagram' },
  { id: 'telegram', label: 'Telegram', href: urls.telegram, icon: 'telegram' },
  { id: 'x', label: 'X', href: urls.x, icon: 'x' },
]
