import React from 'react';
import { useAppSelector } from '../../stores/store';

export const useWordCount = (story: string) => {
  const [userWordCount, setWordCount] = React.useState(0);
  const { wordCount } = useAppSelector((state) => state.adminSubmission);

  React.useEffect(() => {
    if (story) {
      setWordCount(story.split(' ').length - 1);
    }
  }, [story]);

  const isExceeding = userWordCount > wordCount;

  return (
    <span>
      <span className={isExceeding ? 'text-danger' : ''}>{userWordCount}</span>
      {' / '}
      {wordCount}
    </span>
  );
};

export default useWordCount;