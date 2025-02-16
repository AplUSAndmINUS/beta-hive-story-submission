import React from 'react';

interface ButtonsRowProps {
  children?: React.ReactNode;
}

const ButtonsRow: React.FC<ButtonsRowProps> = ({ children }) => {
  return (
    <div className='d-flex flex-row justify-content-start mt-2 mb-2'>
      {children ? (
        children
      ) : (
        <>
          <button type='submit' className='btn btn-primary mt-3'>Save Changes</button>
          <button type='reset' className='btn btn-outline-danger mt-3 ms-3'>Clear Form</button>
        </>
      )}
    </div>
  );
};

export default ButtonsRow;
