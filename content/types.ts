export type ProjectCategory = 'ai' | 'arch' | 'multi'
export type ActionEmphasis = 'primary' | 'secondary' | 'link'

export interface NavItem {
  href: string
  label: string
  index: string
  end?: boolean
}

export interface ContactItem {
  label: string
  value: string
  href: string
  external?: boolean
}

export interface ActionItem {
  label: string
  href: string
  external?: boolean
  emphasis?: ActionEmphasis
}

export interface SiteContent {
  name: string
  role: string
  tagline: string
  description: string
  url: string
  email: string
  github: string
  cnblogs: string
  startYear: number
  wordmark: string
  railTagline: string
  nav: NavItem[]
  contacts: ContactItem[]
  footer: {
    status: string
    copyright: string
    railCopyright: string
    builtWith: string
    wordmarkLabel: string
  }
  meta: {
    defaultTitle: string
    defaultDescription: string
  }
}

export interface UiCopy {
  skipToContent: string
  menu: string
  close: string
  theme: string
  themeToLight: string
  themeToDark: string
  code: string
  copy: string
  copied: string
  homeLabel: string
  mainNav: string
  mobileNav: string
  projectFilter: string
  postNav: string
}

export interface Feature {
  title: string
  body: string
}

export interface Stat {
  value: string
  label: string
}

export interface HomeContent {
  meta: {
    title?: string
    description?: string
  }
  hero: {
    eyebrow: string
    headline: string[]
    intro: string
    actions: ActionItem[]
  }
  work: {
    label: string
    allLabel: string
    cardLabel: string
  }
  trust: {
    period: string
    organizations: string[]
    suffix: string
  }
  about: {
    label: string
    paragraphs: string[]
    features: Feature[]
  }
  writing: {
    label: string
    allLabel: string
  }
  stats: {
    label: string
    items: Stat[]
  }
  contact: {
    label: string
    headline: string[]
    body: string
    actions: ActionItem[]
  }
}

export interface ProjectEnd {
  label: string
  body: string
}

export interface ProjectDecision {
  title: string
  body: string
}

export interface ProjectEvidence {
  label: string
  value: string
}

export interface ProjectDetail {
  ends: {
    left: ProjectEnd
    right: ProjectEnd
    note: string
  }
  knot: {
    intro: string
    decisions: ProjectDecision[]
  }
  load: {
    intro: string
    points: string[]
    evidence: ProjectEvidence[]
  }
  light: {
    intro: string
    points: string[]
  }
}

export interface ProjectItem {
  slug: string
  title: string
  role: string
  period: string
  category: ProjectCategory
  postSlug?: string
  featured?: boolean
  summary: string
  highlights: string[]
  stack: string[]
  detail: ProjectDetail
}

export interface ProjectsContent {
  meta: {
    title: string
    description: string
  }
  header: {
    index: string
    label: string
    title: string
    intro: string
  }
  filters: { key: ProjectCategory | 'all'; label: string }[]
  note: string
  actions: {
    project: string
    post: string
  }
  nav: {
    back: string
    previous: string
    next: string
  }
  notFound: {
    label: string
    title: string
    actionLabel: string
  }
  items: ProjectItem[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Job {
  company: string
  role: string
  period: string
  points: string[]
}

export interface ResumeContent {
  meta: {
    title: string
    description: string
  }
  header: {
    index: string
    label: string
    role: string
    experience: string
    printLabel: string
    printNote: string
  }
  contacts: ContactItem[]
  intro: string
  sections: {
    skills: string
    experience: string
    projects: string
    education: string
    writing: string
  }
  skillGroups: SkillGroup[]
  experience: Job[]
  education: {
    degree: string
    major: string
  }
  articles: { title: string; href: string; source: string }[]
}

export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  content: string
}

export interface BlogContent {
  meta: {
    title: string
    description: string
  }
  header: {
    index: string
    label: string
    title: string
    intro: string
  }
  countTemplate: string
  post: {
    backLabel: string
    contentsLabel: string
    readTimeTemplate: string
    newerLabel: string
    olderLabel: string
    notFound: {
      label: string
      title: string
      actionLabel: string
    }
  }
}

export interface NotFoundContent {
  meta: {
    title: string
  }
  label: string
  code: string
  command: string
  message: string
  actions: ActionItem[]
}
