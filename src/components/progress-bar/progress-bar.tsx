import React from 'react';

import useProgressText from '../../utils/hooks/useProgressText';
import useSetPercentage from '../../utils/hooks/useSetPercentage';

export const ProgressBar: React.FC = () => {
  const progressText = useProgressText();
  const percentage = useSetPercentage();

  return (
    <div className='container d-flex flex-column align-items-start m-0 mb-5'>
      <p className='flex-fill text-left fs-4 fw-medium'>
        {progressText}
      </p>
      <div className='progress w-100' style={{ height: '10px' }}>
        <div
          className={`progress-bar pr-2 ${
            percentage === 100 ? 'bg-success' : 'bg-primary'
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
