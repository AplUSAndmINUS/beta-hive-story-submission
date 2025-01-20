import React from 'react';

import InputSelectionCard from '../../components/form-elements/input/input-selection';
import Selections from '../../components/selections/selections';
import { useAppDispatch, useAppSelector } from '../../stores/store';
import useNavigation from '../../utils/hooks/useNavigation';
import {
  setContentSensitivities,
  setContentWarning,
} from '../../stores/reducers/story-submission';
import { CONTENT_WARNINGS } from '../../services/constants/constants';

export const ContentWarnings: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation();
  const [ isNextDisabled, setIsNextDisabled ] = React.useState(true);
  const { contentWarning, contentSensitivities } = useAppSelector(
    (state) => state.storySubmission
  );

  const handleContentWarningRadio = (label: string) => {
    switch (label) {
      case 'Yes':
        dispatch(setContentWarning('Yes'));
        break;
      case 'No':
        dispatch(setContentWarning('No'));
        dispatch(setContentSensitivities([]));
        setIsNextDisabled(false);
        break;
      default:
        break;
    }
  };

  const handleContentSensitivities = (content: string, isChecked?: boolean) => {
    if (isChecked) {
      setContentSensitivities([...contentSensitivities, content]);
      setIsNextDisabled(false);
    } else {
      setContentSensitivities(
        contentSensitivities.filter((item) => item !== content)
      );
      if (contentSensitivities.length === 0) {
        setIsNextDisabled(true);
      }
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Content warnings</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Specify if your story will include any content sensitivities or
            objectionable material.
            <br />
            These are used to allow readers to filter stories based on their
            preferences.
          </p>
        </div>
        <Selections />
      </div>
      <div className='row'>
        <h3 className='pb-2 mt-5'>
          Will your story have any content warnings?
        </h3>
        <InputSelectionCard
          name='isContentSensitive'
          isDisabled={false}
          inputType='radio'
          label='Yes'
          handleSelection={handleContentWarningRadio}
        />
        <InputSelectionCard
          name='isContentSensitive'
          isDisabled={false}
          inputType='radio'
          label='No'
          handleSelection={handleContentWarningRadio}
        />
      </div>
      <div className='row'>
        <h3 className='pb-2 mt-5'>Content Sensitivities</h3>
        {CONTENT_WARNINGS.map((content, index) => (
          <InputSelectionCard
            key={content.name + index}
            name={content.name}
            inputType='checkbox'
            isDisabled={contentWarning !== 'Yes'}
            label={content.name}
            handleSelection={handleContentSensitivities}
          />
        ))}
      </div>
      <div className='d-flex justify-content-flex-start'>
        <button
          className='btn btn-outline-primary mt-4 mr-4'
          onClick={() => navigate('/genre-selection')}
        >
          Back
        </button>
        &nbsp;&nbsp;
        <button
          className='btn btn-primary mt-4'
          disabled={isNextDisabled}
          onClick={() => navigate('/prompt-submission')}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContentWarnings;
