import React from 'react';

import HIVEStoryCard from '../../components/story-card/story-card';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';
import Selections from '../../components/selections/selections';

interface StoryViewProps {
  feedbackText: string;
  isAnonymous: boolean;
  isPositive: boolean;
  isPublic: boolean;
  handleAnonymousChange: (value: boolean) => void;
  handlePositiveChange: (value: boolean) => void;
  handlePublicChange: (value: boolean) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
  isSaved: boolean;
  statusText: string;
  storyNumber: number;
  storySubmission: string;
  onClose: () => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  feedbackText,
  isAnonymous,
  isPositive,
  isPublic,
  handleAnonymousChange,
  handlePositiveChange,
  handlePublicChange,
  handleTextChange,
  isLoading,
  isSaved,
  statusText,
  storySubmission,
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

      <h3 className='card-title mt-2 mb-4'>Story Title Goes Here</h3>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <HIVEStoryCard isHover={false} onClick={() => {}} />
        <Selections isStoryView />
      </div>
      <p className='story-text drop-cap bg-light p-4 rounded border preserve-whitewrap'>
        {storySubmission ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies aliquam. Nullam nec purus ac libero ultricies aliquam.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies aliquam. Nullam nec purus ac libero ultricies aliquam.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies aliquam. Nullam nec purus ac libero ultricies aliquam.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies aliquam. Nullam nec purus ac libero ultricies aliquam.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies aliquam. Nullam nec purus ac libero ultricies aliquam.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies aliquam. Nullam nec purus ac libero ultricies aliquam.`}
      </p>
      <div className='mt-4'>
        <h4 className='card-title mb-4'>Submit your feedback</h4>
        <textarea
          autoFocus
          className='form-control ml-2'
          rows={4}
          placeholder='Submit your feedback on this story here'
          value={feedbackText}
          required
          onChange={handleTextChange}
        />
      </div>
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
          title='Positive feedback indicator'
          checked={isPositive}
          onChange={() => handlePositiveChange(!isPositive)}
        />
        <label className='form-check-label'>This feedback is positive</label>
      </div>
      <div className='form-check form-switch cursor-pointer-hover'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchAnonymousDefault'
          title='Submit feedback as anonymous'
          checked={isAnonymous}
          onChange={() => handleAnonymousChange(!isAnonymous)}
        />
        <label className='form-check-label'>Submit feedback anonymously</label>
      </div>
      <div className='form-check form-switch mb-4 cursor-pointer-hover'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchPublicDefault'
          title='Show my feedback publicly on this story'
          checked={isPublic}
          onChange={() => handlePublicChange(!isPublic)}
        />
        <label className='form-check-label'>
          Allow my feedback to show on the site
        </label>
      </div>
    </div>
  );
};

export default StoryView;
