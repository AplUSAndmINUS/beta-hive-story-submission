import { NonIndexRouteObject } from 'react-router-dom';

import { AdminPage } from '../pages/admin/admin';
import { Arena } from '../pages/arena/arena';
import { BetaHIVE } from '../pages/beta-hive/beta-hive';
import { Confirmation } from '../pages/confirmation/confirmation';
import { ContentWarnings } from '../pages/content-warnings/content-warnings';
import { GenreSelection } from '../pages/genre-selection/genre-selection';
import { NotFound } from '../pages/404/404';
import { PromptSelection } from '../pages/prompt-selection/prompt-selection';
import { StorySubmission } from '../pages/story-submission/story-submission';

export interface Routes extends NonIndexRouteObject {
  name: string;
}

export const routes: Routes[] = [
  {
    path: '/',
    name: 'Beta HIVE Page',
    element: <BetaHIVE />,
  },
  {
    path: '*',
    name: 'Not Found',
    element: <NotFound />,
  },
  {
    path: '/admin',
    name: 'Admin',
    element: <AdminPage />,
  },
  {
    path: '/betaHIVE',
    name: 'Beta HIVE Page',
    element: <BetaHIVE />,
  },
  {
    path: '/arena',
    name: 'Arena',
    element: <Arena />,
  },
  {
    path: '/genre-selection',
    name: 'Genre Selection',
    element: <GenreSelection />,
  },
  {
    path: '/prompt-selection',
    name: 'Prompt Selection',
    element: <PromptSelection />,
  },
  {
    path: '/story-submission',
    name: 'Story Submission',
    element: <StorySubmission />,
  },
  {
    path: '/content-warning',
    name: 'Content Warning',
    element: <ContentWarnings />,
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    element: <Confirmation />,
  },
];
