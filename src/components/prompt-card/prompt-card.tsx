import React from 'react';

interface PromptCardProps {
  prompt?: string;
  promptText?: string;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, promptText }) => {
  return (
    <div className='col-6 d-flex flex-wrap justify-content-between'>
      <div className='w-100'>
        <div className='card p-2 mt-4'>
          <div className='card-body'>
            <h5 className='card-title'>{prompt || "Prompt 1"}</h5>
            <p className='card-text'>
              {promptText || `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
              Nullam nec purus et nunc fermentum aliquam. Nam nec turpis nec
              eros tincidunt ultricies.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PromptCard;