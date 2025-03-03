import { feedbackSchema } from '../models/battleHIVE.types';
import { FEEDBACK_SUBMISSIONS } from '../constants/admin-constants';

/*** THIS WILL BE UPDATED LATER ONCE WE HAVE THE PHP WordPress READY ***/

// Function to get all feedback
export const getAllFeedback = (): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS;
};

// Function to update a feedback
export const updateFeedback = (
  id: number,
  updatedProperties: Partial<feedbackSchema>
): feedbackSchema | null => {
  const feedbackIndex = FEEDBACK_SUBMISSIONS.findIndex(
    (feedback) => feedback.id === id
  );
  if (feedbackIndex === -1) return null;

  FEEDBACK_SUBMISSIONS[feedbackIndex] = {
    ...FEEDBACK_SUBMISSIONS[feedbackIndex],
    ...updatedProperties,
  };
  return FEEDBACK_SUBMISSIONS[feedbackIndex];
};

// Function to update feedback by story title
export const updateFeedbackByStory = (
  story: string,
  updatedProperties: Partial<feedbackSchema>
): feedbackSchema | null => {
  const feedbackIndex = FEEDBACK_SUBMISSIONS.findIndex(
    (feedback) => feedback.story === story
  );
  if (feedbackIndex === -1) return null;

  FEEDBACK_SUBMISSIONS[feedbackIndex] = {
    ...FEEDBACK_SUBMISSIONS[feedbackIndex],
    ...updatedProperties,
  };
  return FEEDBACK_SUBMISSIONS[feedbackIndex];
};

// Function to add a new feedback
export const addFeedback = (newFeedback: feedbackSchema) => {
  FEEDBACK_SUBMISSIONS.push(newFeedback);
  return newFeedback;
};

// Function to delete a feedback
export const deleteFeedback = (id: number) => {
  const feedbackIndex = FEEDBACK_SUBMISSIONS.findIndex(
    (feedback) => feedback.id === id
  );
  if (feedbackIndex === -1) return null;

  return FEEDBACK_SUBMISSIONS.splice(feedbackIndex, 1)[0];
};

// Function to get feedback by id
export const getFeedbackById = (id: number): feedbackSchema | null => {
  return FEEDBACK_SUBMISSIONS.find((feedback) => feedback.id === id) || null;
};

// Function to get feedback by story
export const getFeedbackByStoryId = (story: string): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter((feedback) => feedback.story === story);
};

// Function to get feedback by story name
export const getFeedbackByStoryName = (story: string): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter((feedback) => feedback.story === story);
};

// Function to get feedback by author
export const getFeedbackByAuthor = (author: string): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter(
    (feedback) => feedback.feedbackAuthor === author
  );
};

// Function to get feedback by isPositive
export const getFeedbackByIsPositive = (
  isPositive: boolean
): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter(
    (feedback) => feedback.isPositive === isPositive
  );
};

// Function to get feedback by isPublic
export const getFeedbackByIsPublic = (isPublic: boolean): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter(
    (feedback) => feedback.isPublic === isPublic
  );
};

// Function to get feedback by isAnonymous
export const getFeedbackByIsAnonymous = (
  isAnonymous: boolean
): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter(
    (feedback) => feedback.isAnonymous === isAnonymous
  );
};

// Function to get feedback by title
export const getFeedbackByTitle = (title: string): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter((feedback) => feedback.title === title);
};

// Function to get feedback by story
export const getFeedbackByStory = (story: string): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter((feedback) => feedback.story === story);
};

// Function to get feedback by feedbackAuthor
export const getFeedbackByFeedbackAuthor = (
  feedbackAuthor: string
): feedbackSchema[] => {
  return FEEDBACK_SUBMISSIONS.filter(
    (feedback) => feedback.feedbackAuthor === feedbackAuthor
  );
};
