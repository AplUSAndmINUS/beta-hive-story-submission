import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes/routes';

export const Menu: React.FC = () => {
  return (
    <div className='container sticky-top'>
      <ul className='nav'>
        {routes
          .filter((route) => route.path !== undefined && route.path !== '*')
          .map((route) => (
            <li key={route.path} className='nav-item'>
              &nbsp;
              <Link to={route.path || '#'}>{route.name}</Link>
              {route.name !== 'Confirmation' ? ' | ' : ''}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
