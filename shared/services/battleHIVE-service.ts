import { addFeedback, getAllFeedback } from './apis/feedback-apis';
import {
  getAllStories,
  getFinalStories,
  getLosingStories,
  getNonSensitiveStories,
  getRunningStories,
  getStoryById,
  getTopWinner,
  getWinningStories,
  updateStory,
} from './apis/story-apis';
import { feedbackSchema, storySchema } from './models/battleHIVE.types';

// Function to get all stories
export const getStories = (): storySchema[] => {
  return getAllStories();
};

// Function to get story by id
export const getStoryByNumber = (id: string): storySchema | null => {
  return getStoryById(id);
};

// Function to get non-sensitive content stories
export const getNonSensitiveContentStories = (): storySchema[] => {
  return getNonSensitiveStories();
};

// Function to update a story
export const updateStoryById = (
  id: string,
  updatedProperties: Partial<storySchema>
): storySchema | null => {
  return updateStory(id, updatedProperties);
};

export const getTwoRandomNums = () => {
  let storyOne = Math.floor(
    Math.random() * getAllStories().length
  );
  let storyTwo = Math.floor(
    Math.random() * getAllStories().length
  );
  while (storyOne === storyTwo) {
    storyTwo = Math.floor(
      Math.random() * getAllStories().length
    );
  }

  return { storyOne, storyTwo };
};

// Function to get final winning stories
export const getWinners = (count: number): storySchema[] => {
  return getWinningStories(count);
};

// function to get losing stories
export const getLosers = (lossesCount: number): storySchema[] => {
  return getLosingStories(lossesCount);
};

// function to get stories still in the competition
export const getCompetitionStories = (count: number): storySchema[] => {
  return getRunningStories(count);
};

// function to get the final two stories for the final round
export const getFinalTwoStories = (): storySchema[] => {
  return getFinalStories();
};

// function to get two random stories for versus mode
// export const getTwoRandomStories = (previousStories: storySchema[] = []): { storyOne: storySchema; storyTwo: storySchema } => {
//   const allStories = getAllStories('micro-fiction');
//   let { storyOne, storyTwo } = getTwoRandomNums();

//   // Ensure the new stories are different from the previous stories
//   while (
//     previousStories.includes(allStories[storyOne]) ||
//     previousStories.includes(allStories[storyTwo]) ||
//     storyOne === storyTwo
//   ) {
//     ({ storyOne, storyTwo } = getTwoRandomNums());
//   }

//   return {
//     storyOne: getStoryById(storyOne) || allStories[0],
//     storyTwo: getStoryById(storyTwo) || allStories[1],
//   };
// };

// function to get the top winner
export const getTheWinner = (): storySchema | null => {
  return getTopWinner();
};

// function to get all feedback
export const getFeedback = (): feedbackSchema[] => {
  return getAllFeedback();
};

// function to add feedback to a story
export const addFeedbackToStory = (
  id: string,
  title: string,
  story: string,
  feedbackAuthor: string,
  feedback: Pick<
    feedbackSchema,
    'feedback' | 'isPublic' | 'isPositive' | 'isAnonymous'
  >
): storySchema | null => {
  // Create a new feedback entry
  const newFeedback: feedbackSchema = {
    id: Date.now().toString(), // Generate a unique ID based on the current timestamp
    title: title,
    story: story,
    feedbackAuthor: feedbackAuthor, // Provide a default author or get it from the feedback input
    ...feedback,
  };

  // Add the new feedback entry using the addFeedback API
  addFeedback(newFeedback);

  // Update the story's feedback array to include the new feedback entry
  const newStory = updateStory(id, {
    feedback: [...(getStoryById(id)?.feedback || []), newFeedback],
  });

  return newStory;
};

// function to update feedback on existing story
export const updateFeedbackOnStory = (
  id: string,
  updatedProperties: Partial<feedbackSchema>
): feedbackSchema | null => {
  // Update the feedback entry using the updateFeedback API
  const existingFeedback = getAllFeedback().find(
    (feedback) => feedback.id === id.toString()
  );
  if (!existingFeedback) {
    return null;
  }
  const updatedFeedback = { ...existingFeedback, ...updatedProperties };
  return addFeedback(updatedFeedback);
};
