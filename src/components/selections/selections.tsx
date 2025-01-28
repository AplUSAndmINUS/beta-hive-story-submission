import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../stores/store';

interface SelectionsProps {
  isStoryView?: boolean;
}

export const Selections: React.FC<SelectionsProps> = ({
  isStoryView = false,
}) => {
  const {
    genreSelection,
    characterSelection,
    settingSelection,
    contentSensitivities,
  } = useAppSelector((state) => state.storySubmission);

  return isStoryView ? (
    <div className='container ml-auto text-start w-100'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='pt-3 pb-0'>
          <p className='text-right'>
            <strong>Beta HIVE: </strong>
            {genreSelection || 'None selected'}{' '}
            {!isStoryView && <i className='fas fa-pencil-alt' />}
          </p>
        </div>
      </div>
      <div className='pt-0 pb-0'>
        <p>
          <strong>Character: </strong> {characterSelection || 'None selected'}{' '}
        </p>
      </div>
      <div className='pt-0 pb-0'>
        <p>
          <strong>Setting: </strong> {settingSelection || 'None selected'}{' '}
        </p>
      </div>
    </div>
  ) : (
    <div className='container'>
      <div className='row d-flex justify-content-flex-start align-items-center w-50 p-0 mx-0 mb-3 text-start'>
        <Link
          to='/genre-selection'
          className='text-decoration-none custom-link'
          style={{ paddingLeft: 0 }}
        >
          <div className='pt-3 pb-0'>
            <p className='text-right'>
              <strong>Beta HIVE: </strong>
              {genreSelection || 'None selected'}{' '}
              <i className='fas fa-pencil-alt' />
            </p>
          </div>
        </Link>

        <Link
          to='/prompt-selection'
          className='text-decoration-none custom-link'
          style={{ paddingLeft: 0 }}
        >
          <div className='pt-0 pb-0'>
            <p>
              <strong>Character: </strong>{' '}
              {characterSelection || 'None selected'}{' '}
              <i className='fas fa-pencil-alt' />
            </p>
          </div>
        </Link>
        <Link
          to='/prompt-selection'
          className='text-decoration-none custom-link'
          style={{ paddingLeft: 0 }}
        >
          <div className='pt-0 pb-0'>
            <p>
              <strong>Setting: </strong> {settingSelection || 'None selected'}{' '}
              <i className='fas fa-pencil-alt' />
            </p>
          </div>
        </Link>
        <Link
          to='/content-warnings'
          className='text-decoration-none custom-link'
          style={{ paddingLeft: 0 }}
        >
          <div className='pt-0 pb-0'>
            <p>
              <strong>Content Warnings: </strong>{' '}
              {contentSensitivities.join(', ') || 'None selected'}{' '}
              <i className='fas fa-pencil-alt' />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Selections;
