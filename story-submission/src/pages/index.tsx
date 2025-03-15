// filepath: beta-hive-story-submission/story-submission/src/pages/index.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BetaHIVESelection } from './betaHIVE-selection/betaHIVE-selection';
import { PromptSelection } from './prompt-selection/prompt-selection';
import { StorySubmission } from './story-submission/story-submission';
import { ContentWarnings } from './content-warnings/content-warnings';
import { Confirmation } from './confirmation/confirmation';
import { NotFound } from './404/404';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/BetaHIVE-selection" element={<BetaHIVESelection />} />
      <Route path="/prompt-selection" element={<PromptSelection />} />
      <Route path="/story-submission" element={<StorySubmission />} />
      <Route path="/content-warning" element={<ContentWarnings />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;