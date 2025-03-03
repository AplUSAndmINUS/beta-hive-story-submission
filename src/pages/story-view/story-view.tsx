import React from 'react';

import HIVEStoryCard from '../../components/story-card/story-card';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';
import Selections from '../../components/selections/selections';

interface StoryViewProps {
  handleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    string: string
  ) => void;
  feedbackText: string;
  handleReset: () => void;
  handleSubmit: ($e: React.FormEvent) => void;
  isLoading: boolean;
  isSaved: boolean;
  isSubmitDisabled: boolean;
  statusText: string;
  storySubmission?: string;
  onClose: () => void; // Add a prop for the close button handler
}

export const StoryView: React.FC<StoryViewProps> = ({
  feedbackText,
  handleChange,
  handleReset,
  handleSubmit,
  isLoading,
  isSaved,
  isSubmitDisabled,
  storySubmission,
  statusText,
  onClose,
}) => {
  return (
    <div className='container position-relative p-4'>
      <button
        type='button'
        className='btn-close position-absolute top-0 end-0 p-3 fs-4 mt-4 me-4'
        aria-label='Close'
        onClick={onClose}
      ></button>

      {/* This will be in a modal view in the BattleHIVE page or when a story is clicked itself */}
      <h3 className='card-title'>Story View</h3>
      <div className='d-flex justify-content-between align-items-center'>
        <HIVEStoryCard isHover={false} onClick={() => {}} />
        <Selections isStoryView />
      </div>
      <p className='pb-3'>
        {storySubmission ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ac libero ultricies aliquam. Nullam nec purus ac libero
            ultricies aliquam.`}
      </p>
      <textarea
        autoFocus
        className='form-control ml-2'
        rows={4}
        placeholder='Submit your feedback on this story here'
        value={feedbackText}
        required
        onChange={($e) => handleChange($e, feedbackText)}
      />
      <SaveSpinner
        isLoading={isLoading}
        isSaved={isSaved}
        innerText={statusText}
      />
      <div className='d-flex justify-content-flex-start'>
        <button
          type='submit'
          className='btn btn-primary mt-4 mr-4'
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
        &nbsp;&nbsp;
        <button type='reset' className='btn btn-outline-danger mt-4'>
          Clear Form
        </button>
      </div>
    </div>
  );
};

export default StoryView;
