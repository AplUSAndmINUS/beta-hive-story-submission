import { NonIndexRouteObject } from 'react-router-dom';

import { AdminPage } from '../pages/admin/admin';
import NotFound from '../../../shared/pages/404/404';

export interface Routes extends NonIndexRouteObject {
  name: string;
}

export const adminRoutes: Routes[] = [
  {
    path: '/admin-page',
    name: 'Admin',
    element: <AdminPage />,
  },
  {
    path: '*',
    name: 'Not Found',
    element: <NotFound />,
  },
];