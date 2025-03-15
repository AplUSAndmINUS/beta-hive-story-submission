import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../shared/stores/store';
import { adminRoutes } from '../admin-page/src/routes/admin-routes';
import { arenaRoutes } from '../enter-the-arena/src/routes/routes';
import { storyRoutes } from '../story-submission/src/routes/story-routes';
import Menu from '../shared/components/menu/menu';
import ProgressBar from '../shared/components/progress-bar/progress-bar';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../shared/styles/_app.scss';

let routes;
switch (process.env.REACT_APP_ENVIRONMENT) {
  case 'admin':
    routes = require('../admin-page/routes/admin-routes.tsx').adminRoutes;
    break;
  case 'arena':
    routes = require('../enter-the-arena/routes').arenaRoutes;
    break;
  case 'story':
    routes = require('../story-submission/routes').storySubmissionRoutes;
    break;
  default:
    routes = [];
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App-Main'>
          <Menu routes={routes} />
          <ProgressBar />
          <Routes>
            {routes.map((route: any, index: number) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
