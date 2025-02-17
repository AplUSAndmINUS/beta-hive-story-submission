import React from 'react';

interface InputTypeProps {
  isDisabled: boolean;
  isImageUpload?: boolean;
  name: string;
  value?: any;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  min?: string;
  max?: string;
  pattern?: string;
  type?: string;
}

export const InputType: React.FC<InputTypeProps> = ({
  isDisabled = false,
  isImageUpload = false,
  name,
  value,
  isRequired = false,
  label,
  onChange,
  min,
  max,
  pattern,
  type,
}) => {
  return (
    <div
      className={`col-6 d-flex flex-wrap ${
        type === 'number' ? 'justify-content-start' : 'justify-content-between'
      }`}
    >
      <div className={type === 'number' ? 'w-75' : 'w-100'}>
        <div className='card mt-4 me-3'>
          <div className='card-body'>
            <h5 className='card-title'>
              <label className='d-flex flex-column align-items-start'>
                <span>
                  {label}
                  {isRequired && <span className='text-danger'> *</span>}
                </span>
                <input
                  className='form-control mt-3'
                  disabled={isDisabled}
                  value={value || ''}
                  onChange={onChange}
                  type={type}
                  min={min}
                  max={max}
                  pattern={pattern}
                  required={isRequired}
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
                <button className='btn btn-primary' type='button'>
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
