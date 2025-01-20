import React from 'react';

import InputCard from '../../components/form-elements/input/input';
import PromptCard from '../../components/prompt-card/prompt-card';
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
  const [contentSensitivitiesArray, setContentSensitivitiesArray] =
    React.useState<string[]>([]);
  const characterSelection = useAppSelector(
    (state) => state.storySubmission.characterSelection
  );

  const handleContentWarningRadio = (label: 'Yes' | 'No') => {
    dispatch(setContentWarning(label));
  };

  const handleContentSensitivities = (content: string, isChecked: boolean) => {
    if (isChecked) {
      setContentSensitivitiesArray([...contentSensitivitiesArray, content]);
    } else {
      setContentSensitivitiesArray(
        contentSensitivitiesArray.filter((item) => item !== content)
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
          inputType='radio'
          label='Yes'
          handleSelection={handleContentWarningRadio}
        />
        <InputCard
          name='isContentSensitive'
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
      <div className={`row mt-5 ${!characterSelection && 'opacity-25'}`}>
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
    </div>
  );
};

export default ContentWarnings;
