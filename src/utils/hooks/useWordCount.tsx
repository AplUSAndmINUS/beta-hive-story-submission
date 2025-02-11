import React from 'react';

export const useWordCount = (story: string) => {
  const [wordCount, setWordCount] = React.useState(0);

  React.useEffect(() => {
    if (story) {
      setWordCount(story.split(' ').length - 1);
    }
  }, [story]);

  return wordCount;
};

export default useWordCount;