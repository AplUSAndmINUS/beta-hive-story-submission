import React from 'react';

import InputCard from '../../components/form-elements/input/input-selection';
import Selections from '../../components/selections/selections';
import { useAppDispatch, useAppSelector } from '../../stores/store';
import useNavigation from '../../utils/hooks/useNavigation';
import {
  setContentSensitivities,
  setContentWarning,
} from '../../stores/reducers/story-submission';

export const ContentWarnings: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation();
  const [ isNextDisabled, setIsNextDisabled ] = React.useState(true);
  const { contentWarning, contentSensitivities } = useAppSelector(
    (state) => state.storySubmission
  );

  const handleContentWarningRadio = (label: 'Yes' | 'No') => {
    switch (label) {
      case 'Yes':
        dispatch(setContentWarning('Yes'));
        break;
      case 'No':
        dispatch(setContentWarning('No'));
        dispatch(setContentSensitivities([]));
        setIsNextDisabled(false);
        break;
    }
  };

  const handleContentSensitivities = (content: string, isChecked: boolean) => {
    if (isChecked) {
      setContentSensitivities([...contentSensitivities, content]);
    } else {
      setContentSensitivities(
        contentSensitivities.filter((item) => item !== content)
      );
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Content warnings</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Select if your story will include any content sensitivities or
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
        <InputCard
          name='isContentSensitive'
          isDisabled={false}
          inputType='radio'
          label='Yes'
          handleSelection={handleContentWarningRadio}
        />
        <InputCard
          name='isContentSensitive'
          isDisabled={false}
          inputType='radio'
          label='No'
          handleSelection={handleContentWarningRadio}
        />
      </div>
      <div className='row'>
        <h3 className='pb-2 mt-5'>Character</h3>
        {/* {CHARACTER_SELECTIONS.map((character, index) => (
          <PromptCard
            key={character.name + index}
            prompt={character.name}
            promptText={character.description}
            handleSelection={handleCharacterSelection}
          />
        ))} */}
      </div>
      <div className={`row mt-5 ${contentWarning === 'No' && 'opacity-25'}`}>
        <h3 className='pb-2 mt-2 mb-1'>Setting</h3>
        {/* {SETTING_SELECTIONS.map((setting, index) => (
          <PromptCard
            key={setting.name + index}
            prompt={setting.name}
            promptText={setting.description}
            handleSelection={handleSettingSelection}
          />
        ))} */}
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
