import React from 'react';
import moment from 'moment';

import { useAppSelector } from '../../stores/store';
import { Calendar } from '../../components/calendar/calendar';
import { Countdown } from '../../components/countdown/countdown';

import Arena from '../arena/arena';
import BetaHIVE from '../beta-hive/beta-hive';

export const HomePage: React.FC = () => {
  const { genreSelection, storySubmission } = useAppSelector(
    (state) => state.storySubmission
  );
  const { countdownDate } = useAppSelector((state) => state.adminSubmission);

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
      {countdownDate >= moment() ? (
        <>
          <div className='row'>
            <div className='col mt-4'>
              <h3 className='bd-title pb-2'>Battle HIVE Coming Soon!</h3>
              <p className='pb-2'>
                The Battle HIVE will start soon! Keep checking back for updates.
              </p>
              <Countdown />
            </div>
          </div>
          <div className='row'>
            <div className='col mt-4'>
            </div>
          </div>
        </>
      ) : (
        <div className='row'>
          <div className='col mt-4'>
            <h3 className='bd-title pb-2'>The Battle HIVE is open!</h3>
            <button className='btn btn-primary'>Enter the Arena</button>
          </div>
        </div>
      )}
      <div className='row'>
        <div className='col'>
          <h3 className='bd-title mb-4'>Events Calendar</h3>
          <Calendar />
        </div>
      </div>
      {genreSelection && <BetaHIVE />}
      <div className='row mt-5'>
        <p>
          &copy; Copyright {moment().year()} Beta HIVE - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default HomePage;
