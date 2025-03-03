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

  // Similar methods for isPositive and isPublic

  const handleReset = () => {
    if (storyNumber === 1) {
      dispatch(setFeedbackStoryOneText(''));
      dispatch(setFeedbackStoryOneIsAnonymous(false));
      dispatch(setFeedbackStoryOneIsPositive(false));
      dispatch(setFeedbackStoryOneIsPublic(false));
    } else {
      dispatch(setFeedbackStoryTwoText(''));
      dispatch(setFeedbackStoryTwoIsAnonymous(false));
      dispatch(setFeedbackStoryTwoIsPositive(false));
      dispatch(setFeedbackStoryTwoIsPublic(false));
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
