import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import feedbackSubmissionReducer from './reducers/feedback-submission';
import storySubmissionReducer from './reducers/story-submission';

export const store = configureStore({
  reducer: {
    feedbackStorySubmission: feedbackSubmissionReducer,
    storySubmission: storySubmissionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;