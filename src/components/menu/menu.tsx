import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes/routes';

export const Menu: React.FC = () => {
  return (
    <div className='container sticky-top p-4'>
      <ul className='nav'>
        {routes
          .filter((route) => route.path !== undefined && route.path !== '*')
          .map((route) => (
            <li
              key={route.path}
              className='nav-item d-flex justify-content-around'
            >
              &nbsp;
              <Link
                to={route.path || '#'}
                className='text-decoration-none text-body fs-5 mr-3'
              >
                {route.name}
              </Link>
              {route.name !== 'Confirmation' ? (
                <p className='text-body fs-5'> | </p>
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
