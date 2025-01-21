import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VoteSubmissionState {
  selectedPrompt: string;
}

const initialState: VoteSubmissionState = {
  selectedPrompt: '',
};

const voteSubmissionSlice = createSlice({
  name: 'voteSubmissionReducer',
  initialState,
  reducers: {
    setVoteSubmission(state, action: PayloadAction<string>) {
      state.selectedPrompt = action.payload;
    },
  },
});

export const setVoteSubmission = voteSubmissionSlice.actions;

export default voteSubmissionSlice.reducer;