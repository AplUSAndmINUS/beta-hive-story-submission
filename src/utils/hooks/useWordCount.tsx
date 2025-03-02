import React from 'react';
import { useAppSelector } from '../../stores/store';

export const useWordCount = (story: string) => {
  const [userWordCount, setWordCount] = React.useState(0);
  const { minWordCount, maxWordCount } = useAppSelector(
    (state) => state.adminSubmission
  );

  React.useEffect(() => {
    if (story) {
      setWordCount(story.split(' ').length - 1);
    }
  }, [story]);

  const isLowerThanMin = userWordCount < minWordCount;
  const isExceeding = userWordCount > maxWordCount;

  return (
    <>
      <span>Story word count: </span>
      <span className={isExceeding || isLowerThanMin ? 'text-warning' : ''}>
        {userWordCount}
      </span>
      {' / '}
      {maxWordCount || 1000}
      <br />
      <span className={isLowerThanMin ? 'text-warning' : ''}>
        Minimum word count: {minWordCount}
      </span>
    </>
  );
};

export default useWordCount;
