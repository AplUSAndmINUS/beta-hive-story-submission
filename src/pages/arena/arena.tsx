import React from 'react';
import moment from 'moment';

import HIVEStoryCard from '../../components/story-card/story-card';
import useHIVEImages from '../../utils/hooks/useHIVEImages';
import useFeedbackSubmission from '../../utils/hooks/useFeedbackSubmission';
import SaveSpinner from '../../components/draft-save-spinner/draft-save-spinner';
import { useIsMobile } from '../../utils/hooks/useIsMobile';

export const Arena: React.FC = () => {
  const [feedbackTextOne, setFeedbackTextOne] = React.useState('');
  const [feedbackTextTwo, setFeedbackTextTwo] = React.useState('');
  const [statusText, setStatusText] = React.useState('');
  const startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const endTime = moment().add(1, 'hour').format('MMMM Do YYYY, h:mm:ss a');
  const images = useHIVEImages();
  const isMobile = useIsMobile();
  const { handleChange, handleReset, handleSubmit, isLoading, isSaved } =
    useFeedbackSubmission(
      feedbackTextOne,
      setFeedbackTextOne,
      feedbackTextTwo,
      setFeedbackTextTwo
    );

  if (!images || images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='bd-title'>Current Arena</h1>
        <p className='text-muted'>Start Time: {startTime}</p>
        <p className='text-muted'>End Time: {endTime}</p>
      </div>
      <form>
        <div className='row d-flex justify-content-center'>
          <h2 className='bd-title'>Versus Mode</h2>
          <div
            className={`d-flex align-items-flex-start justify-content-space-around ${
              isMobile ? 'flex-column' : 'flex-row'
            }`}
          >
            <div className='col-6 d-flex flex-column d-md-block'>
              <HIVEStoryCard
                key={images[0].name.toLowerCase()}
                imageName={images[0].name.toLowerCase()}
                imageURL={images[0].url}
                imgFluid={false}
                isHover
                width={isMobile ? '250' : '400'}
                height={isMobile ? '250' : '400'}
                setGenreSelection={() => {}}
              />
              <textarea
                autoFocus
                className='form-control ml-2'
                rows={4}
                placeholder='Submit your feedback on this story here'
                value={feedbackTextOne}
                required
                onChange={($e) => handleChange($e, 1)}
              />
              <SaveSpinner
                isLoading={isLoading}
                isSaved={isSaved}
                innerText={statusText}
              />
            </div>
            <h3 className='bd-subtitle p-4 mt-5'>vs.</h3>
            <div className='col-6 d-flex flex-column d-md-block'>
              <HIVEStoryCard
                key={images[1].name.toLowerCase()}
                imageName={images[1].name.toLowerCase()}
                imageURL={images[1].url}
                imgFluid={false}
                isHover
                width={isMobile ? '250' : '400'}
                height={isMobile ? '250' : '400'}
                setGenreSelection={() => {}}
              />
              <textarea
                autoFocus
                className='form-control ml-2'
                rows={4}
                placeholder='Submit your feedback on this story here'
                value={feedbackTextTwo}
                required
                onChange={($e) => handleChange($e, 2)}
              />
              <SaveSpinner
                isLoading={isLoading}
                isSaved={isSaved}
                innerText={statusText}
              />
              <div className='row d-flex justify-content-center align-items-flex-end w-auto'>
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
                  className='btn btn-outline-danger mt-4'
                  onClick={handleReset}
                  disabled={isLoading}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Arena;
