import React from 'react';

interface InputTypeProps {
  isDisabled: boolean;
  isImageUpload?: boolean;
  isContentWarning?: boolean;
  isPrompts?: boolean;
  name: string;
  flex?: string;
  value?: any;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  min?: string;
  max?: string;
  pattern?: string;
  placeholder?: string;
  type?: string;
}

export const InputType: React.FC<InputTypeProps> = ({
  isDisabled = false,
  isImageUpload = false,
  isContentWarning = false,
  isPrompts = false,
  name,
  flex,
  value,
  isRequired = false,
  label,
  onChange,
  min,
  max,
  pattern,
  placeholder,
  type,
}) => {
  return (
    <div
      className={`col-6 d-flex flex-wrap ${flex === 'start' && 'ps-0'} ${
        type === 'number' ? 'justify-content-start' : 'justify-content-between'
      }`}
    >
      <div className={type === 'number' ? 'w-75' : 'w-100'}>
        <div className='card mt-4 me-3'>
          <div className='card-body'>
            <h5 className='card-title'>
              <label
                htmlFor={name}
                className='d-flex flex-column align-items-start'
              >
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
                  placeholder={placeholder}
                  required={isRequired}
                  name={name}
                  id={name}
                  style={{
                    marginRight: '1rem',
                    height: '2rem',
                  }}
                />
              </label>
            </h5>
            {(isPrompts || isContentWarning) && (
              <label
                htmlFor={`${name}2`}
                className='d-flex flex-column align-items-start'
              >
                <span>
                  Description
                  {isRequired && <span className='text-danger'> *</span>}
                </span>
                <input
                  className='form-control mt-3'
                  disabled={isDisabled}
                  value={value || ''}
                  onChange={onChange}
                  required={isRequired}
                  name={`${name}2`}
                  id={`${name}2`}
                  style={{
                    marginRight: '1rem',
                  }}
                />
              </label>
            )}
            {isImageUpload && (
              <div className='d-flex justify-content-start align-items-center input-group mb-3'>
                <button className='btn btn-primary' type='button'>
                  Upload Image
                </button>
                <p className='text-muted ps-4 pt-2'>
                  Image name: placeholder_image.jpeg
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputType;
