import React from 'react';
import moment from 'moment';

import { useAppDispatch, useAppSelector } from '../../stores/store';
import {
  setBetaHIVECount,
  setBetaHIVEs,
  // setCalendarEventCount,
  // setCalendarEvents,
  setContentWarningCount,
  setContentWarnings,
  setCountdownDate,
  setPromptCount,
  setPrompts,
  setWordCount,
} from '../../stores/reducers/admin-submission';
import Accordion from '../../components/accordion/accordion';
import ButtonsRow from '../../components/form-elements/buttons/buttons-row';
import InputType from '../../components/form-elements/input/input-type';
import Modal from '../../components/modal/modal';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';

export const AdminPage: React.FC = () => {
  const {
    betaHIVECount,
    betaHIVEs,
    // calendarEventCount,
    // calendarEvents,
    contentWarningCount,
    contentWarnings,
    countdownDate,
    promptsCount,
    prompts,
    wordCount,
  } = useAppSelector((state) => state.adminSubmission);
  const dispatch = useAppDispatch();
  const [alertMessage, setAlertMessage] = React.useState<string>('');
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const [isBetaHiveLoading, setIsBetaHiveLoading] =
    React.useState<boolean>(false);
  const [isBetaHiveSaved, setIsBetaHiveSaved] = React.useState<boolean>(false);
  // const [isCalendarEventsLoading, setIsCalendarEventsLoading] =
  //   React.useState<boolean>(false);
  // const [isCalendarEventsSaved, setIsCalendarEventsSaved] =
  //   React.useState<boolean>(false);
  const [isContentWarningsLoading, setIsContentWarningsLoading] =
    React.useState<boolean>(false);
  const [isContentWarningsSaved, setIsContentWarningsSaved] =
    React.useState<boolean>(false);
  const [isPromptsLoading, setIsPromptsLoading] =
    React.useState<boolean>(false);
  const [isPromptsSaved, setIsPromptsSaved] = React.useState<boolean>(false);

  const handleCountOptions = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    let value = parseInt(e.target.value);
    if (value < 1) {
      value = 1;
    }

    switch (inputType) {
      case 'betaHiveOptions':
        dispatch(setBetaHIVECount(value));
        setIsBetaHiveLoading(true);
        setTimeout(() => {
          setIsBetaHiveLoading(false);
          setIsBetaHiveSaved(true);
        }, 2500); // Simulate saving delay
        break;
      // case 'calendarEvents':
      //   dispatch(setCalendarEventCount(value));
      //   setIsCalendarEventsLoading(true);
      //   setTimeout(() => {
      //     setIsCalendarEventsLoading(false);
      //     setIsCalendarEventsSaved(true);
      //   }, 2500); // Simulate saving delay
      //   break;
      case 'contentWarnings':
        dispatch(setContentWarningCount(value));
        setIsContentWarningsLoading(true);
        setTimeout(() => {
          setIsContentWarningsLoading(false);
          setIsContentWarningsSaved(true);
        }, 2500); // Simulate saving delay
        break;
      case 'prompts':
        dispatch(setPromptCount(value));
        setIsPromptsLoading(true);
        setTimeout(() => {
          setIsPromptsLoading(false);
          setIsPromptsSaved(true);
        }, 2500); // Simulate saving delay
        break;
      default:
        break;
    }
  };

  const validateSubmission = (): boolean => {
    if (
      betaHIVEs.length === 0 ||
      prompts.length === 0 ||
      contentWarnings.length === 0
    ) {
      setAlertMessage('All fields must be filled out.');
      setShowModal(true);
      return false;
    }

    if (betaHIVECount !== betaHIVEs.length) {
      setAlertMessage(
        'The number of Beta HIVE options does not match the expected length.'
      );
      setShowModal(true);
      return false;
    }

    if (promptsCount !== prompts.length) {
      setAlertMessage(
        'The number of prompts does not match the expected length.'
      );
      setShowModal(true);
      return false;
    }

    // if (calendarEventCount !== calendarEvents.length) {
    //   setAlertMessage(
    //     'The number of calendar events does not match the expected length.'
    //   );
    //   setShowModal(true);
    //   return false;
    // }

    if (moment(countdownDate) <= moment()) {
      setAlertMessage('Countdown date must be in the future.');
      setShowModal(true);
      return false;
    }

    if (contentWarningCount !== contentWarnings.length) {
      setAlertMessage(
        'The number of content warnings does not match the expected length.'
      );
      setShowModal(true);
      return false;
    }

    if (wordCount <= 4) {
      setAlertMessage('Word count must be at least 5.');
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    inputType: string
  ) => {
    const { value } = e.target;
    switch (inputType) {
      case 'betaHiveOptions':
        dispatch(
          setBetaHIVEs(
            betaHIVEs.map((item, i) =>
              i === index ? { ...item, name: value } : item
            )
          )
        );
        break;
      // case 'calendarEvents':
      //   dispatch(
      //     setCalendarEvents(
      //       calendarEvents.map((item, i) => (i === index ? value : item))
      //     )
      //   );
      //   break;
      case 'contentWarnings':
        dispatch(
          setContentWarnings(
            contentWarnings.map((item, i) => (i === index ? value : item))
          )
        );
        break;
      case 'prompts':
        dispatch(
          setPrompts(prompts.map((item, i) => (i === index ? value : item)))
        );
        break;
      default:
        break;
    }
  };

  const handleClear = () => {
    dispatch(
      setBetaHIVECount(4),
      setContentWarningCount(4),
      setPromptCount(10),
      setCountdownDate(moment().format('YYYY-MM-DD')),
      setWordCount(500)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateSubmission()) {
      // Proceed with submission
      console.log('Beta HIVE options:', betaHIVEs);
      console.log('Prompts:', prompts);
      console.log('Content warnings:', contentWarnings);
      console.log('Word count:', wordCount);
      console.log('Countdown date:', countdownDate);
      console.log('Form submitted');
    } else {
      console.log('Submission is invalid. Please fill out all fields.');
    }
  };

  const generateAccordion = (
    title: string,
    collapseNumber: string,
    value: number,
    handleCountOptions: (
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
      index: number,
      inputType: string
    ) => void
  ) => {
    return (
      <div className='row'>
        <Accordion accordionTerms={title} collapseNumber={collapseNumber}>
          <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
            <InputType
              name='input'
              value={value}
              isDisabled={false}
              label={`How many ${title.toLowerCase()} would you like?`}
              isRequired
              onChange={(e) => handleCountOptions(e, inputType)}
              type='number'
              pattern='[0-9]*'
              min='1'
              max={max}
            />
          </div>
          {generateInputFields(
            value,
            labelPrefix,
            values,
            handleChange,
            inputType
          )}
          <SaveSpinner
            isLoading={isLoading}
            isSaved={isSaved}
            savedText='Changes saved!'
          />
        </Accordion>
      </div>
    );
  };

  const generateInputFields = (
    count: number,
    labelPrefix: string,
    values: any[],
    handleChange: (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number,
      inputType: string
    ) => void,
    inputType: string
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
                key={`${labelPrefix}${index + 1}`}
                name={`${labelPrefix}${index + 1}`}
                value={value || ''}
                onChange={(e) => handleChange(e, index, inputType)}
                isDisabled={false}
                isRequired
                label={`${labelPrefix} ${index + 1}`}
                isContentWarning={inputType === 'contentWarnings'}
                isPrompts={inputType === 'prompts'}
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
                value={moment(countdownDate).format('YYYY-MM-DD')}
                isDisabled={false}
                label='Countdown date'
                isRequired
                onChange={(e) => dispatch(setCountdownDate(e.target.value))}
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
          <Accordion accordionTerms='Word Count' collapseNumber='collapseSeven'>
            <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
              <InputType
                name='wordCount'
                value={wordCount}
                isDisabled={false}
                label='Word Count'
                isRequired
                onChange={(e) =>
                  dispatch(setWordCount(parseInt(e.target.value)))
                }
                type='number'
              />
            </div>
            <SaveSpinner
              isLoading={false}
              isSaved={false}
              savedText='Changes saved!'
            />
          </Accordion>
        </div>
        {/******POST-MVP option-- will show just countdown date in calendar -TW
        <div className='row'>
          <Accordion accordionTerms='Calendar events' collapseNumber='collapseSeven'>
            <div className='d-flex flex-row flex-wrap justify-content-start mb-4'>
              <InputType
                name='wordCount'
                value={wordCount}
                isDisabled={false}
                label='Word Count'
                isRequired
                onChange={(e) => setWordCount(parseInt(e.target.value))}
                type='number'
              />
            </div>
            <SaveSpinner
              isLoading={false}
              isSaved={false}
              savedText='Changes saved!'
            />
          </Accordion>
        </div> */}
        {generateAccordion(
          'Beta HIVE options',
          'collapseTwo',
          betaHIVECount,
          handleCountOptions,
          'betaHiveOptions',
          'Beta HIVE',
          '100',
          isBetaHiveLoading,
          isBetaHiveSaved,
          betaHIVEs,
          handleChange
        )}
        {generateAccordion(
          'Prompts',
          'collapseOne',
          promptsCount,
          handleCountOptions,
          'prompts',
          'Prompt',
          '255',
          isPromptsLoading,
          isPromptsSaved,
          prompts,
          handleChange
        )}
        {generateAccordion(
          'Content warnings',
          'collapseThree',
          contentWarningCount,
          handleCountOptions,
          'contentWarnings',
          'CW',
          '255',
          isContentWarningsLoading,
          isContentWarningsSaved,
          contentWarnings,
          handleChange
        )}
        <div className='row'>
          <ButtonsRow handleClear={handleClear} handleSubmit={handleSubmit} />
        </div>
      </form>

      {showModal && (
        <Modal
          alertMessage={alertMessage}
          onDismiss={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default AdminPage;
