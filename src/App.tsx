import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation as location } from 'react-router-dom';
import { Provider } from 'react-redux';

import { routes } from './routes/routes';
import NotFound from './pages/404/404';
import store from './stores/store';
import Menu from './components/menu/menu';

import './styles/_app.scss';
import ProgressBar from './components/progress-bar/progress-bar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App-Main'>
          <Menu />
          <ProgressBar />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
