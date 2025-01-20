import React from 'react';
import moment from 'moment';

import HIVEStoryCard from '../../components/story-card/story-card';
import useHIVEImages from '../../utils/hooks/useHIVEImages';
import useFeedbackSubmission from '../../utils/hooks/useFeedbackSubmission';
import StoryView from '../story-view/story-view';
import { useIsMobile } from '../../utils/hooks/useIsMobile';

export const Arena: React.FC = () => {
  const [feedbackText, setFeedbackText] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [selectedStory, setSelectedStory] = React.useState<string | null>(null);
  const startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const endTime = moment().add(1, 'hour').format('MMMM Do YYYY, h:mm:ss a');
  const images = useHIVEImages();
  const isMobile = useIsMobile();
  const {
    handleChange,
    handleReset,
    handleSubmit,
    isLoading,
    isSaved,
    isSubmitDisabled,
    statusText,
  } = useFeedbackSubmission(feedbackText, setFeedbackText);
  const logoPath = require('../../assets/images/logo/betaHIVE.png');

  const handleModal = (story?: string) => {
    console.log('handleModal being called with', story);
    // setSelectedStory(story);
    setShowModal(!showModal);
  };

  React.useEffect(() => {
    const handleKeyDown = ($e: KeyboardEvent) => {
      if ($e.key === 'Escape') {
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!images || images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center pt-4 pb-4 w-50 h-50 m-auto'>
        <img src={logoPath} alt='Beta HIVE' />
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-12 pt-4 pb-5'>
          <h2 className='bd-title'>Versus Mode</h2>
        </div>
        <form>
          <div
            className={`d-flex align-items-flex-start justify-content-space-between ${
              isMobile ? 'flex-column' : 'flex-row mb-auto'
            }`}
          >
            <div className='col-12 col-md-4 d-flex flex-column align-items-center'>
              <HIVEStoryCard
                key={images[0].name.toLowerCase()}
                imageName={images[0].name.toLowerCase()}
                imageURL={images[0].url}
                imgFluid={false}
                isHover
                width={isMobile ? '250' : '400'}
                height={isMobile ? '250' : '400'}
                onClick={() => handleModal('story')}
              />
            </div>
            <div className='col-12 col-md-2 d-flex justify-content-center align-items-center mt-5 mt-md-0'>
              <h3 className='bd-subtitle text-center'>vs.</h3>
            </div>
            <div className='col-12 col-md-4 d-flex flex-column align-items-center'>
              <HIVEStoryCard
                key={images[1].name.toLowerCase()}
                imageName={images[1].name.toLowerCase()}
                imageURL={images[1].url}
                imgFluid={false}
                isHover
                width={isMobile ? '250' : '400'}
                height={isMobile ? '250' : '400'}
                onClick={() => handleModal('story')}
              />
            </div>
          </div>
        </form>
      </div>

      {showModal && (
        <>
          <div
            className={`modal ${isMobile && 'modal-fullscreen'} fade show`}
            style={{ display: 'block' }}
            onClick={() => setShowModal(false)}
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-body'>
                  <StoryView
                    onClose={() => handleModal('story')}
                    handleChange={handleChange}
                    handleReset={handleReset}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    isSaved={isSaved}
                    isSubmitDisabled={isSubmitDisabled}
                    statusText={statusText}
                    feedbackText={feedbackText}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='modal-backdrop fade show'></div>
        </>
      )}
    </div>
  );
};

export default Arena;
