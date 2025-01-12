import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeedbackSubmissionState {
  feedbackSubmission: string;
}

const initialState: FeedbackSubmissionState = {
  feedbackSubmission: ''
};

const feedbackSubmissionSlice = createSlice({
  name: 'feedbackSubmissionReducer',
  initialState,
  reducers: {
    setFeedbackSelection(state, action: PayloadAction<string>) {
      state.feedbackSubmission = action.payload;
    },
  },
});

export const { setFeedbackSelection } = feedbackSubmissionSlice.actions;

export default feedbackSubmissionSlice.reducer;
