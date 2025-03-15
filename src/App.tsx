import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { routes } from './routes/routes';
import NotFound from './pages/404/404';
import store from '../shared/stores/store';
import Menu from '../shared/components/menu/menu';
import ProgressBar from '../shared/components/progress-bar/progress-bar';

import './styles/_app.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App-Main'>
          <Menu />
          <ProgressBar />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
