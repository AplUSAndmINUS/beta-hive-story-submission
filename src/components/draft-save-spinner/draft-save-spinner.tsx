import React from 'react';

interface SaveSpinnerProps {
  innerText?: string;
  isLoading: boolean;
  isSaved: boolean;
}

export const SaveSpinner: React.FC<SaveSpinnerProps> = ({
  innerText,
  isLoading,
  isSaved,
}) => {
  return (
    <div className='d-flex justify-content-flex-end'>
      {isLoading ? (
        <>
          <div className='spinner-border text-primary mt-4' role='status' />
          <p className='mt-4 ms-2'>{innerText || 'Saving...'}</p>
        </>
      ) : (
        <p className='mt-4 ms-2 ml-0'>{isSaved ? 'Draft saved!' : ''}</p>
      )}
    </div>
  );
};

export default SaveSpinner;
