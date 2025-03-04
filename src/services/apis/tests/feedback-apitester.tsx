import React from 'react';

import {
  getAllFeedback,
  addFeedback,
  getFeedbackById,
  getFeedbackByStory,
  getFeedbackByAuthor,
  updateFeedback,
  deleteFeedback,
  getFeedbackByStoryName,
  getFeedbackByStoryId,
  getFeedbackByIsAnonymous,
  getFeedbackByIsPositive,
  getFeedbackByIsPublic,
  getFeedbackByTitle,
} from '../feedback-apis';

import { feedbackSchema } from '../../models/battleHIVE.types';

export const FeedbackAPITester: React.FC = () => {
  React.useEffect(() => {
    // testing GET APIs
    console.log('All Feedback:', getAllFeedback());

    const testFeedbackId = '1'; // Replace with an actual feedback ID from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback with ID ${testFeedbackId}:`,
      getFeedbackById(testFeedbackId)
    );

    const testStory = 'Story 1'; // Replace with an actual story name from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback by Story ${testStory}:`,
      getFeedbackByStory(testStory)
    );

    const testAuthor = 'Author 1'; // Replace with an actual author name from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback by Author ${testAuthor}:`,
      getFeedbackByAuthor(testAuthor)
    );

    const testIsPositive = true; // Replace with an actual isPositive value from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback by isPositive ${testIsPositive}:`,
      getFeedbackByIsPositive(testIsPositive)
    );

    const testIsPublic = true; // Replace with an actual isPublic value from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback by isPublic ${testIsPublic}:`,
      getFeedbackByIsPublic(testIsPublic)
    );

    const testIsAnonymous = true; // Replace with an actual isAnonymous value from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback by isAnonymous ${testIsAnonymous}:`,
      getFeedbackByIsAnonymous(testIsAnonymous)
    );

    const testStoryName = 'Story 1'; // Replace with an actual story name from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback by Story Name ${testStoryName}:`,
      getFeedbackByStoryName(testStoryName)
    );

    const testStoryId = '9'; // Replace with an actual story ID from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback by Story ID ${testStoryId}:`,
      getFeedbackByStoryId(testStoryId)
    );

    const testTitle = 'Feedback 1'; // Replace with an actual title from FEEDBACK_SUBMISSIONS
    console.log(
      `Feedback by Title ${testTitle}:`,
      getFeedbackByTitle(testTitle)
    );

    // testing POST APIs
    const newFeedback: feedbackSchema = {
      id: '40',
      title: 'Feedback 40',
      story: 'Story 3',
      feedbackAuthor: 'Author 3',
      feedback: 'Great story with additional feedback 40!',
      isPositive: true,
      isPublic: true,
      isAnonymous: false,
    };
    console.log('Added Feedback:', addFeedback(newFeedback));
    console.log('Feedback after addition:', getAllFeedback());

    // testing PUT APIs
    const updatedFeedback: Partial<feedbackSchema> = {
      id: '9',
      title: 'Updated Feedback 20',
      story: 'Story 3',
      feedbackAuthor: 'Author 3',
      feedback:
        'Great story! Loved it! Sorry that I made a mistake and had to fix this...',
    };
    if (updatedFeedback.id) {
      console.log(
        'Updated Feedback:',
        updateFeedback(updatedFeedback.id, updatedFeedback)
      );
    } else {
      console.error('Updated feedback ID is undefined');
    }
    console.log('Feedback after update:', getAllFeedback());

    // testing DELETE APIs
    console.log('Deleted Feedback:', deleteFeedback('7'));
    console.log('Feedback after deletion', getAllFeedback());
  }, []);

  return <div>Feedback API Tester</div>;
};

export default FeedbackAPITester;
