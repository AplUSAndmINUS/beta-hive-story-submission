import React from 'react';
import moment from 'moment';

export const Countdown: React.FC = () => {
  const targetDate = moment('2025-03-01');
  const [countdown, setCountdown] = React.useState<string>('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
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
  }, [targetDate]);
  
  return (
    <p className='text-muted pb-2 mt-2 fs-5'>
      <strong>Countdown to the date:</strong> {countdown}
    </p>
  )
};

export default Countdown;