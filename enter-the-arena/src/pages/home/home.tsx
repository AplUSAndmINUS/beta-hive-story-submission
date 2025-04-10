import React from 'react';
import moment from 'moment';

import { useAppSelector } from '../../../../shared/stores/store';
import { Calendar } from '../../../../shared/components/calendar/calendar';
import { Countdown } from '../../../../shared/components/countdown/countdown';

import BattleHIVE from '../battleHIVE/battleHIVE';
import BetaHIVE from '../beta-hive/beta-hive';

export const HomePage: React.FC = () => {
  const { betaHIVESelection, storySubmission } = useAppSelector(
    (state) => state.storySubmission
  );
  const { countdownDate } = useAppSelector((state) => state.adminSubmission);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='bd-title mb-4'>Home Page</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Welcome! We're glad you're here!
          </p>
        </div>
      </div>
      {moment(countdownDate) >= moment() ? (
        <>
          <div className='row'>
            <div className='col mt-4'>
              <h3 className='bd-title pb-2'>Battle HIVE will be launching soon!</h3>
              <p className='pb-2'>
                Keep checking back for updates.
              </p>
              <Countdown isCountdown />
              <Countdown isTimer />
            </div>
          </div>
          <div className='row'>
            <div className='col mt-4'></div>
          </div>
        </>
      ) : (
        <div className='row'>
          <div className='col mt-4'>
            <h3 className='bd-title pb-2'>The Battle HIVE is open!</h3>
            <button className='btn btn-primary'>Enter the BattleHIVE</button>
          </div>
        </div>
      )}
      {!betaHIVESelection && <BetaHIVE />}
      <div className='row'>
        <div className='col'>
          <h3 className='bd-title mb-4'>Events Calendar</h3>
          <Calendar />
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
