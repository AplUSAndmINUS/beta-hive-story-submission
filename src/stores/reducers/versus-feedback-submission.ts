import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VSFeedbackSumissionState {
  feedbackOneSubmission: string;
  feedbackTwoSubmission: string;
}

const initialState: VSFeedbackSumissionState = {
  feedbackOneSubmission: '',
  feedbackTwoSubmission: '',
};

const VSFeedbackSubmissionReducer = createSlice({
  name: 'VSFeedbackSubmissionReducer',
  initialState,
  reducers: {
    setVSFeedbackOneSelection(state, action: PayloadAction<string>) {
      state.feedbackOneSubmission = action.payload;
    },
    setVSFeedbackTwoSelection(state, action: PayloadAction<string>) {
      state.feedbackTwoSubmission = action.payload;
    },
  },
});

export const { setVSFeedbackOneSelection, setVSFeedbackTwoSelection } =
  VSFeedbackSubmissionReducer.actions;

export default VSFeedbackSubmissionReducer.reducer;
