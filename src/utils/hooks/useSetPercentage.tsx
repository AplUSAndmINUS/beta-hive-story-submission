import React from 'react';
import { useLocation as location } from 'react-router-dom';

export const useSetPercentage = () => {
  const [percentage, setPercentage] = React.useState(25);
  const path = location().pathname;

  const handleSetPercentage = (percentage: number) => {
    setPercentage(percentage);
  };

  React.useEffect(() => {
    switch (path) {
      case '/':
        handleSetPercentage(25);
        break;
      case '/genre-selection':
        handleSetPercentage(25);
        break;
      case '/prompt-selection':
        handleSetPercentage(50);
        break;
      case '/story-submission':
        handleSetPercentage(75);
        break;
      case '/confirmation':
        handleSetPercentage(100);
        break;
      default:
        handleSetPercentage(25);
        break;
    }
  }, [path]);

  return percentage;
};

export default useSetPercentage;
