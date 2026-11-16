import type { HomeContent, ProjectItem } from '../../../content/types'
import type { LoadedPost } from '../../content/posts'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { FeaturedWorkSection } from './FeaturedWorkSection'
import { HeroSection } from './HeroSection'
import { StatsSection } from './StatsSection'
import { TrustLine } from './TrustLine'
import { WritingSection } from './WritingSection'

interface HomePageProps {
  content: HomeContent
  featured: ProjectItem[]
  latestPosts: LoadedPost[]
  readTimeTemplate: string
}

export function HomePage({ content, featured, latestPosts, readTimeTemplate }: HomePageProps) {
  return (
    <>
      <HeroSection content={content.hero} />
      <FeaturedWorkSection content={content.work} projects={featured} />
      <TrustLine content={content.trust} />
      <AboutSection content={content.about} />
      <WritingSection
        content={content.writing}
        posts={latestPosts}
        readTimeTemplate={readTimeTemplate}
      />
      <StatsSection content={content.stats} />
      <ContactSection content={content.contact} />
    </>
  )
}
