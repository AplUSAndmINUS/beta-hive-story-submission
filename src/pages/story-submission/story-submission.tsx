import React from 'react';

export const StorySubmission: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2'>Write your story</h1>
        <p className='text-muted pb-2 mt-2'>
          Please write your story below. Don't worry: Your story will autosave
          every few minutes.
        </p>
      </div>
      <div className='row'>
        <textarea
          className='form-control'
          rows={4}
          placeholder='Enter your story here'
        ></textarea>
        <div className='d-flex justify-content-between w-100'>
          <div className='d-flex justify-content-flex-end'>
            <div className='spinner-border text-primary mt-4' role='status' />
            <p className='mt-4 ms-2'>Draft saving...</p>
          </div>
          <div className='d-flex justify-content-between'>
            <button type='submit' className='btn btn-primary mt-4 mr-4'>
              Submit
            </button>
            &nbsp;&nbsp;
            <button type='reset' className='btn btn-primary mt-4'>
              Clear Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySubmission;
