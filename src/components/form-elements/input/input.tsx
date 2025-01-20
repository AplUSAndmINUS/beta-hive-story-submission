import React from 'react';

import { useAppSelector } from '../../../stores/store';

interface InputCardProps {
  handleSelection: (selection: string) => void;
  label: string;
  name: string;
  inputType: 'checkbox' | 'input' | 'radio';
}

export const InputCard: React.FC<InputCardProps> = ({
  handleSelection,
  name,
  label,
  inputType,
}) => {
  const isSelected = useAppSelector((state) => state.storySubmission.isContentWarning);
  
  return (
    <div className='col-6 d-flex flex-wrap justify-content-between'>
      <div className='w-100'>
        <div className={`card p-2 mt-4 ${isSelected && 'card-selected'}`}>
          <div className='card-body'>
            <h5 className='card-title'>
              <label>
                <input
                  name={name}
                  type={inputType}
                  checked={isSelected}
                  onChange={() => handleSelection(label)}
                />
                {label}
              </label>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCard;
