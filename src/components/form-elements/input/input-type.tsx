import React from 'react';

interface InputTypeProps {
  isDisabled: boolean;
  isImageUpload?: boolean;
  name: string;
  label: string;
}

export const InputType: React.FC<InputTypeProps> = ({
  isDisabled = false,
  isImageUpload = false,
  name,
  label,
}) => {
  return (
    <div className='col-6 d-flex flex-wrap justify-content-center'>
      <div className='w-100'>
        <div className='card mt-4 me-3'>
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
            {isImageUpload && (
              <div className='input-group mb-3'>
                <button
                  className='btn btn-primary'
                  type='button'
                >
                  Upload
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputType;
