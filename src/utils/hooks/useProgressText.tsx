import React from 'react';

import useSetPercentage from '../../utils/hooks/useSetPercentage';

export const useProgressText = () => {
  const percentage = useSetPercentage();

  switch (percentage) {
    case 25:
      return 'Step 1 of 4: Genre Selection';
    case 50:
      return 'Step 2 of 4: Prompt Selection';
    case 75:
      return 'Step 3 of 4: Story Submission';
    case 100:
      return 'Step 4 of 4: Confirmation';
    default:
      return 'Step 1 of 4: Genre Selection';
  }
};

export default useProgressText;