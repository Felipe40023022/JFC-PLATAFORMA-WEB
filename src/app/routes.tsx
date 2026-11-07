import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsLayout } from './pages/products/ProductsLayout';
import { TablerosPage } from './pages/products/TablerosPage';
import { IngenieriaPage } from './pages/products/IngenieriaPage';
import { RedesPage } from './pages/products/RedesPage';
import { SuministrosPage } from './pages/products/SuministrosPage';
import { SemaforizacionPage } from './pages/products/SemaforizacionPage';
import { ProyectosPage } from './pages/ProyectosPage';
import { ContactoPage } from './pages/ContactoPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'nosotros', Component: AboutPage },
      {
        path: 'productos',
        Component: ProductsLayout,
        children: [
          { path: 'tableros', Component: TablerosPage },
          { path: 'ingenieria', Component: IngenieriaPage },
          { path: 'redes', Component: RedesPage },
          { path: 'suministros', Component: SuministrosPage },
          { path: 'semaforizacion', Component: SemaforizacionPage },
        ],
      },
      { path: 'proyectos', Component: ProyectosPage },
      { path: 'contacto', Component: ContactoPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
