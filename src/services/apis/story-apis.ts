import axios from 'axios';

import { storySchema } from '../models/battleHIVE.types';
// import { FEEDBACK_SUBMISSIONS } from '../constants/admin-constants';
// import { STORY_SUBMISSIONS } from '../constants/betaHIVE-constants';

// define nonce wpApiSettings globally
declare const wpApiSettings: { nonce: string };

// Creaate an axios instance with the nonce token for WP backend access
export const axiosInstance = axios.create({
  baseURL: '/wp-json/custom/v1',
  headers: {
    'X-WP-Nonce': wpApiSettings.nonce,
    'Content-Type': 'application/json',
  },
});

// Function to get all stories
export const getAllStories = async () => {
  try {
    const response = await axiosInstance.get('/stories');
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get all stories: ${error}`
    );
    return [];
  }

  // testing the API code
  // return STORY_SUBMISSIONS.filter((story) => story.battleName === battleName);
};

// Function to add a new story
export const addStory = async (newStory: storySchema) => {
  try {
    const response = await axiosInstance.post('/stories', newStory);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }

  // testing the API with local code
  // STORY_SUBMISSIONS.push(newStory);
  // return newStory;
};

// Function to update a story
export const updateStory = async (
  id: string,
  updatedProperties: Partial<storySchema>
): Promise<storySchema | null> => {
  try {
    const response = await axiosInstance.put(
      `/stories/${id}`,
      updatedProperties
    );
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to update the story with ID: ${id}: ${error}`
    );
    return null;
  }

  // testing the API with local code
  // const storyIndex = STORY_SUBMISSIONS.findIndex(
  //   (story) => story.id === id.toString()
  // );
  // if (storyIndex === -1) return null;

  // // Update feedback in FEEDBACK_SUBMISSIONS if feedback is being updated
  // if (updatedProperties.feedback) {
  //   updatedProperties.feedback.forEach((feedback, index) => {
  //     const feedbackId: string =
  //       STORY_SUBMISSIONS[storyIndex].feedback[index].id;
  //     if (feedbackId) {
  //       const feedbackIndex = FEEDBACK_SUBMISSIONS.findIndex(
  //         (feedback) => feedback.id === feedbackId
  //       );
  //       if (feedbackIndex !== -1) {
  //         FEEDBACK_SUBMISSIONS[feedbackIndex] = {
  //           ...FEEDBACK_SUBMISSIONS[feedbackIndex],
  //           ...feedback,
  //         };
  //       }
  //     }
  //   });
  // }

  // STORY_SUBMISSIONS[storyIndex] = {
  //   ...STORY_SUBMISSIONS[storyIndex],
  //   ...updatedProperties,
  // };
  // return STORY_SUBMISSIONS[storyIndex];
};

// Function to delete a story
export const deleteStory = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/stories/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to update the story with ID: ${id}: ${error}`
    );
    return null;
  }
  // testing the API with local code
  // const storyIndex = STORY_SUBMISSIONS.findIndex((story) => story.id === id);
  // if (storyIndex === -1) return null;

  // return STORY_SUBMISSIONS.splice(storyIndex, 1)[0];
};

// Function to get story by id
export const getStoryById = async (id: string): Promise<storySchema | null> => {
  try {
    const response = await axiosInstance.get(`/stories/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the story with ID: ${id}: ${error}`
    );
    return null;
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.find((story) => story.id === id) || null;
};

// Function to get story by title
export const getStoryByTitle = async (
  title: string
): Promise<storySchema | null> => {
  try {
    const response = await axiosInstance.get(`/stories?title=${title}`);
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the story with title: ${title}: ${error}`
    );
    return null;
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.find((story) => story.title === title) || null;
};

// Function to get story by author
export const getStoriesByAuthor = async (
  author: string
): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(`/stories?author=${author}`);
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the stories by author: ${author}: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) => story.author === author);
};

// Function to get stories by HIVE
export const getStoriesByHIVE = async (
  HIVE: string
): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(`/stories?HIVE=${HIVE}`);
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the stories by HIVE: ${HIVE}: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) => story.HIVE === HIVE);
};

// Function to get stories by status
export const getStoriesByStatus = async (
  status: storySchema['status']
): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(`/stories?status=${status}`);
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the stories by status: ${status}: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) => story.status === status);
};

// Function to get stories by content sensitivity
export const getSensitiveStories = async (): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get('/stories?sensitive=true');
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the sensitive stories: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) => story.isContentSensitive);
};

// Function to get stories that don't have content sensitivity
export const getNonSensitiveStories = async (): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get('/stories?sensitive=false');
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the non-sensitive stories: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) => !story.isContentSensitive);
};

// Function to get stories by content warnings
export const getStoriesByContentWarnings = async (
  contentWarnings: string[]
): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(
      `/stories?contentWarnings=${contentWarnings.join(',')}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the stories by content warnings: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) =>
  //   contentWarnings.some((warning) =>
  //     story.contentWarnings.includes(warning as any)
  //   )
  // );
};

// Function to get stories by feedback and specified filters
export const getStoriesByFeedback = async (
  isPositive?: boolean,
  isPublic?: boolean,
  isAnonymous?: boolean
): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(
      `/stories?isPositive=${isPositive}&isPublic=${isPublic}&isAnonymous=${isAnonymous}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the stories by feedback: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) =>
  //   story.feedback.some((feedback) => {
  //     const matchesPositive =
  //       isPositive === undefined || feedback.isPositive === isPositive;
  //     const matchesPublic =
  //       isPublic === undefined || feedback.isPublic === isPublic;
  //     const matchesAnonymous =
  //       isAnonymous === undefined || feedback.isAnonymous === isAnonymous;
  //     return matchesPositive && matchesPublic && matchesAnonymous;
  //   })
  // );
};

// Function to get stories by number of specified losses
export const getStoriesByLosses = async (losses: number): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(`/stories?losses=${losses}`);
    return response.data;
  } catch (error) {
    console.error(`The following error happened while trying to get the stories by losses: ${error}`);
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) => story.losses === losses);
};

// Function to get stories with most number of wins
export const getWinningStories = async (
  count: number
): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(
      `/stories?sortBy=wins&order=desc&limit=${count}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the winning stories: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.sort((a, b) => b.wins - a.wins).slice(0, count);
};

// Function to get stories with most number of losses
export const getLosingStories = async (
  count: number
): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(
      `/stories?sortBy=losses&order=desc&limit=${count}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the losing stories: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) => story.losses >= count);
};

// Function to get final two stories that combat against one another in the final round
export const getFinalStories = async (): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(
      '/stories?sortBy=wins&order=desc&limit=2'
    );
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the final stories: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.sort((a, b) => b.wins - a.wins).slice(0, 2);
};

// Function to get stories that are still in the running
export const getRunningStories = async (
  count: number
): Promise<storySchema[]> => {
  try {
    const response = await axiosInstance.get(
      `/stories?running=true&limit=${count}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the running stories: ${error}`
    );
    return [];
  }

  // testing the API with local code
  // return STORY_SUBMISSIONS.filter((story) => story.wins - story.losses < count);
};

// Function to get top winner of the competition
export const getTopWinner = async (): Promise<storySchema | null> => {
  try {
    const response = await axiosInstance.get(
      '/stories?sortBy=wins&order=desc&limit=1'
    );
    return response.data[0] || null;
  } catch (error) {
    console.error(
      `The following error happened while trying to get the top winner: ${error}`
    );
    return null;
  }

  // testing the API with local code
  // return getWinningStories(1)[0] || null;
};
