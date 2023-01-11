import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const HeroesPage = lazy(() => import("./pages/HeroesPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ArtifactsPage = lazy(() => import("./pages/ArtifactsPage"));
const HeroPage = lazy(() => import("./pages/HeroPage"));
import Loader from "./components/Loader";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="h-[calc(100vh-50px)] flex justify-center overflow-hidden">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

const FullLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="min-h-[90vh]">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <FullLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/heroes/:id",
        element: <HeroPage />
      }
    ]
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/heroes",
        element: <HeroesPage />,
      },
      {
        path: "/artifacts",
        element: <ArtifactsPage />,
      },
    ],
  }
]);

export default router;
