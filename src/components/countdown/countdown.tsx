import React from 'react';
import moment from 'moment';

import { useAppSelector } from '../../stores/store';

interface CountdownProps {
  isCountdown?: boolean;
  isTimer?: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({
  isCountdown,
  isTimer,
}) => {
  const countdownDate = useAppSelector(
    (state) => state.adminSubmission.countdownDate
  );
  const [countdown, setCountdown] = React.useState<string>('');
  const [timer, setTimer] = React.useState<string>('');

  React.useEffect(() => {
    if (isCountdown) {
      const interval = setInterval(() => {
        const now = moment();
        const targetDate = moment(countdownDate);
        const diff = targetDate.diff(now);
        const duration = moment.duration(diff);

        const formatDuration = (value: number, unit: string) => {
          return `${value} ${unit}${value === 1 ? '' : 's'}`;
        };

        const formattedCountdown = `${formatDuration(
          duration.months(),
          'month'
        )}, ${formatDuration(duration.days(), 'day')}, ${formatDuration(
          duration.hours(),
          'hour'
        )}, ${formatDuration(duration.minutes(), 'minute')}, ${formatDuration(
          duration.seconds(),
          'second'
        )}`;

        setCountdown(formattedCountdown);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (isTimer) {
      const targetDate = moment().add(5, 'minutes'); // Calculate targetDate once
      const interval = setInterval(() => {
        const now = moment();
        const diff = targetDate.diff(now);
        const duration = moment.duration(diff);

        const formatDuration = (value: number) => {
          return value.toString().padStart(2, '0');
        };

        const formattedTimer = `${formatDuration(
          duration.hours()
        )}:${formatDuration(duration.minutes())}:${formatDuration(
          duration.seconds()
        )}`;

        setTimer(formattedTimer);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isCountdown, isTimer, countdownDate]);

  return (
    <>
      {isCountdown && (
        <div className='pb-2 pt-4 mt-4 mb-4 fs-5 w-75 m-auto'>
          <h2 className='bd-title pb-2'>Countdown:</h2>
          <h3
            className='display bg-dark text-white text-center py-3 rounded mb-3'
            id='countdownDisplay'
          >
            {countdown}
            <br /> <span className='mt-4'>until the HIVE opens!</span>
          </h3>
        </div>
      )}
      {isTimer && (
        <div className='pb-2 pt-4 mt-4 mb-4 fs-5 w-25 m-auto'>
          <h2 className='bd-title pb-2'>Timer:</h2>
          <h3
            className='display bg-dark text-white text-center py-3 rounded mb-3'
            id='timerDisplay'
          >
            {timer}
          </h3>
        </div>
      )}
      {!isCountdown && !isTimer && null}
    </>
  );
};

export default Countdown;
