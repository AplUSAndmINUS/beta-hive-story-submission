import React from 'react';

import useDraftSave from '../../utils/hooks/useDraftSave';
import { setStorySubmission } from '../../stores/reducers/story-submission';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';
import Selections from '../../components/selections/selections';
import NavigateButtons from '../../components/navigate-buttons/navigate-buttons';
import WordCount from '../../components/word-count/word-count';
import useWordCount from '../../utils/hooks/useWordCount';
import { useAppSelector } from '../../stores/store';

export const StorySubmission: React.FC = () => {
  const [isNextDisabled, setIsNextDisabled] = React.useState(true);
  const [storyText, setStoryText] = React.useState('');
  const { isLoading, isSaved } = useDraftSave(storyText, setStorySubmission);
  const userWordCount = useWordCount(storyText);
  const { wordCount } = useAppSelector((state) => state.adminSubmission);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStoryText(e.target.value);
  };

  React.useEffect(() => {
    if (storyText.trim().length >= 10 && storyText.split(' ').length <= wordCount) {
      setIsNextDisabled(false);
    } else {
      setIsNextDisabled(true);
    }
  }, [storyText, wordCount]);

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Write your story</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Please write your story below, then click "Submit Story". <br />
            Don't worry: Your story will autosave, and you can edit it anytime
            after submission.
          </p>
        </div>
        <Selections />
      </div>
      <div className='row'>
        <textarea
          autoFocus
          className='form-control ml-2'
          rows={10}
          placeholder='Enter your story here'
          value={storyText}
          onChange={handleChange}
        ></textarea>
        <div className='d-flex justify-content-between w-100'>
          <WordCount wordCount={userWordCount} />
          <div className='d-flex justify-content-start'>
            <SaveSpinner isLoading={isLoading} isSaved={isSaved} />
            <NavigateButtons
              backNavigation='Prompt Selection'
              isNextDisabled={isNextDisabled}
              nextButtonText='Submit Story'
              nextNavigation='Content Warning'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySubmission;
