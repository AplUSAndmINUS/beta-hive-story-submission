import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeedbackSubmissionState {
  feedbackStoryIsPositive: boolean;
  feedbackStoryIsPublic: boolean;
  feedbackStoryIsAnonymous: boolean;
  feedbackStoryText: string;
}

const initialState: FeedbackSubmissionState = {
  feedbackStoryIsAnonymous: false,
  feedbackStoryIsPositive: false,
  feedbackStoryIsPublic: false,
  feedbackStoryText: '',
};

const feedbackSubmissionSlice = createSlice({
  name: 'feedbackSubmissionReducer',
  initialState,
  reducers: {
    setFeedbackSelection(state, action: PayloadAction<FeedbackSubmissionState>) {
      state.feedbackStoryIsAnonymous = action.payload.feedbackStoryIsAnonymous;
      state.feedbackStoryIsPositive = action.payload.feedbackStoryIsPositive;
      state.feedbackStoryIsPublic = action.payload.feedbackStoryIsPublic;
      state.feedbackStoryText = action.payload.feedbackStoryText;
    },
  },
});

export const { setFeedbackSelection } = feedbackSubmissionSlice.actions;

export default feedbackSubmissionSlice.reducer;
