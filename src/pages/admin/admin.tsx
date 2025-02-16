import React from 'react';

import Accordion from '../../components/accordion/accordion';
import InputType from '../../components/form-elements/input/input-type';
import ButtonsRow from '../../components/form-elements/buttons/buttons-row';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';

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

  const handleClear = () => {
    setBetaHiveOptions(4);
    setContentWarnings(4);
    setPrompts(10);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('Beta HIVE options:', betaHiveOptions);
    console.log('Prompts:', prompts);
    console.log('Content warnings:', contentWarnings);
  };

  const generateAccordion = (
    title: string,
    collapseNumber: string,
    value: number,
    handleOptions: (
      e: React.ChangeEvent<HTMLInputElement>,
      inputType: string
    ) => void,
    inputType: string,
    labelPrefix: string,
    max: string
  ) => {
    return (
      <Accordion accordionTerms={title} collapseNumber={collapseNumber}>
        <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
          <InputType
            name='input'
            value={value}
            isDisabled={false}
            label={`How many ${title.toLowerCase()} would you like?`}
            isRequired
            onChange={(e) => handleOptions(e, inputType)}
            type='number'
            pattern='[0-9]*'
            min='1'
            max={max}
          />
        </div>
        {generateInputFields(value, labelPrefix)}
        <SaveSpinner isLoading={false} isSaved={false} savedText='Changes saved!' />
      </Accordion>
    );
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
                isRequired
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
      <form onSubmit={handleSubmit}>
        <div className='row'>
          {generateAccordion(
            'Beta HIVE options',
            'collapseTwo',
            betaHiveOptions,
            handleOptions,
            'betaHiveOptions',
            'Beta HIVE',
            '100'
          )}
        </div>
        <div className='row'>
          {generateAccordion(
            'Prompts',
            'collapseOne',
            prompts,
            handleOptions,
            'prompts',
            'Prompt',
            '255'
          )}
        </div>
        <div className='row'>
          {generateAccordion(
            'Content warnings',
            'collapseThree',
            contentWarnings,
            handleOptions,
            'contentWarnings',
            'CW',
            '255'
          )}
        </div>
        <div className='row'>
          <ButtonsRow
            handleClear={() => handleClear}
            handleSubmit={() => handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
