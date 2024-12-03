import React from 'react';

export const ProgressBar: React.FC = () => {
  const [percentage, setPercentage] = React.useState(30);

  const handleSetPercentage = (newPercentage: number) => {
    return newPercentage ? setPercentage(newPercentage) : setPercentage(60);
  };

  const handleTitle = (percentage: number) => {
    switch (percentage) {
      case 30:
        return 'Step 1 of 3: Genre Selection';
      case 60:
        return 'Step 2 of 3: Submit Your Story';
      case 100:
        return 'Step 3 of 3: Confirmation';
      default:
        return 'Step 1 of 3: Genre Selection';
    }
  };

  return (
    <div className='container d-flex flex-column align-items-start mt-4 p-4'>
      <p className='pr-3 flex-fill text-left fs-4'>{handleTitle(percentage)}</p>
      <div className='progress w-100' style={{ height: '10px' }}>
        <div
          className={`progress-bar pr-2 ${
            percentage === 100 ? 'bg-success' : 'bg-primary'
          }`}
          style={{ width: `${percentage}%` }}
        >
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
