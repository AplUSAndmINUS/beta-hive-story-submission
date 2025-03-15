// filepath: enter-the-arena/src/routes/routes.tsx
import { arenaRoutes } from 'enter-the-arena/src/routes/arena-routes';
import { adminRoutes } from 'admin-page/src/routes/admin-routes';
import { storyRoutes } from 'story-submission/src/routes/story-routes';
import { Routes } from 'shared/services/models/routes.types';

export const routes: Routes[] = [
  ...arenaRoutes,
  ...adminRoutes.filter((name) => name.path !== '*'),
  ...storyRoutes.filter((name) => name.path !== '*'),
];
