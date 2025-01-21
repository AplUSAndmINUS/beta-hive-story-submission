import React from 'react';

import { useAppDispatch, useAppSelector } from '../../stores/store';
import useDraftSave from '../../utils/hooks/useDraftSave';
import useNavigation from '../../utils/hooks/useNavigation';
import { setStorySubmission } from '../../stores/reducers/story-submission';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';
import Selections from '../../components/selections/selections';

export const StorySubmission: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation();
  const {
    characterSelection,
    genreSelection,
    settingSelection,
    storySubmission,
  } = useAppSelector((state) => state.storySubmission);

  const [storyText, setStoryText] = React.useState(storySubmission);
  const { isLoading, isSaved } = useDraftSave(storyText, setStorySubmission);
  const isSubmitDisabled =
    !characterSelection ||
    !genreSelection ||
    !settingSelection ||
    storyText.trim().length < 10;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStoryText(e.target.value);
  };

  const handleReset = () => {
    setStoryText('');
  };

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
      story: storyText,
      date: new Date().toISOString(),
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
      navigate('/confirmation');
    } catch (error) {
      console.error('Error submitting story:', error);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col'>
          <h1 className='bd-title pb-2 mt-4'>Write your story</h1>
          <p className='text-muted pb-2 mt-2 fs-5'>
            Please write your story below. <br />
            Don't worry: Your story will autosave every few minutes.
          </p>
        </div>
        <Selections />
      </div>
      <div className='row'>
        <form onReset={handleReset} onSubmit={handleSubmit}>
          <textarea
            autoFocus
            className='form-control ml-2'
            rows={10}
            placeholder='Enter your story here'
            value={storyText}
            onChange={handleChange}
          ></textarea>
          <div className='d-flex justify-content-between w-100'>
            <SaveSpinner isLoading={isLoading} isSaved={isSaved} />
            <div className='d-flex justify-content-between'>
              <button
                type='submit'
                className='btn btn-primary mt-4 mr-4'
                disabled={isSubmitDisabled}
              >
                Submit
              </button>
              &nbsp;&nbsp;
              <button type='reset' className='btn btn-outline-danger mt-4'>
                Clear Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StorySubmission;
