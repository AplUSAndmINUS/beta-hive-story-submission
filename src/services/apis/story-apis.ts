import { storySchema } from '../models/battleHIVE.types';
import { FEEDBACK_SUBMISSIONS } from '../constants/admin-constants';
import { STORY_SUBMISSIONS } from '../constants/betaHIVE-constants';

// Function to get all stories
export const getAllStories = (): storySchema[] => {
  return STORY_SUBMISSIONS;
};

// Function to update a story
export const updateStory = (
  id: number,
  updatedProperties: Partial<storySchema>
): storySchema | null => {
  const storyIndex = STORY_SUBMISSIONS.findIndex((story) => story.id === id);
  if (storyIndex === -1) return null;

  // Update feedback in FEEDBACK_SUBMISSIONS if feedback is being updated
  if (updatedProperties.feedback) {
    updatedProperties.feedback.forEach((feedback, index) => {
      const feedbackId = STORY_SUBMISSIONS[storyIndex].feedback[index].id;
      if (feedbackId) {
        FEEDBACK_SUBMISSIONS[feedbackId] = {
          ...FEEDBACK_SUBMISSIONS[feedbackId],
          ...feedback,
        };
      }
    });
  }

  STORY_SUBMISSIONS[storyIndex] = {
    ...STORY_SUBMISSIONS[storyIndex],
    ...updatedProperties,
  };
  return STORY_SUBMISSIONS[storyIndex];
};

// Function to add a new story
export const addStory = (newStory: storySchema) => {
  STORY_SUBMISSIONS.push(newStory);
  return newStory;
};

// Function to delete a story
export const deleteStory = (id: number) => {
  const storyIndex = STORY_SUBMISSIONS.findIndex((story) => story.id === id);
  if (storyIndex === -1) return null;

  return STORY_SUBMISSIONS.splice(storyIndex, 1)[0];
};

// Function to get story by id
export const getStoryById = (id: number): storySchema | null => {
  return STORY_SUBMISSIONS.find((story) => story.id === id) || null;
};

// Function to get story by title
export const getStoryByTitle = (title: string): storySchema | null => {
  return STORY_SUBMISSIONS.find((story) => story.title === title) || null;
};

// Function to get story by author
export const getStoriesByAuthor = (author: string): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) => story.author === author);
};

// Function to get stories by HIVE
export const getStoriesByHIVE = (HIVE: string): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) => story.HIVE === HIVE);
};

// Function to get stories by status
export const getStoriesByStatus = (status: storySchema['status']): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) => story.status === status);
};

// Function to get stories by content sensitivity
export const getSensitiveStories = (): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) => story.isContentSensitive);
};

// Function to get stories that don't have content sensitivity
export const getNonSensitiveStories = (): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) => !story.isContentSensitive);
};

// Function to get stories by content warnings
export const getStoriesByContentWarnings = (
  contentWarnings: (keyof storySchema['contentWarnings'])[]
): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) =>
    contentWarnings.some((warning) => story.contentWarnings.includes(warning as any))
  );
};

// Function to get stories by feedback and specified filters
export const getStoriesByFeedback = (
  isPositive?: boolean,
  isPublic?: boolean,
  isAnonymous?: boolean
): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) =>
    story.feedback.some((feedback) => {
      const matchesPositive = isPositive === undefined || feedback.isPositive === isPositive;
      const matchesPublic = isPublic === undefined || feedback.isPublic === isPublic;
      const matchesAnonymous = isAnonymous === undefined || feedback.isAnonymous === isAnonymous;
      return matchesPositive && matchesPublic && matchesAnonymous;
    })
  );
};

// Function to get stories by number of specified losses
export const getStoriesByLosses = (losses: number): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) => story.losses === losses);
};

// Function to get stories with most number of wins
export const getWinningStories = (count: number): storySchema[] => {
  return STORY_SUBMISSIONS.sort((a, b) => b.wins - a.wins).slice(0, count);
};

// Function to get stories with most number of losses
export const getLosingStories = (count: number): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) => story.losses >= count);
};

// Function to get final two stories that combat against one another in the final round
export const getFinalStories = (): storySchema[] => {
  return STORY_SUBMISSIONS.sort((a, b) => b.wins - a.wins).slice(0, 2);
};

// Function to get stories that are still in the running
export const getRunningStories = (count: number): storySchema[] => {
  return STORY_SUBMISSIONS.filter((story) => story.wins - story.losses < count);
};