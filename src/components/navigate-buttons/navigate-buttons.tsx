import React from 'react';
import moment from 'moment';

import { useAppDispatch, useAppSelector } from '../../stores/store';
import { setStorySubmission } from '../../stores/reducers/story-submission';
import useNavigation from '../../utils/hooks/useNavigation';

interface NavigateButtonsProps {
  backNavigation?: string;
  isBackDisplayed?: boolean;
  isNextDisabled: boolean;
  isNextDisplayed?: boolean;
  isSubmitDisplayed?: boolean;
  nextButtonText?: string;
  nextNavigation?: string;
}

export const NavigateButtons: React.FC<NavigateButtonsProps> = ({
  backNavigation,
  isBackDisplayed = true,
  isNextDisabled,
  isNextDisplayed = true,
  isSubmitDisplayed = false,
  nextButtonText = 'Next',
  nextNavigation,
}) => {
  const navigate = useNavigation();
  const dispatch = useAppDispatch();
  const [storyText, setStoryText] = React.useState('');
  const {
    characterSelection,
    contentSensitivities,
    genreSelection,
    settingSelection,
    storySubmission,
  } = useAppSelector((state) => state.storySubmission);
  const isSubmitDisabled =
    !characterSelection ||
    !genreSelection ||
    !settingSelection ||
    storyText.trim().length < 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!storySubmission || storySubmission.trim() === '') {
      dispatch(setStorySubmission(storyText));
    }

    const storyData = {
      title: 'Your Story Title', // Replace with actual title
      author: 'Author ID', // Replace with actual author ID
      betaHive: genreSelection,
      setting: settingSelection,
      character: characterSelection,
      contentSensitivities: contentSensitivities,
      story: storyText,
      date: moment().toISOString(),
    };

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
      navigate('Content Warnings');
    } catch (error) {
      console.error('Error submitting story:', error);
    }
  };

  return (
    <div className='d-flex justify-content-flex-start'>
      {isBackDisplayed && backNavigation && (
        <button
          className='btn btn-outline-primary mt-4 mr-4'
          onClick={() => navigate(backNavigation)}
        >
          Go Back
        </button>
      )}
      &nbsp;&nbsp;
      {isNextDisplayed && nextNavigation && (
        <button
          className='btn btn-primary mt-4'
          disabled={!isNextDisabled}
          onClick={() => navigate(nextNavigation)}
        >
          Next
        </button>
      )}
      {isSubmitDisplayed && (
        <button className='btn btn-primary mt-4' type='submit'>
          Submit
        </button>
      )}
    </div>
  );
};

export default NavigateButtons;
