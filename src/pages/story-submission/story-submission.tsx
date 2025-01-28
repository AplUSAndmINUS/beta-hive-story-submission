import React from 'react';

import { useAppSelector } from '../../stores/store';
import useDraftSave from '../../utils/hooks/useDraftSave';
import { setStorySubmission } from '../../stores/reducers/story-submission';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';
import Selections from '../../components/selections/selections';
import NavigateButtons from '../../components/navigate-buttons/navigate-buttons';

export const StorySubmission: React.FC = () => {
  const { storySubmission } = useAppSelector((state) => state.storySubmission);
  const [storyText, setStoryText] = React.useState(storySubmission || '');
  const { isLoading, isSaved } = useDraftSave(storyText, setStorySubmission);
  const isNextDisabled = storyText.trim().length < 10;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStoryText(e.target.value);
  };

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Write your story</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Please write your story below, then click "Submit Story". <br />
            Don't worry: Your story will autosave every few minutes. <br />
            You can also edit your story after submitting it.
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
          <div className='d-flex justify-content-start'>
            <SaveSpinner isLoading={isLoading} isSaved={isSaved} />
            <NavigateButtons
              backNavigation='Prompt Selection'
              isNextDisabled={isNextDisabled}
              nextButtonText='Submit Story'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySubmission;
