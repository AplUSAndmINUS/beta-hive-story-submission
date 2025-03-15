// filepath: beta-hive-story-submission/story-submission/src/routes/routes.tsx
import { BetaHIVESelection } from '../pages/betaHIVE-selection/betaHIVE-selection';
import PromptSelection from '../pages/prompt-selection/prompt-selection';
import StorySubmission from '../pages/story-submission/story-submission';
import ContentWarnings from '../pages/content-warnings/content-warnings';
import Confirmation from '../pages/confirmation/confirmation';
import NotFound from 'shared/pages/404/404';
import { Routes } from 'shared/services/models/routes.types';

export const storyRoutes: Routes[] = [
  {
    path: '/BetaHIVE-selection',
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
  {
    path: '*',
    name: 'Not Found',
    element: <NotFound />,
  },
];
