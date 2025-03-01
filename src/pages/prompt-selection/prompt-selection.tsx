import React from 'react';

import NavigateButtons from '../../components/navigate-buttons/navigate-buttons';
import PromptCard from '../../components/prompt-card/prompt-card';
import Selections from '../../components/selections/selections';
import { useAppDispatch, useAppSelector } from '../../stores/store';
import {
  setCharacterSelection,
  setSettingSelection,
} from '../../stores/reducers/story-submission';
import { CHARACTER_SELECTIONS } from '../../services/constants/constants';
import { SETTING_SELECTIONS } from '../../services/constants/constants';

export const PromptSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { characterSelection, settingSelection } = useAppSelector(
    (state) => state.storySubmission
  );

  const handleCharacterSelection = (character: string) => {
    dispatch(setCharacterSelection(character));
  };

  const handleSettingSelection = (setting: string) => {
    dispatch(setSettingSelection(setting));
  };

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Choose two prompts</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Select two prompts from the following prompts.
            <br />
            You'll use these to create your story.
          </p>
        </div>
        <Selections />
      </div>
      <div className='row'>
        <h3 className='pb-2 mt-3'>Prompts</h3>
        {CHARACTER_SELECTIONS.map((character, index) => (
          <PromptCard
            key={character.name + index}
            prompt={character.name}
            promptText={character.description}
            handleSelection={handleCharacterSelection}
          />
        ))}
        {SETTING_SELECTIONS.map((setting, index) => (
          <PromptCard
            key={setting.name + index}
            prompt={setting.name}
            promptText={setting.description}
            handleSelection={handleSettingSelection}
          />
        ))}
      </div>
      <div className='row'>
        <NavigateButtons
          isNextDisabled={!characterSelection || !settingSelection}
          backNavigation='Beta HIVE Selection'
          nextNavigation='Story Submission'
        />
      </div>
    </div>
  );
};

export default PromptSelection;
