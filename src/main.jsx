import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Film from './pages/film.jsx';
import SerieTV from './pages/serieTV.jsx';
import Recenti from './pages/recenti.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/film',
    element: <Film />,
  },
  {
    path: '/serieTV',
    element: <SerieTV />,
  },
  {
    path: '/recenti',
    element: <Recenti />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

