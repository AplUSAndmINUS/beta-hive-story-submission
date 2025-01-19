import { NonIndexRouteObject } from 'react-router-dom';

import { Arena } from '../pages/arena/arena';
import { BetaHIVE } from '../pages/beta-hive/beta-hive';
import { Confirmation } from '../pages/confirmation/confirmation';
import { GenreSelection } from '../pages/genre-selection/genre-selection';
import { NotFound } from '../pages/404/404';
import { PromptSelection } from '../pages/prompt-selection/prompt-selection';
import { StorySubmission } from '../pages/story-submission/story-submission';
import { StoryView } from '../pages/story-view/story-view';

interface Routes extends NonIndexRouteObject {
  name: string;
}

export const routes: Routes[] = [
  {
    path: '/',
    name: 'Genre Selection',
    element: <GenreSelection />,
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
    path: '/story-view',
    name: 'Story View',
    element: <StoryView onClose={() => { }}/>,
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
    path: '/confirmation',
    name: 'Confirmation',
    element: <Confirmation />,
  },
];
