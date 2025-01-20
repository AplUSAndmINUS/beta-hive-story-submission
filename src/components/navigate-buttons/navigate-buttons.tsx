import React from 'react';

import useNavigation from '../../utils/hooks/useNavigation';

interface NavigateButtonsProps {
  backNavigation: string;
  isNextDisabled: boolean;
  nextNavigation: string;
}

export const NavigateButtons: React.FC<NavigateButtonsProps> = ({
  backNavigation,
  isNextDisabled,
  nextNavigation,
}) => {
  const navigate = useNavigation();

  return (
    <div className='d-flex justify-content-flex-start'>
      <button
        className='btn btn-outline-primary mt-4 mr-4'
        onClick={() => navigate(backNavigation)}
      >
        Back
      </button>
      &nbsp;&nbsp;
      <button
        className='btn btn-primary mt-4'
        disabled={isNextDisabled}
        onClick={() => navigate(nextNavigation)}
      >
        Next
      </button>
    </div>
  );
};

export default NavigateButtons;
