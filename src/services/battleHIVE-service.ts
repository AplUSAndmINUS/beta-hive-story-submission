import {
  getAllStories,
  getFinalStories,
  getStoryById,
  getNonSensitiveStories,
  getRunningStories,
  getWinningStories,
  updateStory,
} from './apis/story-apis';
import { storySchema } from './models/battleHIVE.types';

// Function to get all stories
export const getStories = (): storySchema[] => {
  return getAllStories();
};

// Function to get story by id
export const getStoryByNumber = (id: number): storySchema | null => {
  return getStoryById(id);
};

// Function to get non-sensitive content stories
export const getNonSensitiveContentStories = (): storySchema[] => {
  return getNonSensitiveStories();
};

// Function to update a story
export const updateStoryById = (
  id: number,
  updatedProperties: Partial<storySchema>
): storySchema | null => {
  return updateStory(id, updatedProperties);
};

// Function to get final winning stories
export const getWinners = (count: number): storySchema[] => {
  return getWinningStories(count);
};

// function to get stories still in the competition
export const getCompetitionStories = (count: number): storySchema[] => {
  return getRunningStories(count);
};

// function to get the final two stories for the final round
export const getFinalTwoStories = (): storySchema[] => {
  return getFinalStories();
};
