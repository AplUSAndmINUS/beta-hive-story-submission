import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genreSelection: '',
  promptSelection: '',
  storySubmission: ``,
};

const storySubmissionSlice = createSlice({
  name: 'storySubmissionReducer',
  initialState,
  reducers: {
    setGenreSelection(state, action) {
      state.genreSelection = action.payload;
    },
    setPromptSelection(state, action) {
      state.promptSelection = action.payload;
    },
    setStorySubmission(state, action) {
      state.storySubmission = action.payload;
    },
  },
});

export const { setGenreSelection, setPromptSelection, setStorySubmission } =
  storySubmissionSlice.actions;

export default storySubmissionSlice.reducer;