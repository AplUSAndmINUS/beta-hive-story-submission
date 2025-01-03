import React from 'react';

import Selections from '../../components/selections/selections';

export const Confirmation: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Confirmation</h1>
          <Selections />
          <p className='text-muted pb-2 mt-2 fs-5'>
            Thank you! Your story has been submitted and is pending review.
          </p>
          <h3 className='text-muted pb-2 mt-2 fs-5'>Story:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ac libero ultricies aliquam. Nullam nec purus ac libero
            ultricies aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
