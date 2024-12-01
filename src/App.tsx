import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { routes } from './routes/routes';

import Menu from './components/menu/menu';

import './styles/_app.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
