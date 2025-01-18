import React from 'react';
import moment from 'moment';

import HIVEGenreSquare from '../../components/hive-genre/hive-genre-square';
import useHIVEImages from '../../utils/hooks/useHIVEImages';
import useFeedbackSubmission from '../../utils/hooks/useFeedbackSubmission';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';

export const Arena: React.FC = () => {
  const [feedbackTextOne, setFeedbackTextOne] = React.useState('');
  const [feedbackTextTwo, setFeedbackTextTwo] = React.useState('');
  const startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const endTime = moment().add(1, 'hour').format('MMMM Do YYYY, h:mm:ss a');
  const images = useHIVEImages();
  const { handleChange, handleReset, handleSubmit, isLoading, isSaved } =
    useFeedbackSubmission(
      feedbackTextOne,
      setFeedbackTextOne,
      feedbackTextTwo,
      setFeedbackTextTwo
    );

  return (
    <div className='container'>
      <div className='row'>
        <p className='text-muted'>Start Time: {startTime}</p>
        <h1 className='bd-title'>Current Arena</h1>
        <p className='text-muted'>End Time: {endTime}</p>
      </div>
      <div className='row d-flex justify-content-center'>
        <form>
          <h2 className='bd-title'>Versus Mode</h2>
          <div className='col-6 d-flex flex-column'>
            <HIVEGenreSquare
              key={images[0].name.toLowerCase()}
              imageName={images[0].name.toLowerCase()}
              imageURL={images[0].url}
              setGenreSelection={() => {}}
            />
            <textarea
              autoFocus
              className='form-control ml-2'
              rows={4}
              placeholder='Enter your story here'
              value={feedbackTextOne}
              required
              onChange={($e) => handleChange($e, 1)}
            ></textarea>
          </div>
          <h3 className='bd-subtitle'>vs.</h3>
          <div className='col-6'>
            <HIVEGenreSquare
              key={images[1].name.toLowerCase()}
              imageName={images[1].name.toLowerCase()}
              imageURL={images[1].url}
              setGenreSelection={() => {}}
            />
            <textarea
              autoFocus
              className='form-control ml-2'
              rows={4}
              placeholder='Enter your story here'
              value={feedbackTextTwo}
              required
              onChange={($e) => handleChange($e, 2)}
            />
          </div>
          <SaveSpinner isLoading={isLoading} isSaved={isSaved} />
          <button
            type='submit'
            className='btn btn-primary mt-4'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Submit
          </button>
          <button
            type='reset'
            className='btn btn-primary mt-4'
            onClick={handleReset}
            disabled={isLoading}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Arena;
