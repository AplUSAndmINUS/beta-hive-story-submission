import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes/routes';

export const Menu: React.FC = () => {
  return (
    <div className='container sticky-top m-0 p-0'>
      <ul className='nav d-flex justify-content-start'>
        {routes
          .filter(
            (route) =>
              route.path !== undefined &&
              route.path !== '*' &&
              route.path !== '/'
          )
          .map((route, index) => (
            <li
              key={route.path}
              className={`nav-item p-3 ${index === 0 ? 'pl-0' : ''}`}
              style={{ minWidth: '200px' }}
            >
              <Link
                to={route.path || '#'}
                className='text-decoration-none text-body fs-5 hover-medium'
              >
                {route.name}&nbsp;
              </Link>
              {route.name !== 'Confirmation' ? (
                <p className='text-body fs-5'></p>
              ) : (
                ''
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
