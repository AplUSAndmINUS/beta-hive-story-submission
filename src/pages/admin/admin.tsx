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
  const [calendarEvent, setCalendarEvent] = React.useState<moment.Moment>(
    moment()
  );

  const [betaHiveValues, setBetaHiveValues] = React.useState<
    { name: string; image: string }[]
  >([]);
  const [contentWarningValues, setContentWarningValues] = React.useState<
    string[]
  >([]);
  const [promptValues, setPromptValues] = React.useState<string[]>([]);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    inputType: string
  ) => {
    const { value } = e.target;
    switch (inputType) {
      case 'prompts':
        setPromptValues((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case 'betaHiveOptions':
        setBetaHiveValues((prev) => {
          const newValues = [...prev];
          newValues[index] = { ...newValues[index], name: value };
          return newValues;
        });
        break;
      case 'contentWarnings':
        setContentWarningValues((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      default:
        break;
    }
  };

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
    isSaved: boolean,
    values: any[],
    handleChange: (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) => void
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
        {generateInputFields(value, labelPrefix, values, handleChange)}
        <SaveSpinner
          isLoading={isLoading}
          isSaved={isSaved}
          savedText='Changes saved!'
        />
      </Accordion>
    );
  };

  const generateInputFields = (
    count: number,
    labelPrefix: string,
    values: any[],
    handleChange: (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) => void
  ) => {
    return Array.from({ length: Math.ceil(count / 2) }).map((_, rowIndex) => (
      <div
        key={rowIndex}
        className='d-flex flex-row flex-wrap justify-content-between'
      >
        {Array.from({ length: 2 }).map((_, colIndex) => {
          const index = rowIndex * 2 + colIndex;
          if (index < count) {
            const value =
              typeof values[index] === 'object'
                ? values[index]?.name
                : values[index];
            return (
              <InputType
                key={index}
                name={`${labelPrefix}${index + 1}`}
                value={value || ''}
                onChange={(e) => handleChange(e, index)}
                isDisabled={false}
                isRequired
                label={`${labelPrefix} ${index + 1}`}
                isImageUpload={labelPrefix === 'Beta HIVE'}
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
          <Accordion
            accordionTerms='Calendar Events'
            collapseNumber='collapseFive'
          >
            <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
              <InputType
                name='calendarEvents'
                value={countdownDate.format('YYYY-MM-DD')}
                isDisabled={false}
                label='Calendar event'
                isRequired
                onChange={(e) =>
                  setCalendarEvent(moment(e.target.value, 'YYYY-MM-DD'))
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
            isBetaHiveSaved,
            betaHiveValues,
            (e, index) => handleChange(e, index, 'betaHiveOptions')
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
            isPromptsSaved,
            promptValues,
            (e, index) => handleChange(e, index, 'prompts')
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
            isContentWarningsSaved,
            contentWarningValues,
            (e, index) => handleChange(e, index, 'contentWarnings')
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
