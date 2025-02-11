import React from 'react';

import { Countdown } from '../../components/countdown/countdown';

export const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Home Page</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col mt-4'>
          <p>Welcome to the home page!</p>
          <Countdown />
        </div>
      </div>
      <div className='row'>
        <div className='col mt-4'>
          <p>More content will be added here.</p>
          <p>Stay tuned!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
