import { axiosInstance } from './story-apis';

import { feedbackSchema } from '../models/battleHIVE.types';
// import { FEEDBACK_SUBMISSIONS } from '../constants/admin-constants';

// Function to get all feedback
export const getAllFeedback = async (): Promise<feedbackSchema[] | null> => {
  try {
    const response = await axiosInstance.get('/feedback');
    return response.data;
  } catch (error) {
    console.error('Error getting all feedback:', error);
    return [];
  }
  
  // Local API Testing to get all feedback
  // return FEEDBACK_SUBMISSIONS;
};

// Function to update a feedback
export const updateFeedback = async (
  id: string,
  updatedProperties: Partial<feedbackSchema>
): Promise<feedbackSchema | null> => {
  try {
    const response = await axiosInstance.put(`/feedback/${id}`, updatedProperties);
    return response.data;
  } catch (error) {
    console.error('Error updating feedback:', error);
    return null;
  };

  // Local API Testing to update feedback by id
  // const feedbackIndex = FEEDBACK_SUBMISSIONS.findIndex(
  //   (feedback) => feedback.id === id.toString()
  // );
  // if (feedbackIndex === -1) return null;

  // FEEDBACK_SUBMISSIONS[feedbackIndex] = {
  //   ...FEEDBACK_SUBMISSIONS[feedbackIndex],
  //   ...updatedProperties,
  // };
  // return FEEDBACK_SUBMISSIONS[feedbackIndex];
};

// Function to update feedback by story title
export const updateFeedbackByStory = async (
  story: string,
  updatedProperties: Partial<feedbackSchema>
): Promise<feedbackSchema | null> => {
  try {
    const response = await axiosInstance.put(`/feedback/story/${story}`, updatedProperties);
    return response.data;
  } catch (error) {
    console.error('Error updating feedback by story:', error);
    return null;
  };

  // Local API Testing to update feedback by story title
  // const feedbackIndex = FEEDBACK_SUBMISSIONS.findIndex(
  //   (feedback) => feedback.story === story
  // );
  // if (feedbackIndex === -1) return null;

  // FEEDBACK_SUBMISSIONS[feedbackIndex] = {
  //   ...FEEDBACK_SUBMISSIONS[feedbackIndex],
  //   ...updatedProperties,
  // };
  // return FEEDBACK_SUBMISSIONS[feedbackIndex];
};

// Function to add a new feedback
export const addFeedback = async (newFeedback: feedbackSchema) => {
  try {
    const response = await axiosInstance.post('/feedback', newFeedback);
    return response.data;
  } catch (error) {
    console.error('Error adding feedback:', error);
    return null;
  };

  // Local API Testing to add a new feedback
  // FEEDBACK_SUBMISSIONS.push(newFeedback);
  // return newFeedback;
};

// Function to delete a feedback
export const deleteFeedback = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/feedback/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting feedback:', error);
    return null;
  };

  // Local API Testing to delete feedback by id
  // const feedbackIndex = FEEDBACK_SUBMISSIONS.findIndex(
  //   (feedback) => feedback.id === id.toString()
  // );
  // if (feedbackIndex === -1) return null;

  // return FEEDBACK_SUBMISSIONS.splice(feedbackIndex, 1)[0];
};

// Function to get feedback by id
export const getFeedbackById = async (id: string): Promise<feedbackSchema | null> => {
  try {
    const response = await axiosInstance.get(`/feedback/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by ID:', error);
    return null;
  };

  // Local API Testing to get feedback by id
  // return FEEDBACK_SUBMISSIONS.find((feedback) => feedback.id === id.toString()) || null;
};

// Function to get feedback by story
export const getFeedbackByStoryId = async (story: string): Promise<feedbackSchema[] | null> => {
  try {
    const response = await axiosInstance.get(`/feedback/story/${story}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by Story ID:', error);
    return [];
  };

  // Local API Testing to get feedback by story
  // return FEEDBACK_SUBMISSIONS.filter((feedback) => feedback.story === story);
};

// Local API Testing to get feedback by story name
export const getFeedbackByStoryName = async (story: string): Promise<feedbackSchema[] | null> => {
  try {
    const response = await axiosInstance.get(`/feedback/story/${story}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by Story Name:', error);
    return [];
  };

  // Local API Testing to get feedback by story name
  // return FEEDBACK_SUBMISSIONS.filter((feedback) => feedback.story === story);
};

// Function to get feedback by author
export const getFeedbackByAuthor = async (author: string): Promise<feedbackSchema[] | null> => {
  try {
    const response = await axiosInstance.get(`/feedback/author/${author}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by Author:', error);
    return [];
  };

  // Local API Testing to get feedback by author
  // return FEEDBACK_SUBMISSIONS.filter(
  //   (feedback) => feedback.feedbackAuthor === author
  // );
};

// Function to get feedback by isPositive
export const getFeedbackByIsPositive = async (
  isPositive: boolean
): Promise<feedbackSchema[] | null> => {
  try {
    const response = await axiosInstance.get(`/feedback/positive/${isPositive}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by isPositive:', error);
    return [];
  };

  // Local API Testing to get feedback by isPositive
  // return FEEDBACK_SUBMISSIONS.filter(
  //   (feedback) => feedback.isPositive === isPositive
  // );
};

// Function to get feedback by isPublic
export const getFeedbackByIsPublic = async (isPublic: boolean): Promise<feedbackSchema[] | null> => {
  try {
    const response = await axiosInstance.get(`/feedback/public/${isPublic}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by isPublic:', error);
    return [];
  };

  // Local API Testing to get feedback by isPublic
  // return FEEDBACK_SUBMISSIONS.filter(
  //   (feedback) => feedback.isPublic === isPublic
  // );
};

// Function to get feedback by isAnonymous
export const getFeedbackByIsAnonymous = async (
  isAnonymous: boolean
): Promise<feedbackSchema[] | null> => {
  try {
    const response = await axiosInstance.get(`/feedback/anonymous/${isAnonymous}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by isAnonymous:', error);
    return [];
  };

  // Local API Testing to get feedback by isAnonymous
  // return FEEDBACK_SUBMISSIONS.filter(
  //   (feedback) => feedback.isAnonymous === isAnonymous
  // );
};

// Function to get feedback by title
export const getFeedbackByTitle = async (title: string): Promise<feedbackSchema[] | null> => {
  try {
    const response = await axiosInstance.get(`/feedback/title/${title}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by title:', error);
    return [];
  };

  // Local API Testing to get feedback by title
  // return FEEDBACK_SUBMISSIONS.filter((feedback) => feedback.title === title);
};