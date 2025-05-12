import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";
import SharedLayout from "./SharedLayout/SharedLayout";
import { Toaster } from "react-hot-toast";

// Ліниве завантаження сторінок
const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const CarDetailsPage = lazy(() => import("../pages/CarDetailsPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CarDetailsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
