// filepath: enter-the-arena/src/routes/arena-routes.tsx
import { BetaHIVE } from '../pages/beta-hive/beta-hive';
import BattleHIVE from '../pages/battleHIVE/battleHIVE';
import { NotFound } from '../pages/404/404';
import { Routes } from 'shared/services/models/routes.types';

export const arenaRoutes: Routes[] = [
  {
    path: '/BetaHIVE',
    name: 'Beta HIVE Page',
    element: <BetaHIVE />,
  },
  {
    path: '/BattleHIVE',
    name: 'Battle HIVE',
    element: <BattleHIVE />,
  },
  {
    path: '*',
    name: 'Not Found',
    element: <NotFound />,
  },
];
