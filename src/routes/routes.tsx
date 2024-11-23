import { NonIndexRouteObject } from 'react-router-dom';

import { Confirmation } from '../pages/confirmation/confirmation';
import { GenreSelection } from '../pages/genre-selection/genre-selection';
import { Home } from '../pages/home/home';
import { NotFound } from '../pages/404/404';
import { StorySubmission } from '../pages/story-submission/story-submission';

interface Routes extends NonIndexRouteObject {
  name: string;
}

export const routes: Routes[] = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
  {
    path: '/genre-selection',
    name: 'Genre Selection',
    element: <GenreSelection />,
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
  {
    path: '*',
    name: 'Not Found',
    element: <NotFound />,
  },
];
