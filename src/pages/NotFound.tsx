import { notFoundContent } from '../content'
import { usePageMeta } from '../logic/meta'
import { NotFoundPage } from '../sections/notfound/NotFoundPage'

export default function NotFound() {
  usePageMeta(notFoundContent.meta)

  return <NotFoundPage content={notFoundContent} />
}
