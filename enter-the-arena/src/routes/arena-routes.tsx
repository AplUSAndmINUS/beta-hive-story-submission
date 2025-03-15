// filepath: enter-the-arena/src/routes/routes.tsx
import { NonIndexRouteObject } from 'react-router-dom';

import { BetaHIVE } from '../pages/beta-hive/beta-hive';
import BattleHIVE from '../pages/battleHIVE/battleHIVE';
import { NotFound } from '../pages/404/404';

export interface Routes extends NonIndexRouteObject {
  name: string;
}

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