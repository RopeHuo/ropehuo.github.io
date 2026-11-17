export const routes = {
  home: '/',
  projects: '/projects',
  blog: '/blog',
  resume: '/resume',
  brand: '/brand',
  post: (slug: string) => `/blog/${slug}`,
  project: (slug: string) => `/projects/${slug}`,
}
