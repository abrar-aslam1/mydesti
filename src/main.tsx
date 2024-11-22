import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import App from './App.tsx';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationPage } from './pages/DestinationPage';
import { VenuePage } from './pages/VenuePage';
import { ContactPage } from './pages/ContactPage';
import { VenuesPage } from './pages/VenuesPage';
import { PlannersPage } from './pages/PlannersPage';
import { BlogPage } from './pages/BlogPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './index.css';

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'destinations',
        children: [
          {
            index: true,
            element: <DestinationsPage />,
          },
          {
            path: ':destinationId',
            element: <DestinationPage />,
          }
        ]
      },
      {
        path: 'venues',
        children: [
          {
            index: true,
            element: <VenuesPage />,
          },
          {
            path: ':venueId',
            element: <VenuePage />,
          }
        ]
      },
      {
        path: 'compare',
        element: <ComparisonPage />,
      },
      {
        path: 'planners',
        element: <PlannersPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
