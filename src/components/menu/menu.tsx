import React from 'react';
import { Link, useLocation as location } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useIsMobile } from '../../utils/hooks/useIsMobile';

export const Menu: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Button to trigger modal */}
      <button
        type='button'
        className='btn position-fixed top-0 end-0 m-3'
        data-bs-toggle='offcanvas'
        data-bs-target='#menuOffcanvas'
        aria-controls='menuOffcanvas'
        title='Open Menu'
      >
        <span className='navbar-toggler-icon custom-icon'></span>
      </button>

      {/* Modal */}
      <div
        className='offcanvas offcanvas-end'
        tabIndex={-1}
        id='menuOffcanvas'
        aria-labelledby='menuOffcanvasLabel'
      >
        <div className='offcanvas-header'>
          <h3 className='offcanvas-title' id='menuOffcanvasLabel'>
            Menu
          </h3>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <ul className='nav flex-column m-0 p-0'>
            {routes
              .filter((route) => route.path !== undefined && route.path !== '*')
              .map((route, index) => (
                <li
                  key={route.path}
                  className={`nav-item ${isMobile ? 'p-0' : 'p-2'}`}
                  style={{
                    minWidth: isMobile ? 'auto' : '175px',
                    maxWidth: isMobile ? '125px' : '300px',
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
                  <hr />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
