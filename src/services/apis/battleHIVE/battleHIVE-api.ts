import { storySchema } from '../../models/battleHIVE.types';
import { STORY_SUBMISSIONS } from '../../constants/betaHIVE-constants';

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
