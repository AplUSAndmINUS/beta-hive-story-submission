import React from 'react';
import moment from 'moment';

import { Calendar } from '../../components/calendar/calendar';
import { Countdown } from '../../components/countdown/countdown';

export const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='bd-title mb-4'>Home Page</h1>
          <p className='text-muted pb-4 mt-2 fs-5'>
            Welcome to the Beta HIVE! We're glad you're here!
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h3 className='bd-title mb-4'>Events Calendar</h3>
          <Calendar />
        </div>
      </div>
      <div className='row'>
        <div className='col mt-4'>
          <h3 className='bd-title mb-4'>Beta HIVE Countdown</h3>
          <Countdown />
        </div>
      </div>
      <div className='row'>
        <div className='col mt-4'>
          <p>More content will be added here.</p>
          <p>Stay tuned!</p>
        </div>
      </div>
      <div className='row mt-5'>
        <p>
          &copy; Copyright {moment().year()} Beta HIVE - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default HomePage;
