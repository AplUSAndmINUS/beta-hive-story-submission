import React from 'react';
import PromptCard from '../../components/prompt-card/prompt-card';

export const PromptSelection: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2 mb-4'>Choose two prompts</h1>
      </div>
      <div className='row'>
        <h3 className='pb-2 mt-2'>Setting</h3>
        <PromptCard prompt="Prompt 1" />
        <PromptCard prompt="Prompt 2" />
        <PromptCard prompt="Prompt 3" />
        <PromptCard prompt="Prompt 4" />
      </div>
      <div className='row'>
        <h3 className='pb-2 mt-5'>Character</h3>
        <PromptCard prompt="Character 1" />
        <PromptCard prompt="Character 2" />
        <PromptCard prompt="Character 3" />
        <PromptCard prompt="Character 4" />
        <PromptCard prompt="Character 5" />
        <PromptCard prompt="Character 6" />
      </div>
    </div>
  );
};

export default PromptSelection;
