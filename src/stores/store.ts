import { configureStore } from '@reduxjs/toolkit';

import storySubmissionReducer from './reducers/story-submission';

export const store = configureStore({
  reducer: {
    storySubmission: storySubmissionReducer,
  },
});

export default store;