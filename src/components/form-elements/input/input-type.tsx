import React from 'react';

interface InputTypeProps {
  isDisabled: boolean;
  name: string;
  label: string;
}

export const InputType: React.FC<InputTypeProps> = ({
  isDisabled = false,
  name,
  label,
}) => {
  return (
    <div className='col-6 d-flex flex-wrap justify-content-between'>
      <div className='w-100'>
        <div className='card mt-4'>
          <div className='card-body'>
            <h5 className='card-title'>
              <label className='d-flex flex-column align-items-start'>
                {label}
                <input
                  className='form-control mt-3'
                  disabled={isDisabled}
                  name={name}
                  style={{
                    marginRight: '1rem',
                    height: '2rem',
                  }}
                />
              </label>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputType;
