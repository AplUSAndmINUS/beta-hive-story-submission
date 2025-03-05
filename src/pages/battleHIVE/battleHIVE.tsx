import React from 'react';
import moment, { Moment } from 'moment';

import HIVEStoryCard from '../../components/story-card/story-card';
import Modal from '../../components/modal/modal';
import PromptCard from '../../components/prompt-card/prompt-card';
import StoryView from '../story-view/story-view';

import { useIsMobile } from '../../utils/hooks/useIsMobile';
import useHIVEImages from '../../utils/hooks/useHIVEImages';
import useFeedbackSubmission from '../../utils/hooks/useFeedbackSubmission';
import StoryAPITester from '../../services/apis/tests/story-apitester';
import FeedbackAPITester from '../../services/apis/tests/feedback-apitester';

export const BattleHIVE: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedStory, setSelectedStory] = React.useState<string>('');
  const [timer, setTimer] = React.useState<Moment | null>(null);
  const versus = require('../../assets/images/logo/versus-mode.png');

  const images = useHIVEImages();
  const isMobile = useIsMobile();
  const {
    storyNumber,
    feedbackText,
    isLoading,
    isAnonymous,
    isPositive,
    isPublic,
    isSaved,
    isSubmitDisabled,
    statusText,
    setStoryNumber,
    handleAnonymousChange,
    // handleFeedbackSubmit,
    handlePositiveChange,
    handlePublicChange,
    handleTextChange,
    handleReset,
  } = useFeedbackSubmission();

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

  const handleStorySubmit = (selectedStory: number) => {
    if (selectedStory === 1) {
      console.log('Story 1 selected');
    } else {
      console.log('Story 2 selected');
    }
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
                imageURL={images[0].imgSource}
                imgFluid={false}
                isHover
                width={isMobile ? '250' : '400'}
                height={isMobile ? '250' : '400'}
                onClick={() => {
                  handleModal('story');
                  setStoryNumber(1);
                }}
              />
            </div>
            <div className='col-12 col-md-2 d-flex justify-content-center align-items-center mt-5 mt-md-0'>
              <img
                src={versus}
                alt='Versus'
                className='img-fluid'
                style={{ width: '450px' }}
              />
            </div>
            <div className='col-12 col-md-5 d-flex align-items-center'>
              <HIVEStoryCard
                key={images[1].name.toLowerCase()}
                imageName={images[1].name.toLowerCase()}
                imageURL={images[1].imgSource}
                imgFluid={false}
                isHover
                width={isMobile ? '250' : '400'}
                height={isMobile ? '250' : '400'}
                onClick={() => {
                  handleModal('story');
                  setStoryNumber(2);
                }}
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
              onClick={() => handleStorySubmit(storyNumber)}
            >
              Submit the winner
            </button>
          </div>
        </form>

        {/* React components that test the APIs */}
        {/* <StoryAPITester /> */}
        {/* <FeedbackAPITester /> */}
      </div>

      {showModal && (
        <Modal
          onDismiss={() => handleModal('story')}
          disabled={isSubmitDisabled}
          handleReset={handleReset}
          // handleSubmit={handleSubmit}
          isFeedbackSubmit
          selectedStory={storyNumber}
          children={
            <StoryView
              storyNumber={storyNumber}
              feedbackText={feedbackText}
              isAnonymous={isAnonymous}
              isPositive={isPositive}
              isPublic={isPublic}
              onClose={() => handleModal('story')}
              handleAnonymousChange={handleAnonymousChange}
              handlePositiveChange={handlePositiveChange}
              handlePublicChange={handlePublicChange}
              handleTextChange={($e) => handleTextChange($e)}
              isLoading={isLoading}
              isSaved={isSaved}
              statusText={statusText}
              storySubmission={selectedStory}
            />
          }
        />
      )}
    </div>
  );
};

export default BattleHIVE;
