import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../stores/store';

interface SelectionsProps {
  isConfirmation?: boolean;
}

export const Selections: React.FC<SelectionsProps> = ({ isConfirmation = false }) => {
  const { genreSelection, characterSelection, settingSelection } =
    useAppSelector((state) => state.storySubmission);

  return (
    <div className={`container ${!isConfirmation ? 'w-50 ml-auto text-end' : 'p-0 mx-0 mb-3'}`}>
      <div className='row d-flex justify-content-between align-items-center'>
        <Link
          to='/genre-selection'
          className='text-decoration-none custom-link'
        >
          <div className='pt-3 pb-0'>
            <p className='text-right'>
              <strong>Beta HIVE: </strong>
              {genreSelection || 'None selected'}{' '}
              <i className='fas fa-pencil-alt' />
            </p>
          </div>
        </Link>
      </div>
      <Link to='/prompt-selection' className='text-decoration-none custom-link'>
        <div className='pt-0 pb-0'>
          <p>
            <strong>Character: </strong> {characterSelection || 'None selected'}{' '}
            <i className='fas fa-pencil-alt' />
          </p>
        </div>
      </Link>
      <Link to='/prompt-selection' className='text-decoration-none custom-link'>
        <div className='pt-0 pb-0'>
          <p>
            <strong>Setting: </strong> {settingSelection || 'None selected'}{' '}
            <i className='fas fa-pencil-alt' />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Selections;
