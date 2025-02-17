import React from 'react';
import moment from 'moment';

import { useAppSelector } from '../../stores/store';

export const Countdown: React.FC = () => {
  const countdownDate = useAppSelector(
    (state) => state.adminSubmission.countdownDate
  );
  const [countdown, setCountdown] = React.useState<string>('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const diff = countdownDate.diff(now);
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
  }, [countdownDate]);

  return (
    <p className='text-muted pb-2 mt-2 fs-5'>
      <strong>Countdown to the date:</strong> {countdown}
    </p>
  );
};

export default Countdown;
