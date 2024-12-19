import React from 'react';

export const ProgressBar: React.FC = () => {
  const [percentage, setPercentage] = React.useState(25);

  const handleSetPercentage = (newPercentage: number) => {
    return newPercentage ? setPercentage(newPercentage) : setPercentage(60);
  };

  const handleTitle = (percentage: number) => {
    switch (percentage) {
      case 25:
        return 'Step 1 of 4: Genre selection';
      case 50:
        return 'Step 2 of 4: Select your prompts';
      case 75:
        return 'Step 3 of 4: Submit your story';
      case 100:
        return 'Step 4 of 4: Confirmation';
      default:
        return 'Step 1 of 4: Genre selection';
    }
  };

  return (
    <div className='container d-flex flex-column align-items-start mb-5'>
      <p className='flex-fill text-left fs-4'>{handleTitle(percentage)}</p>
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
