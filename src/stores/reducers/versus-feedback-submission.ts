import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VSFeedbackSumissionState {
  feedbackSubmission: string;
}

const initialState: VSFeedbackSumissionState = {
  feedbackSubmission: '',
};

const VSFeedbackSubmissionReducer = createSlice({
  name: 'VSFeedbackSubmissionReducer',
  initialState,
  reducers: {
    setVSFeedbackSelection(state, action: PayloadAction<string>) {
      state.feedbackSubmission = action.payload;
    },
  },
});

export const { setVSFeedbackSelection } =
  VSFeedbackSubmissionReducer.actions;

export default VSFeedbackSubmissionReducer.reducer;
