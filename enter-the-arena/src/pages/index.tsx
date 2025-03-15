// filepath: beta-hive-story-submission/enter-the-arena/src/pages/index.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BetaHIVE } from './beta-hive/beta-hive';
import { BattleHIVE } from './battleHIVE/battleHIVE';
import { NotFound } from './404/404';

const IndexPage = () => {
  return (
    <Routes>
      <Route path="/BetaHIVE" element={<BetaHIVE />} />
      <Route path="/BattleHIVE" element={<BattleHIVE />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default IndexPage;