import { NonIndexRouteObject } from 'react-router-dom';

import { AdminPage } from '../pages/admin/admin';
import { Arena } from '../pages/arena/arena';
import { BetaHIVE } from '../pages/beta-hive/beta-hive';
import { Confirmation } from '../pages/confirmation/confirmation';
import { ContentWarnings } from '../pages/content-warnings/content-warnings';
import { BetaHIVESelection } from '../pages/betaHIVE-selection/betaHIVE-selection';
import { HomePage } from '../pages/home/home';
import { NotFound } from '../pages/404/404';
import { PromptSelection } from '../pages/prompt-selection/prompt-selection';
import { StorySubmission } from '../pages/story-submission/story-submission';

export interface Routes extends NonIndexRouteObject {
  name: string;
  storySubmission?: boolean;
}

export const routes: Routes[] = [
  {
    path: '/',
    name: 'Home',
    element: <HomePage />,
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
    path: '/battleHIVE',
    name: 'Battle HIVE',
    element: <Arena />,
  },
  {
    path: '/betaHIVE-selection',
    name: 'Beta HIVE Selection',
    element: <BetaHIVESelection />,
    storySubmission: true,
  },
  {
    path: '/prompt-selection',
    name: 'Prompt Selection',
    element: <PromptSelection />,
    storySubmission: true,
  },
  {
    path: '/story-submission',
    name: 'Story Submission',
    element: <StorySubmission />,
    storySubmission: true,
  },
  {
    path: '/content-warning',
    name: 'Content Warning',
    element: <ContentWarnings />,
    storySubmission: true,
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    element: <Confirmation />,
    storySubmission: true,
  },
];
