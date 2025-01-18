import React from 'react';

import { useAppDispatch } from '../../stores/store';

export const useDraftSave = (
  storyText: string,
  saveAction: (text: string) => { type: string; payload: string }
) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (storyText.trim() === '') {
      return; // Don't save empty storyText
    }

    const handleSave = () => {
      setIsLoading(true);
      setIsSaved(false);
      dispatch(saveAction(storyText));
      setTimeout(() => {
        setIsLoading(false);
        setIsSaved(true);
      }, 2000); // Simulate save delay
    };

    const timer = setTimeout(handleSave, 2500); // Auto-save after 2.5 seconds of inactivity

    return () => clearTimeout(timer); // Clear timeout if user types again
  }, [storyText, dispatch, saveAction]);

  return { isLoading, isSaved };
};

export default useDraftSave;
