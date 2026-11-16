import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { siteContent, uiCopy } from './content'
import { Layout } from './layout/Layout'
import Blog from './pages/Blog'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

// react-markdown 体积不小，文章页单独加载，首屏不为它买单
const PostPage = lazy(() => import('./pages/Post'))

function PostFallback() {
  return (
    <div className="py-24" aria-busy="true">
      <div className="h-2.5 w-24 animate-pulse bg-line" />
      <div className="mt-6 h-10 w-3/4 animate-pulse bg-line" />
      <div className="mt-4 h-2.5 w-1/2 animate-pulse bg-line" />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout site={siteContent} labels={uiCopy} />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="blog/:slug"
          element={
            <Suspense fallback={<PostFallback />}>
              <PostPage />
            </Suspense>
          }
        />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
