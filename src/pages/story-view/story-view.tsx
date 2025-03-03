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
  const [isPositiveChecked, setIsPositiveChecked] = React.useState(true);
  const [isAnonymousChecked, setIsAnonymousChecked] = React.useState(false);
  const [isPublicChecked, setIsPublicChecked] = React.useState(true);

  return (
    <div className='container position-relative p-4'>
      <button
        type='button'
        className='btn-close position-absolute top-0 end-0 p-3 fs-4 mt-4 me-4'
        aria-label='Close'
        onClick={onClose}
      ></button>

      <h3 className='card-title mt-2 mb-4'>Story Title Goes Here</h3>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <HIVEStoryCard isHover={false} onClick={() => {}} />
        <Selections isStoryView />
      </div>
      <h4 className='card-title mt-1 mb-2'>Story</h4>
      <p className='pb-3'>
        {storySubmission ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ac libero ultricies aliquam. Nullam nec purus ac libero
            ultricies aliquam.`}
      </p>
      <h4 className='card-title mt-1 mb-4'>Submit your feedback</h4>
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
      <div className='form-check form-switch cursor-pointer-hover'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchPositiveDefault'
          title='Disabled switch checkbox input'
          checked={isPositiveChecked}
          onChange={() => setIsPositiveChecked(!isPositiveChecked)}
        />
        <label className='form-check-label'>
          This feedback is {isPositiveChecked ? 'positive' : 'negative'}
        </label>
      </div>
      <div className='form-check form-switch cursor-pointer-hover'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchAnonymousDefault'
          title='Submit feedback as anonymous'
          checked={isAnonymousChecked}
          onChange={() => setIsAnonymousChecked(!isAnonymousChecked)}
        />
        <label className='form-check-label'>
          Submit feedback{' '}
          {isAnonymousChecked ? 'as anonymous' : 'with my name showing'}
        </label>
      </div>
      <div className='form-check form-switch mb-4 cursor-pointer-hover'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchPublicDefault'
          title='Show my feedback publicly on this story'
          checked={isPublicChecked}
          onChange={() => setIsPublicChecked(!isPublicChecked)}
        />
        <label className='form-check-label'>
          {isPublicChecked ? 'Show' : 'Do not show'} my feedback publicly on
          this story
        </label>
      </div>
    </div>
  );
};

export default StoryView;
