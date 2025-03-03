import { addStory, getAllStories, updateStory } from './apis/story-apis';
import { storySchema } from './models/battleHIVE.types';

// Function to get all stories
export const getStories = (): storySchema[] => {
  return getAllStories();
};

// Function to update a story
export const updateStoryById = (
  id: number,
  updatedProperties: Partial<storySchema>
): storySchema | null => {
  return updateStory(id, updatedProperties);
};

// Function to add a new story
export const publishStory = (newStory: storySchema) => {
  return addStory(newStory);
};
