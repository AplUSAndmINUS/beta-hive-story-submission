import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { routes } from './routes/routes';
import NotFound from './pages/404/404';

import Menu from './components/menu/menu';

import './styles/_app.scss';
import ProgressBar from './components/progress-bar/progress-bar';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <ProgressBar />
      <div className='App-Main'>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
