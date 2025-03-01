import React from 'react';
// import moment from 'moment';

import HIVEStoryCard from '../../components/story-card/story-card';
import useHIVEImages from '../../utils/hooks/useHIVEImages';
import useFeedbackSubmission from '../../utils/hooks/useFeedbackSubmission';
import Modal from '../../components/modal/modal';
import PromptCard from '../../components/prompt-card/prompt-card';
import StoryView from '../story-view/story-view';
import { useIsMobile } from '../../utils/hooks/useIsMobile';

export const Arena: React.FC = () => {
  const [feedbackText, setFeedbackText] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [selectedStory, setSelectedStory] = React.useState<string>('');
  // const startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  // const endTime = moment().add(1, 'hour').format('MMMM Do YYYY, h:mm:ss a');
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
  // const logoPath = require('../../assets/images/logo/betaHIVE.png');

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

  const handleModal = (story?: string) => {
    // console.log('handleModal being called with', story);
    // setSelectedStory(story);
    setShowModal(!showModal);
  };

  const handleStorySelection = (prompt: string) => {
    setSelectedStory(prompt);
    console.log('Selected story:', selectedStory);
  };

  if (!images || images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-12 pt-4 pb-5'>
          <h2 className='bd-title'>Battle HIVE</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            className={`d-flex align-items-center justify-content-space-between ${
              isMobile ? 'flex-column' : 'flex-row m-auto'
            }`}
          >
            <div className='col-12 col-md-5 d-flex align-items-center'>
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
            <div className='col-12 col-md-5 d-flex align-items-center'>
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
          <div className='row d-flex justify-content-center mt-5'>
            <h3 className='pb-2 mt-2 mb-1'>Choose your winner</h3>
            <div className='d-flex justify-content-space-between'>
              <PromptCard
                isStorySelection
                prompt='Story 1'
                promptText='This is story 1 and its description'
                handleSelection={() => handleStorySelection('Story 1')}
              />{' '}
              <PromptCard
                isStorySelection
                prompt='Story 2'
                promptText='This is story 2 and its description'
                handleSelection={() => handleStorySelection('Story 2')}
              />
            </div>
            <button
              className='btn btn-primary mt-4 w-25'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <Modal
          onDismiss={() => handleModal('story')}
          children={
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
          }
        />
      )}
    </div>
  );
};

export default Arena;
