import React from 'react';

export const StorySubmission: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2'>Write your story</h1>
      </div>
      <div className='row'>
        <textarea className='form-control' placeholder=''></textarea>
      </div>
    </div>
  );
};

export default StorySubmission;