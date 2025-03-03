import React from 'react';

interface ModalProps {
  alertMessage?: string;
  alertMessage2?: string;
  isConfirmation?: boolean;
  isFeedbackSubmit?: boolean;
  onConfirm?: () => void;
  onDismiss: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  alertMessage,
  alertMessage2,
  isConfirmation = false,
  isFeedbackSubmit = false,
  onConfirm,
  onDismiss,
  children,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onDismiss();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onDismiss]);

  React.useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.add('dimmed');
    }
    return () => {
      if (rootElement) {
        rootElement.classList.remove('dimmed');
      }
    };
  }, []);

  return (
    <>
      <div className='modal-backdrop fade show'></div>
      <div
        className='modal fade show'
        id='exampleModal'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
        style={{ display: 'block', bottom: 0, position: 'fixed' }}
      >
        <div className='modal-dialog modal-dialog-centered modal-dialog-widths' ref={modalRef}>
          <div className='modal-content'>
            {alertMessage && (
              <div className='modal-header'>
                <h4 className='modal-title' id='exampleModalLabel'>
                  <i className='fas fa-exclamation-triangle text-warning' />
                  &nbsp; Just to confirm
                </h4>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                  onClick={onDismiss}
                ></button>
              </div>
            )}
            <div className='modal-body'>
              {alertMessage ? (
                <p>
                  {alertMessage}
                  {alertMessage2 && (
                    <>
                      <br />
                      <br />
                      {alertMessage2}
                    </>
                  )}
                </p>
              ) : (
                children || null
              )}
            </div>
            <div className='modal-footer'>
              {isConfirmation && (
                <div className='d-flex justify-content-between'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={onConfirm}
                  >
                    Confirm
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    type='button'
                    className='btn btn-primary'
                    data-bs-dismiss='modal'
                    onClick={onDismiss}
                  >
                    Cancel
                  </button>
                </div>
              )}
              {isFeedbackSubmit && (
                <div className='d-flex justify-content-flex-start'>
                  <button
                    type='submit'
                    className='btn btn-primary mr-4'
                    // disabled={isSubmitDisabled}
                  >
                    Submit
                  </button>
                  &nbsp;&nbsp;
                  <button type='reset' className='btn btn-outline-danger'>
                    Clear Form
                  </button>
                </div>
              )}

              {((alertMessage && !isConfirmation) ||
                (!alertMessage && !isFeedbackSubmit)) && (
                <button
                  type='button'
                  className='btn btn-primary'
                  data-bs-dismiss='modal'
                  onClick={onDismiss}
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
