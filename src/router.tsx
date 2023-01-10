import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const HeroesPage = lazy(() => import("./pages/HeroesPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ArtifactsPage = lazy(() => import("./pages/ArtifactsPage"));
import Loader from "./components/Loader";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh] container mx-auto p-2">
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

const FullLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh]">
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
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
