import React from 'react';

interface SaveSpinnerProps {
  innerText?: string;
  isLoading: boolean;
  isSaved: boolean;
  savedText?: string;
}

export const SaveSpinner: React.FC<SaveSpinnerProps> = ({
  innerText,
  isLoading,
  isSaved,
  savedText,
}) => {
  return (
    <div className='d-flex justify-content-flex-end'>
      {isLoading ? (
        <>
          <div
            className='spinner-border text-primary mt-4 mb-2 me-2'
            role='status'
          />
          <p className='mt-4 me-3'>{innerText || 'Saving...'}</p>
        </>
      ) : (
        <p className='mt-4 me-3'>
          {isSaved ? (savedText ? savedText : 'Draft saved!') : ''}
        </p>
      )}
    </div>
  );
};

export default SaveSpinner;
