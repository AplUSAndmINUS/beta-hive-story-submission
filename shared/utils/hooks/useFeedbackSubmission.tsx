import React from 'react';
import { useAppDispatch, useAppSelector } from '../../stores/store';
import {
  setFeedbackStoryOneText,
  setFeedbackStoryOneIsAnonymous,
  setFeedbackStoryOneIsPositive,
  setFeedbackStoryOneIsPublic,
  setFeedbackStoryTwoText,
  setFeedbackStoryTwoIsAnonymous,
  setFeedbackStoryTwoIsPositive,
  setFeedbackStoryTwoIsPublic,
} from '../../stores/reducers/feedback-submission';
import { feedbackSchema } from '../../services/models/battleHIVE.types';

export const useFeedbackSubmission = (initialStoryNumber: 1 | 2 = 1) => {
  // Local UI state
  const [storyNumber, setStoryNumber] = React.useState<1 | 2>(
    initialStoryNumber
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [statusText, setStatusText] = React.useState('');

  // Redux state
  const {
    feedbackStoryOneText,
    feedbackStoryOneIsAnonymous,
    feedbackStoryOneIsPositive,
    feedbackStoryOneIsPublic,
    feedbackStoryTwoText,
    feedbackStoryTwoIsAnonymous,
    feedbackStoryTwoIsPositive,
    feedbackStoryTwoIsPublic,
  } = useAppSelector((state) => state.feedbackStorySubmission);
  const dispatch = useAppDispatch();

  // Derived state
  const isSubmitDisabled =
    storyNumber === 1 ? !feedbackStoryOneText : !feedbackStoryTwoText;

  const feedbackText =
    storyNumber === 1 ? feedbackStoryOneText : feedbackStoryTwoText;

  const isAnonymous =
    storyNumber === 1
      ? feedbackStoryOneIsAnonymous
      : feedbackStoryTwoIsAnonymous;

  const isPositive =
    storyNumber === 1 ? feedbackStoryOneIsPositive : feedbackStoryTwoIsPositive;

  const isPublic =
    storyNumber === 1 ? feedbackStoryOneIsPublic : feedbackStoryTwoIsPublic;

  const handleTextChange = ($e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (storyNumber === 1) {
      dispatch(setFeedbackStoryOneText($e.target.value));
    } else {
      dispatch(setFeedbackStoryTwoText($e.target.value));
    }
    handleSave();
  };

  const handleAnonymousChange = (value: boolean) => {
    storyNumber === 1
      ? dispatch(setFeedbackStoryOneIsAnonymous(value))
      : dispatch(setFeedbackStoryTwoIsAnonymous(value));

    handleSave();
  };

  const handlePositiveChange = (value: boolean) => {
    storyNumber === 1
      ? dispatch(setFeedbackStoryOneIsPositive(value))
      : dispatch(setFeedbackStoryTwoIsPositive(value));
  };

  const handlePublicChange = (value: boolean) => {
    storyNumber === 1
      ? dispatch(setFeedbackStoryOneIsPublic(value))
      : dispatch(setFeedbackStoryTwoIsPublic(value));
  };

  const handleFeedbackSubmit = () => {
    // Validate fields before submission
    if (isSubmitDisabled) {
      setStatusText('Please add feedback text before submitting');
      return;
    }

    setStatusText('Submitting feedback...');
    setIsLoading(true);

    // Get the current state for the selected story
    const submissionData: Pick<
      feedbackSchema,
      'id' | 'feedback' | 'isPublic' | 'isPositive' | 'isAnonymous'
    > = {
      id: new Date().toISOString(),
      feedback: storyNumber === 1 ? feedbackStoryOneText : feedbackStoryTwoText,
      isAnonymous: isAnonymous,
      isPositive: isPositive,
      isPublic: isPublic,
    };

    console.log('Submitting feedback:', submissionData);

    // Simulate API submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSaved(true);
      setStatusText('Feedback submitted successfully!');

      // Optional: Reset form after submission
      handleReset();
    }, 2000);

    // Here you would typically dispatch to Redux or call an API
    // For example:
    // dispatch(submitFeedback(submissionData));
  };

  // Similar methods for isPositive and isPublic

  const handleReset = () => {
    if (storyNumber === 1) {
      dispatch(setFeedbackStoryOneText(''));
      dispatch(setFeedbackStoryOneIsAnonymous(false));
      dispatch(setFeedbackStoryOneIsPositive(true));
      dispatch(setFeedbackStoryOneIsPublic(true));
    } else {
      dispatch(setFeedbackStoryTwoText(''));
      dispatch(setFeedbackStoryTwoIsAnonymous(false));
      dispatch(setFeedbackStoryTwoIsPositive(true));
      dispatch(setFeedbackStoryTwoIsPublic(true));
    }
  };

  const handleSave = () => {
    setStatusText('Saving...');
    setIsLoading(true);
    setIsSaved(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsSaved(true);
      setStatusText('Saved!');
    }, 2500);
  };

  return {
    // State
    storyNumber,
    feedbackText,
    isAnonymous,
    isPositive,
    isPublic,
    isLoading,
    isSaved,
    isSubmitDisabled,
    statusText,

    // Actions
    setStoryNumber,
    handleAnonymousChange,
    handlePositiveChange,
    handlePublicChange,
    handleReset,
    handleSave,
    handleTextChange,
  };
};

export default useFeedbackSubmission;
