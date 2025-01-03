import React from 'react';

import { useAppSelector } from '../../stores/store';
interface PromptCardProps {
  handleSelection: (selection: string) => void;
  prompt: string;
  promptText?: string;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  handleSelection,
  prompt,
  promptText,
}) => {
  const { characterSelection, settingSelection } = useAppSelector(
    (state) => state.storySubmission
  );

  return (
    <div
      className='col-6 d-flex flex-wrap justify-content-between'
      onClick={() => handleSelection(prompt)}
    >
      <div className='w-100'>
        <div
          className={`card p-2 mt-4 ${
            characterSelection === prompt ||
            (settingSelection === prompt && 'card-selected')
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
