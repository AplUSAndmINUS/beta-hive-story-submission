import React from 'react';

import { useAppSelector } from '../../../stores/store';

interface InputCardProps {
  handleSelection: (selection: 'Yes' | 'No') => void;
  label: 'Yes' | 'No';
  name: string;
  inputType: 'checkbox' | 'input' | 'radio';
}

export const InputCard: React.FC<InputCardProps> = ({
  handleSelection,
  name,
  label,
  inputType,
}) => {
  const selectedValue = useAppSelector(
    (state) => state.storySubmission.contentWarning
  );
  
  const handleCardClick = () => {
    handleSelection(label);
  };

  return (
    <div
      className='col-6 d-flex flex-wrap justify-content-between cursor-pointer'
      onClick={handleCardClick}
    >
      <div className='w-100'>
        <div
          className={`card p-2 mt-4 ${
            selectedValue === label && 'card-selected'
          }`}
        >
          <div className='card-body'>
            <h5 className='card-title'>
              <label className='d-flex align-items-center cursor-pointer'>
                <input
                  className='cursor-pointer'
                  name={name}
                  type={inputType}
                  checked={selectedValue === label}
                  onChange={() => handleSelection(label)}
                  onClick={($e) => $e.stopPropagation()}
                  style={{
                    marginRight: '1rem',
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
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
