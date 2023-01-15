import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const HeroesPage = lazy(() => import('./pages/HeroesPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ArtifactsPage = lazy(() => import('./pages/ArtifactsPage'))
const ArtifactPage = lazy(() => import('./pages/ArtifactPage'))
const HeroPage = lazy(() => import('./pages/HeroPage'))
import Loader from './components/Loader'
import ScrollToTop from './utils/ScrollToTop'

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className='flex h-[calc(100vh-56px)] justify-center overflow-hidden dark:bg-slate-900'>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

const FullLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className='min-h-[90vh]'>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <FullLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/heroes/:id',
        element: <HeroPage />,
      },
      {
        path: '/artifacts/:id',
        element: <ArtifactPage />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/heroes',
        element: <HeroesPage />,
      },
      {
        path: '/artifacts',
        element: <ArtifactsPage />,
      },
    ],
  },
])

export default router
