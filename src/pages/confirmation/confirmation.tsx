import React from 'react';

import { useAppSelector } from '../../stores/store';
import Selections from '../../components/selections/selections';

export const Confirmation: React.FC = () => {
  const { storySubmission } = useAppSelector((state) => state.storySubmission);

  React.useEffect(() => {
    if (!storySubmission || storySubmission.trim() === '') {
      return; 
    }
  }, [storySubmission]);

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
            {storySubmission ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ac libero ultricies aliquam. Nullam nec purus ac libero
            ultricies aliquam.`}
          </p>
          <div className='d-flex justify-content-between'>
            <button type='submit' className='btn btn-primary mt-4 mr-4'>
              Submit
            </button>
            &nbsp;&nbsp;
            <button type='reset' className='btn btn-outline-danger mt-4'>
              Clear Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
