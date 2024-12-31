import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StorySubmissionState {
  genreSelection: string;
  promptSelection: string;
  storySubmission: string;
}

const initialState: StorySubmissionState = {
  genreSelection: '',
  promptSelection: '',
  storySubmission: '',
};

const storySubmissionSlice = createSlice({
  name: 'storySubmissionReducer',
  initialState,
  reducers: {
    setGenreSelection(state, action: PayloadAction<string>) {
      state.genreSelection = action.payload;
    },
    setPromptSelection(state, action: PayloadAction<string>) {
      state.promptSelection = action.payload;
    },
    setStorySubmission(state, action: PayloadAction<string>) {
      state.storySubmission = action.payload;
    },
  },
});

export const { setGenreSelection, setPromptSelection, setStorySubmission } =
  storySubmissionSlice.actions;

export default storySubmissionSlice.reducer;
