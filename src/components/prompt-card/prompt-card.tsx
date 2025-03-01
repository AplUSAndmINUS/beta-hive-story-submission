import React from 'react';

import { useAppSelector } from '../../stores/store';
interface PromptCardProps {
  handleSelection: (selection: string | string[]) => void;
  isStorySelection?: boolean;
  prompt: string;
  promptText?: string;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  handleSelection,
  isStorySelection,
  prompt,
  promptText,
}) => {
  const { characterSelection, settingSelection } = useAppSelector(
    (state) => state.storySubmission
  );

const voteSubmission = useAppSelector(
  (state) => state.voteSubmission.selectedPrompt
);
  return (
    <div
      className='col-6 d-flex flex-wrap justify-content-between'
      onClick={
        isStorySelection ? () => handleSelection('') : () => handleSelection(prompt)
      }
    >
      <div className='w-100 me-3'>
        <div
          className={`card p-2 mt-4 ${
            (characterSelection === prompt ||
              settingSelection === prompt ||
              voteSubmission === prompt) &&
            'card-selected'
          }`}
        >
          <div className='card-body'>
            <h5 className='card-title'>{prompt}</h5>
            <p className='card-text'>
              {promptText ||
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
              Nullam nec purus et nunc fermentum aliquam. Nam nec turpis nec
              eros tincidunt ultricies.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
