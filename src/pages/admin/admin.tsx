import React from 'react';
import moment from 'moment';

import { useAppDispatch } from '../../stores/store';
import {
  setAdminPrompts,
  setBetaHIVEs,
  setContentWarnings,
  setCountdownDate,
} from '../../stores/reducers/admin-submission';
import Accordion from '../../components/accordion/accordion';
import InputType from '../../components/form-elements/input/input-type';
import ButtonsRow from '../../components/form-elements/buttons/buttons-row';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';

export const AdminPage: React.FC = () => {
  const [betaHiveOptions, setBetaHiveOptions] = React.useState<number>(4);
  const [contentWarnings, setContentWarnings] = React.useState<number>(4);
  const [prompts, setPrompts] = React.useState<number>(10);
  const [countdownDate, setCountdownDate] = React.useState<moment.Moment>(
    moment()
  );

  const [isBetaHiveLoading, setIsBetaHiveLoading] =
    React.useState<boolean>(false);
  const [isBetaHiveSaved, setIsBetaHiveSaved] = React.useState<boolean>(false);
  const [isContentWarningsLoading, setIsContentWarningsLoading] =
    React.useState<boolean>(false);
  const [isContentWarningsSaved, setIsContentWarningsSaved] =
    React.useState<boolean>(false);
  const [isPromptsLoading, setIsPromptsLoading] =
    React.useState<boolean>(false);
  const [isPromptsSaved, setIsPromptsSaved] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

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
        setIsPromptsLoading(true);
        setTimeout(() => {
          setIsPromptsLoading(false);
          setIsPromptsSaved(true);
        }, 1000); // Simulate saving delay
        break;
      case 'betaHiveOptions':
        setBetaHiveOptions(value);
        setIsBetaHiveLoading(true);
        setTimeout(() => {
          setIsBetaHiveLoading(false);
          setIsBetaHiveSaved(true);
        }, 1000); // Simulate saving delay
        break;
      case 'contentWarnings':
        setContentWarnings(value);
        setIsContentWarningsLoading(true);
        setTimeout(() => {
          setIsContentWarningsLoading(false);
          setIsContentWarningsSaved(true);
        }, 1000); // Simulate saving delay
        break;
      default:
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
    console.log(`Value for ${label}:`, e.target.value);
  }

  const handleClear = () => {
    setBetaHiveOptions(4);
    setContentWarnings(4);
    setPrompts(10);
    setCountdownDate(moment());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('Beta HIVE options:', betaHiveOptions);
    console.log('Prompts:', prompts);
    console.log('Content warnings:', contentWarnings);
    console.log('Countdown date:', countdownDate.format('YYYY-MM-DD'));
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
    max: string,
    isLoading: boolean,
    isSaved: boolean
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
        <SaveSpinner
          isLoading={isLoading}
          isSaved={isSaved}
          savedText='Changes saved!'
        />
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
                value={''}
                onChange={(e) => handleChange(e, `${labelPrefix}${index + 1}`)}
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
          <Accordion
            accordionTerms='Countdown date'
            collapseNumber='collapseFour'
          >
            <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
              <InputType
                name='countdownDate'
                value={countdownDate.format('YYYY-MM-DD')}
                isDisabled={false}
                label='Countdown date'
                isRequired
                onChange={(e) =>
                  setCountdownDate(moment(e.target.value, 'YYYY-MM-DD'))
                }
                type='date'
              />
            </div>
            <SaveSpinner
              isLoading={false}
              isSaved={false}
              savedText='Changes saved!'
            />
          </Accordion>
        </div>
        <div className='row'>
          {generateAccordion(
            'Beta HIVE options',
            'collapseTwo',
            betaHiveOptions,
            handleOptions,
            'betaHiveOptions',
            'Beta HIVE',
            '100',
            isBetaHiveLoading,
            isBetaHiveSaved
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
            '255',
            isPromptsLoading,
            isPromptsSaved
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
            '255',
            isContentWarningsLoading,
            isContentWarningsSaved
          )}
        </div>
        <div className='row'>
          <ButtonsRow handleClear={handleClear} handleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
