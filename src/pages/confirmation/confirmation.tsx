import React from 'react';

export const Confirmation: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Confirmation</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Thank you! Your story has been submitted and is pending review.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
