import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminPage } from './admin/admin';
import { NotFound } from './404/404';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;