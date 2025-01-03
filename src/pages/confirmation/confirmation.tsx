import React from 'react';

import { useAppSelector } from '../../stores/store';
import Selections from '../../components/selections/selections';

export const Confirmation: React.FC = () => {
  const { storySubmission } = useAppSelector((state) => state.storySubmission);

  const handleReset = () => {
    // Reset the story submission
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the story
  };

  // console.log('New story: ', storySubmission);
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col d-flex flex-column justify-content-start align-items-left'>
          <h1 className='bd-title pb-2 mt-4'>Confirmation</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Thank you! Your story has been submitted and is pending review.
          </p>
          <Selections isConfirmation />
        </div>
        <div className='row'>
          <h3 className='text-muted pb-2 mt-2 fs-5'>Story:</h3>
          <p>
            {storySubmission ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ac libero ultricies aliquam. Nullam nec purus ac libero
            ultricies aliquam.`}
          </p>
          <div className='d-flex justify-content-start'>
            <button className='btn btn-primary mt-4 mr-4'>
              Leave Feedback
            </button>
            &nbsp;&nbsp;
            <button className='btn btn-primary mt-4 mr-4'>Versus Mode</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
