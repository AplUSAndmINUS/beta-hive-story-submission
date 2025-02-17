import React from 'react';

interface ModalProps {
  alertMessage: string;
  onDismiss: () => void;
}

export const Modal: React.FC<ModalProps> = ({ alertMessage, onDismiss }) => {
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex={-1}
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
      style={{ display: 'block', bottom: 0, position: 'fixed' }}
    >
      <div className='modal-dialog modal-dialog-slide-up'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Alert
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={onDismiss}
            ></button>
          </div>
          <div className='modal-body'>
            <p>{alertMessage}</p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-dismiss='modal'
              onClick={onDismiss}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
