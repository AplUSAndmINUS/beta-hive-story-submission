import React from 'react';
import { Link, useLocation as location } from 'react-router-dom';

import { routes } from '../../routes/routes';
import { useIsMobile } from '../../utils/hooks/useIsMobile';

export const Menu: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className='container sticky-top m-0 p-0'>
      <ul className='nav d-flex justify-content-start flex-wrap m-0 p-0'>
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
              className={`nav-item ${isMobile ? 'p-0' : 'p-3'} ${
                index === 0 ? 'pl-0' : ''
              }`}
              style={{
                minWidth: isMobile ? 'auto' : '175px',
                maxWidth: isMobile ? '125px' : '205px',
              }}
            >
              <Link
                to={route.path || '#'}
                className={`text-decoration-none text-body fs-5 hover-medium ${
                  location().pathname === route.path ? 'fw-bold' : ''
                }`}
                style={{ hyphens: 'auto', wordBreak: 'break-word' }}
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
