import React from 'react';

import Accordion from '../../components/accordion/accordion';
import InputType from '../../components/form-elements/input/input-type';
import ButtonsRow from '../../components/form-elements/buttons/buttons-row';

export const AdminPage: React.FC = () => {
  const [betaHiveOptions, setBetaHiveOptions] = React.useState<number>(4);
  const [contentWarnings, setContentWarnings] = React.useState<number>(4);
  const [prompts, setPrompts] = React.useState<number>(10);

  const handleOptions = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    let value = parseInt(e.target.value);
    if (value < 1) {
      value = 1;
    }

    switch (inputType) {
      case 'prompts':
        setPrompts(value);
        break;
      case 'betaHiveOptions':
        setBetaHiveOptions(value);
        break;
      case 'contentWarnings':
        setContentWarnings(value);
        break;
      default:
        break;
    }
  };

  const generateInputFields = (count: number, labelPrefix: string) => {
    return Array.from({ length: Math.ceil(count / 2) }).map((_, rowIndex) => (
      <div
        key={rowIndex}
        className='d-flex flex-row flex-wrap justify-content-between'
      >
        {Array.from({ length: 2 }).map((_, colIndex) => {
          const index = rowIndex * 2 + colIndex;
          if (index < count) {
            return (
              <InputType
                key={index}
                name={`${labelPrefix}${index + 1}`}
                isDisabled={false}
                label={`${labelPrefix} ${index + 1}`}
              />
            );
          }
          return null;
        })}
      </div>
    ));
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2 mt-4 mb-4'>Admin</h1>
      </div>
      {/* Specify the prompts, then add image upload options */}
      {/* Next need to do the beta hive options with image upload */}
      <div className='row'>
        <Accordion
          accordionTerms='Beta HIVE options'
          collapseNumber='collapseTwo'
        >
          <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
            <InputType
              name='input'
              value={betaHiveOptions}
              isDisabled={false}
              label='How many Beta HIVE options would you like?'
              isRequired
              onChange={(e) => handleOptions(e, 'betaHiveOptions')}
              type='number'
              pattern='[0-9]*'
              min='1'
              max='100'
            />
          </div>
          {generateInputFields(betaHiveOptions, 'Beta HIVE')}
          <ButtonsRow />
        </Accordion>
      </div>{' '}
      <div className='row'>
        <Accordion
          accordionTerms='Specify prompts'
          collapseNumber='collapseOne'
        >
          <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
            <InputType
              name='input'
              value={prompts}
              isDisabled={false}
              label='How many prompts would you like?'
              isRequired
              type='number'
              pattern='[0-9]*'
              min='1'
              max='255'
            />
          </div>
          {generateInputFields(prompts, 'Prompt')}
          <ButtonsRow />
        </Accordion>
      </div>
      <div className='row'>
        <Accordion
          accordionTerms='Content warnings'
          collapseNumber='collapseThree'
        >
          <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
            <InputType
              name='input'
              value={contentWarnings}
              isDisabled={false}
              label='How many content warnings would you like?'
              isRequired
              type='number'
              pattern='[0-9]*'
              min='1'
              max='255'
            />
          </div>
          {generateInputFields(contentWarnings, 'CW')}
          <ButtonsRow />
        </Accordion>
      </div>
    </div>
  );
};

export default AdminPage;
