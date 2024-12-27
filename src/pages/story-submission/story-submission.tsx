import React from 'react';

import { useAppDispatch, useAppSelector } from '../../stores/store';
import { setStorySubmission } from '../../stores/reducers/story-submission';

export const StorySubmission: React.FC = () => {
  const dispatch = useAppDispatch();
  const { storySubmission } = useAppSelector((state) => state.storySubmission);

  const [text, setText] = React.useState(storySubmission);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    if (text.trim() === '') {
      return; // Don't save empty text
    }

    const handleSave = () => {
      setIsLoading(true);
      setIsSaved(false);
      dispatch(setStorySubmission(text));
      setTimeout(() => {
        setIsLoading(false);
        setIsSaved(true);
      }, 2000); // Simulate save delay
    };

    const timer = setTimeout(handleSave, 2500); // Auto-save after 5 seconds of inactivity

    return () => clearTimeout(timer); // Clear timeout if user types again
  }, [text, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setIsSaved(false); // Reset saved status on change
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2 mt-4'>Write your story</h1>
        <p className='text-muted pb-2 mt-2 fs-5'>
          Please write your story below. <br />
          Don't worry: Your story will autosave every few minutes.
        </p>
      </div>
      <div className='row m-auto'>
        <textarea
          autoFocus
          className='form-control ml-2'
          rows={10}
          placeholder='Enter your story here'
          value={text}
          onChange={handleChange}
        ></textarea>
        <div className='d-flex justify-content-between w-100'>
          <div className='d-flex justify-content-flex-end'>
            {isLoading ? (
              <>
                <div
                  className='spinner-border text-primary mt-4'
                  role='status'
                />
                <p className='mt-4 ms-2'>Saving...</p>
              </>
            ) : (
              <p className='mt-4 ms-2 ml-0'>{isSaved ? 'Draft saved!' : ''}</p>
            )}
          </div>
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

export default StorySubmission;
