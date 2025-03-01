import React from 'react';

import StoryView from '../../pages/story-view/story-view';

interface ModalProps {
  alertMessage: string;
  feedbackText: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
  handleSubmit?: ($e: React.FormEvent) => void;
  isConfirmation?: boolean;
  isLoading?: boolean;
  isSaved?: boolean;
  isStoryView?: boolean;
  isSubmitDisabled?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  onDismiss: () => void;
  statusText: string;
}

export const Modal: React.FC<ModalProps> = ({
  alertMessage,
  feedbackText = '',
  handleChange,
  handleReset,
  handleSubmit,
  isConfirmation = false,
  isLoading = false,
  isSaved = false,
  isStoryView = false,
  isSubmitDisabled = false,
  onClose,
  onConfirm,
  onDismiss,
  statusText = ''
}) => {
  return (
    <div
      className={`modal ${isMobile && 'modal-fullscreen'} fade show`}
      style={{ display: 'block' }}
      onClick={() => setShowModal(false)}
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-body'>
            {
              isStoryView && (
                <StoryView
                  onClose={onClose}
                  handleChange={handleChange}
                  handleReset={handleReset}
                  handleSubmit={handleSubmit}
                  isLoading={isLoading}
                  isSaved={isSaved}
                  isSubmitDisabled={isSubmitDisabled}
                  statusText={statusText}
                  feedbackText={feedbackText}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
    //             <div className='modal-backdrop fade show'></div>
    //   <div
    //     className='modal fade'
    //     id='exampleModal'
    //     tabIndex={-1}
    //     aria-labelledby='exampleModalLabel'
    //     aria-hidden='true'
    //     style={{ display: 'block', bottom: 0, position: 'fixed' }}
    //   >
    //     <div className='modal-dialog modal-dialog-slide-up'>
    //       <div className='modal-content'>
    //         <div className='modal-header'>
    //           <h5 className='modal-title' id='exampleModalLabel'>
    //             Alert
    //           </h5>
    //           <button
    //             type='button'
    //             className='btn-close'
    //             data-bs-dismiss='modal'
    //             aria-label='Close'
    //             onClick={onDismiss}
    //           ></button>
    //         </div>
    //         <div className='modal-body'>
    //           <p>{alertMessage}</p>
    //         </div>
    //         <div className='modal-footer'>
    //           {isConfirmation ? (
    //             <div className='d-flex justify-content-between'>
    //               <button
    //                 type='button'
    //                 className='btn btn-danger'
    //                 onClick={onConfirm}
    //               >
    //                 Confirm
    //               </button>
    //               <button
    //                 type='button'
    //                 className='btn btn-primary'
    //                 data-bs-dismiss='modal'
    //                 onClick={onDismiss}
    //               >
    //                 Cancel
    //               </button>
    //             </div>
    //           ) : (
    //             <button
    //               type='button'
    //               className='btn btn-primary'
    //               data-bs-dismiss='modal'
    //               onClick={onDismiss}
    //             >
    //               Close
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  );
};

export default Modal;
