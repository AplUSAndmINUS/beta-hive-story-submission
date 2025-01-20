import React from 'react';

import { useAppDispatch } from '../../stores/store';
import {
  setVSFeedbackSelection,
} from '../../stores/reducers/versus-feedback-submission';

export const useFeedbackSubmission = (
  feedbackText: string,
  setFeedbackText: React.Dispatch<React.SetStateAction<string>>,
) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [statusText, setStatusText] = React.useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    feedbackText: string
  ) => {
    handleSave();

    if (feedbackText.length > 0) {
      setIsSubmitDisabled(false);
      setFeedbackText(e.target.value);

      // simulate longer save time
      setTimeout(() => {
        setVSFeedbackSelection(feedbackText);
      }, 2500);
    }

    // switch (feedbackText) {
    //   case 1:
    //     setFeedbackTextOne(e.target.value);
    //     setTimeout(() => {
    //       dispatch(setVSFeedbackOneSelection(feedbackTextOne));
    //     }, 2500);
    //     break;
    //   case 2:
    //     setStatusText('Saving...');
    //     setFeedbackTextTwo(e.target.value);
    //     setTimeout(() => {
    //       dispatch(setVSFeedbackTwoSelection(feedbackTextTwo));
    //     }, 2500);
    //     break;
    // }
  };

  const handleReset = () => {
    setFeedbackText('');
  };

  const handleSave = () => {
    setStatusText('Saving...');
    setIsLoading(true);
    setIsSaved(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsSaved(true);
      setStatusText('Saved!');
    }, 4000); // Simulate save delay
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true);
    setIsSaved(false);
    if (!feedbackText) {
      return;
    }

    dispatch(setVSFeedbackSelection(feedbackText));

    try {
      const response = await fetch(
        'https://your-wordpress-site.com/wp-json/beta-hive/v1/submit-feedback', // update with actual URL
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ feedbackText }),
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
    isSubmitDisabled,
    statusText,
  };
};

export default useFeedbackSubmission;