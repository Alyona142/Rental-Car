import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Loader from "../../components/Loader/Loader";
import "./App.css";

import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CarPage = lazy(() => import("../../pages/CarPage/CarPage"));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:carId" element={<CarPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
