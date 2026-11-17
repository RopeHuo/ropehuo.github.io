import { brandContent, featuredProjects } from '../content'
import { usePageMeta } from '../logic/meta'
import { BrandPage } from '../sections/brand/BrandPage'

export default function Brand() {
  usePageMeta(brandContent.meta)

  return <BrandPage content={brandContent} project={featuredProjects[0]} />
}
