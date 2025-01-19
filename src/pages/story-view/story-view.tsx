import React from 'react';

import HIVEStoryCard from '../../components/story-card/story-card';
import Selections from '../../components/selections/selections';

interface StoryViewProps {
  storySubmission?: string;
  onClose: () => void; // Add a prop for the close button handler
}

export const StoryView: React.FC<StoryViewProps> = ({
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

      {/* This will be in a modal view in the arena page or when a story is clicked itself */}
      <h1>Story View</h1>
      <div className='d-flex justify-content-between align-items-center'>
        <HIVEStoryCard isHover={false} onClick={() => {}} />
        <Selections isStoryView />
      </div>
      <p>
        {storySubmission ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ac libero ultricies aliquam. Nullam nec purus ac libero
            ultricies aliquam.`}
      </p>
    </div>
  );
};

export default StoryView;
