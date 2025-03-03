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

export const useFeedbackSubmission = (
  feedbackText: string,
  storyNumber: 1 | 2,
  isAnonymous: boolean,
  isPositive: boolean,
  isPublic: boolean
) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [statusText, setStatusText] = React.useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const { feedbackStoryOneText, feedbackStoryTwoText } = useAppSelector(
    (state) => state.feedbackStorySubmission
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (feedbackStoryOneText || feedbackStoryTwoText) {
      setIsSubmitDisabled(false);
    };
  }, [feedbackStoryOneText, feedbackStoryTwoText]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleSave();

    const text = e.target.value;

    if (storyNumber === 1) {
      dispatch(setFeedbackStoryOneText(text));
      dispatch(setFeedbackStoryOneIsAnonymous(isAnonymous));
      dispatch(setFeedbackStoryOneIsPositive(isPositive));
      dispatch(setFeedbackStoryOneIsPublic(isPublic));
    } else {
      dispatch(setFeedbackStoryTwoText(text));
      dispatch(setFeedbackStoryTwoIsAnonymous(isAnonymous));
      dispatch(setFeedbackStoryTwoIsPositive(isPositive));
      dispatch(setFeedbackStoryTwoIsPublic(isPublic));
    }
  };

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
    }, 2500); // Simulate save delay
  };

  return {
    handleChange,
    handleReset,
    isLoading,
    isSaved,
    isSubmitDisabled,
    statusText,
  };
};

export default useFeedbackSubmission;
