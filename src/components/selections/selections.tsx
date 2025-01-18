import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../stores/store';

interface SelectionsProps {
  isConfirmation?: boolean;
  isStoryView?: boolean;
}

export const Selections: React.FC<SelectionsProps> = ({
  isConfirmation = false,
  isStoryView = false,
}) => {
  const { genreSelection, characterSelection, settingSelection } =
    useAppSelector((state) => state.storySubmission);

  return (
    <div
      className={`container ${
        isConfirmation ? 'p-0 mx-0 mb-3' : 'w-50 ml-auto'
      } ${isStoryView ? 'text-start w-100' : 'text-end'}`}
    >
      <div className='row d-flex justify-content-between align-items-center'>
        <Link
          to='/genre-selection'
          className='text-decoration-none custom-link'
        >
          <div className='pt-3 pb-0'>
            <p className='text-right'>
              <strong>Beta HIVE: </strong>
              {genreSelection || 'None selected'}{' '}
              {!isStoryView && <i className='fas fa-pencil-alt' />}
            </p>
          </div>
        </Link>
      </div>
      <Link to='/prompt-selection' className='text-decoration-none custom-link'>
        <div className='pt-0 pb-0'>
          <p>
            <strong>Character: </strong> {characterSelection || 'None selected'}{' '}
            {!isStoryView && <i className='fas fa-pencil-alt' />}
          </p>
        </div>
      </Link>
      <Link to='/prompt-selection' className='text-decoration-none custom-link'>
        <div className='pt-0 pb-0'>
          <p>
            <strong>Setting: </strong> {settingSelection || 'None selected'}{' '}
            {!isStoryView && <i className='fas fa-pencil-alt' />}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Selections;
