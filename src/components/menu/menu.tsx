import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes/routes';

export const Menu: React.FC = () => {
  return (
    <>
      <ul style={{ display: 'flex', flexDirection: 'row', paddingBottom: '1rem' }}>
        {routes
          .filter((route) => route.path !== undefined && route.path !== '*')
          .map((route) => (
            <li key={route.path}>
              &nbsp;
              <Link to={route.path || '#'}>{route.name}</Link>
              {route.name !== 'Confirmation' ? ' | ' : ''}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Menu;
