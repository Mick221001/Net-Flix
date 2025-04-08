import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import Film from "./pages/film.jsx";
import SerieTV from "./pages/serietv.jsx";
import Recenti from "./pages/recenti.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // Homepage dentro App.jsx
      { path: "film", element: <Film /> },
      { path: "serietv", element: <SerieTV /> },
      { path: "recenti", element: <Recenti /> },
    ],
  },
]);

const rootElement = document.getElementById("root")
  if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Elemento #root non trovato! Controlla index.html.");
}


