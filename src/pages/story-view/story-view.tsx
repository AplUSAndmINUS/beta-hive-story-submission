import React from 'react';

import Selections from '../../components/selections/selections';

interface StoryViewProps {
  storySubmission?: string;
}

export const StoryView: React.FC<StoryViewProps> = ({ storySubmission }) => {
  return (
    <div>
      <h1>Story View</h1>
      <Selections isStoryView />
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