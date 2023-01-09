import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const HeroesPage = lazy(() => import("./pages/HeroesPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ArtifactsPage = lazy(() => import("./pages/ArtifactsPage"));

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[85vh] container mx-auto p-2">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/heroes",
        element: <HeroesPage />,
      },
      {
        path: "/artifacts",
        element: <ArtifactsPage />,
      },
    ],
  },
]);

export default router;
