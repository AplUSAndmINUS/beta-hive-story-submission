import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import adminSubmissionReducer from './reducers/admin-submission';
import feedbackSubmissionReducer from './reducers/feedback-submission';
import storySubmissionReducer from './reducers/story-submission';
import VoteSubmissionReducer from './reducers/vote-submission';
import VSFeedbackSubmissionReducer from './reducers/versus-feedback-submission';

export const store = configureStore({
  reducer: {
    adminSubmission: adminSubmissionReducer,
    feedbackStorySubmission: feedbackSubmissionReducer,
    storySubmission: storySubmissionReducer,
    voteSubmission: VoteSubmissionReducer,
    VSFeedbackSubmission: VSFeedbackSubmissionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;