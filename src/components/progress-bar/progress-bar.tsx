import React from 'react';
import { useLocation } from 'react-router-dom';

import useProgressText from '../../utils/hooks/useProgressText';
import useSetPercentage from '../../utils/hooks/useSetPercentage';

export const ProgressBar: React.FC = () => {
  const progressText = useProgressText();
  const percentage = useSetPercentage();
  const location = useLocation();
  const [isStorySubmission, setIsStorySubmission] = React.useState(false);
  React.useEffect(() => {
    const storySubmissionRoutes = [
      '/genre-selection',
      '/content-warning',
      '/prompt-selection',
      '/story-submission',
      '/confirmation',
    ];
    const currentPath = location.pathname;

    setIsStorySubmission(storySubmissionRoutes.includes(currentPath));
  }, [location.pathname]);

  return (
    <>
      {isStorySubmission ? (
        <div className='container d-flex flex-column align-items-start m-0 mb-5'>
          <p className='flex-fill text-left fs-4 fw-medium'>{progressText}</p>
          <div className='progress w-100' style={{ height: '10px' }}>
            <div
              className={`progress-bar pr-2 ${
                percentage === 100 ? 'bg-success' : 'bg-primary'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProgressBar;
