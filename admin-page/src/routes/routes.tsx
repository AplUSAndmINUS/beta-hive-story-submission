import { NonIndexRouteObject } from 'react-router-dom';

import { AdminPage } from '../pages/admin/admin';
import { NotFound } from '../pages/404/404';

export interface Routes extends NonIndexRouteObject {
  name: string;
  storySubmission?: boolean;
}

export const routes: Routes[] = [
  {
    path: '/',
    name: 'Admin',
    element: <AdminPage />,
  },
  {
    path: '*',
    name: 'Not Found',
    element: <NotFound />,
  },
];