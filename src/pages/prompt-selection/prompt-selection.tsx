import React from 'react';

import PromptCard from '../../components/prompt-card/prompt-card';
import Selections from '../../components/selections/selections';
import { CHARACTER_SELECTIONS } from '../../services/constants/constants';
import { SETTING_SELECTIONS } from '../../services/constants/constants';

export const PromptSelection: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <h1 className='bd-title pb-2 mb-4 mt-4 w-50'>Choose two prompts</h1>
        <Selections />
      </div>
      <div className='row'>
        <h3 className='pb-2 mt-2 mb-1'>Setting</h3>
        {SETTING_SELECTIONS.map((setting, index) => (
          <PromptCard
            key={setting.name + index}
            prompt={setting.name}
            promptText={setting.description}
          />
        ))}
      </div>
      <div className='row'>
        <h3 className='pb-2 mt-5'>Character</h3>
        {CHARACTER_SELECTIONS.map((character, index) => (
          <PromptCard
            key={character.name + index}
            prompt={character.name}
            promptText={character.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PromptSelection;
