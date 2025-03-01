import React from 'react';
import moment from 'moment';

import Modal from '../../components/modal/modal';
import NavigationButtons from '../../components/navigate-buttons/navigate-buttons';
import InputSelectionCard from '../../components/form-elements/input/input-selection';
import Selections from '../../components/selections/selections';
import { useAppDispatch, useAppSelector } from '../../stores/store';
import {
  setContentSensitivities,
  setIsContentWarning,
} from '../../stores/reducers/story-submission';
import { CONTENT_WARNINGS } from '../../services/constants/constants';
import useNavigation from '../../utils/hooks/useNavigation';

export const ContentWarnings: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation();
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const {
    characterSelection,
    contentSensitivities,
    contentWarning,
    betaHIVESelection,
    settingSelection,
    storySubmission,
  } = useAppSelector((state) => state.storySubmission);

  React.useEffect(() => {
    if (
      characterSelection &&
      betaHIVESelection &&
      settingSelection &&
      storySubmission.trim().length >= 10 &&
      contentWarning !== '' &&
      (contentWarning === 'No' || contentSensitivities.length > 0)
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [
    characterSelection,
    betaHIVESelection,
    settingSelection,
    storySubmission,
    contentSensitivities.length,
    contentWarning,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    const storyData = {
      title: 'Your Story Title', // Replace with actual title
      author: 'Author ID', // Replace with actual author ID
      betaHive: betaHIVESelection,
      setting: settingSelection,
      character: characterSelection,
      contentSensitivities: contentSensitivities,
      contentWarning: contentWarning,
      story: storySubmission,
      date: moment().toISOString(),
    };
    console.log('Story data:', storyData);

    try {
      // const response = await fetch(
      //   'https://your-wordpress-site.com/wp-json/beta-hive/v1/submit-story', // update with actual URL
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(storyData),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error('Failed to submit story');
      // }

      // const result = await response.json();
      // console.log('Story submitted successfully:', result);
      navigate('Confirmation');
    } catch (error) {
      console.error('Error submitting story:', error);
    }
  };

  const handleContentWarningRadio = (label: string) => {
    dispatch(setIsContentWarning(label));
    if (label === 'No') {
      dispatch(setContentSensitivities([]));
    }
  };

  const handleContentSensitivities = (
    contentName: string,
    isChecked?: boolean
  ) => {
    if (contentWarning === 'Yes') {
      if (isChecked) {
        if (contentSensitivities.includes(contentName)) {
          dispatch(
            setContentSensitivities(
              contentSensitivities.filter((content) => content !== contentName)
            )
          );
        } else {
          dispatch(
            setContentSensitivities([...contentSensitivities, contentName])
          );
        }
      } else {
        dispatch(
          setContentSensitivities(
            contentSensitivities.filter((content) => content !== contentName)
          )
        );
      }
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Content warnings</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Specify if your story will include any sensitive content or
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
          Will your story have any content sensitive to certain groups?
        </h3>
        <InputSelectionCard
          name='isContentSensitive'
          isDisabled={false}
          inputType='radio'
          label='Yes'
          handleSelection={handleContentWarningRadio}
        />
        <InputSelectionCard
          name='isContentSensitive'
          isDisabled={false}
          inputType='radio'
          label='No'
          handleSelection={handleContentWarningRadio}
        />
      </div>
      <div className={`row mt-5 ${contentWarning !== 'Yes' && 'opacity-25'}`}>
        <h3 className='pb-2 mt-5'>Content Sensitivities</h3>
        {CONTENT_WARNINGS.map((content, index) => (
          <InputSelectionCard
            key={content.name + index}
            name={content.name}
            inputType='checkbox'
            isDisabled={contentWarning !== 'Yes'}
            label={content.name}
            handleSelection={handleContentSensitivities}
          />
        ))}
      </div>
      <NavigationButtons
        backNavigation='Story Submission'
        handleSubmit={() => setShowModal(true)}
        isNextDisabled={true}
        isNextDisplayed={false}
        isSubmitDisabled={isSubmitDisabled}
        isSubmitDisplayed={true}
      />
      {showModal && (
        <Modal
          alertMessage='Are you sure you want to submit your story? Once you submit, you cannot change your HIVE selection. (You can edit your story after submission.)'
          onConfirm={() => handleSubmit}
          onDismiss={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ContentWarnings;
