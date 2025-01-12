import React from 'react';
import moment from 'moment';

import HIVEGenreSquare from '../../components/hive-genre/hive-genre-square';
import useHIVEImages from '../../utils/hooks/useHIVEImages';
import useDraftSave from '../../utils/hooks/useDraftSave';

export const Arena: React.FC = () => {
  const [feedbackText, setFeedbackText] = React.useState('');
  const startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const endTime = moment().add(1, 'hour').format('MMMM Do YYYY, h:mm:ss a');
  const images = useHIVEImages();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackText(e.target.value);
  };

  const handleReset = () => {
    setFeedbackText('');
  }

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault(); // Prevent default form submission behavior
      if (!storySubmission || storySubmission.trim() === '') {
        dispatch(setStorySubmission(storyText));
      }
      setIsSaved(false);
  
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
        const response = await fetch(
          'https://your-wordpress-site.com/wp-json/beta-hive/v1/submit-story', // update with actual URL
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(storyData),
          }
        );
  
        if (!response.ok) {
          throw new Error('Failed to submit story');
        }
  
        const result = await response.json();
        console.log('Story submitted successfully:', result);
        navigate('/confirmation');
      } catch (error) {
        console.error('Error submitting story:', error);
      }
    };

  return (
    <div className='container'>
      <div className='row'>
        <p className='text-muted'>Start Time: {startTime}</p>
        <h1 className='bd-title'>Current Arena</h1>
        <p className='text-muted'>End Time: {endTime}</p>
      </div>
      <div className='row d-flex justify-content-center'>
        <h2 className='bd-title'>Versus Mode</h2>
        <div className='col-6'>
          <HIVEGenreSquare
            key={images[0].name.toLowerCase()}
            imageName={images[0].name.toLowerCase()}
            imageURL={images[0].url}
            setGenreSelection={() => {}}
          />
        </div>
        <div className='col-6'>
          <HIVEGenreSquare
            key={images[1].name.toLowerCase()}
            imageName={images[1].name.toLowerCase()}
            imageURL={images[1].url}
            setGenreSelection={() => {}}
          />
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <form>
          <textarea
            autoFocus
            className='form-control ml-2'
            rows={4}
            placeholder='Enter your story here'
            value={storyText}
            onChange={handleFeedbackChange}
          ></textarea>
        </form>        
      </div>
    </div>
  );
};

export default Arena;
