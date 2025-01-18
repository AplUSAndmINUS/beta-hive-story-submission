import React from 'react';

import { useAppDispatch } from '../../stores/store';
import {
  setVSFeedbackOneSelection,
  setVSFeedbackTwoSelection,
} from '../../stores/reducers/versus-feedback-submission';

export const useFeedbackSubmission = (
  feedbackTextOne: string,
  setFeedbackTextOne: React.Dispatch<React.SetStateAction<string>>,
  feedbackTextTwo: string,
  setFeedbackTextTwo: React.Dispatch<React.SetStateAction<string>>
) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    feedbackText: number
  ) => {
    handleSave();

    switch (feedbackText) {
      case 1:
        setFeedbackTextOne(e.target.value);
        setTimeout(() => {
          dispatch(setVSFeedbackOneSelection(feedbackTextOne));
        }, 2500);
        break;
      case 2:
        setFeedbackTextTwo(e.target.value);
        setTimeout(() => {
          dispatch(setVSFeedbackTwoSelection(feedbackTextTwo));
        }, 2500);
        break;
    }
  };

  const handleReset = () => {
    setFeedbackTextOne('');
    setFeedbackTextTwo('');
  };

  const handleSave = () => {
    setIsLoading(true);
    setIsSaved(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsSaved(true);
    }, 4000); // Simulate save delay
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true);
    setIsSaved(false);
    if (!feedbackTextOne || !feedbackTextTwo) {
      return;
    }

    dispatch(setVSFeedbackOneSelection(feedbackTextOne));
    dispatch(setVSFeedbackTwoSelection(feedbackTextTwo));

    try {
      const response = await fetch(
        'https://your-wordpress-site.com/wp-json/beta-hive/v1/submit-feedback', // update with actual URL
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ feedbackTextOne, feedbackTextTwo }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      const result = await response.json();
      console.log('Feedback submitted successfully:', result);
      // navigate('/confirmation'); // Uncomment if you have navigation logic
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return {
    handleChange,
    handleReset,
    handleSubmit,
    isLoading,
    isSaved,
  };
};

export default useFeedbackSubmission;