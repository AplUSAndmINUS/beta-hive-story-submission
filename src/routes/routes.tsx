import { NonIndexRouteObject } from 'react-router-dom';

import { Arena } from '../pages/arena/arena';
import { BetaHIVE } from '../pages/beta-hive/beta-hive';
import { Confirmation } from '../pages/confirmation/confirmation';
import { ContentWarnings } from '../pages/content-warnings/content-warnings';
import { GenreSelection } from '../pages/genre-selection/genre-selection';
import { NotFound } from '../pages/404/404';
import { PromptSelection } from '../pages/prompt-selection/prompt-selection';
import { StorySubmission } from '../pages/story-submission/story-submission';

interface Routes extends NonIndexRouteObject {
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
    path: '/content-warning',
    name: 'Content Warning',
    element: <ContentWarnings />,
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
    path: '/confirmation',
    name: 'Confirmation',
    element: <Confirmation />,
  },
];
