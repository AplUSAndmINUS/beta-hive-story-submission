import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StorySubmissionState {
  genreSelection: number;
  promptSelection: number;
  storySubmission: string;
}

const initialState: StorySubmissionState = {
  genreSelection: 0,
  promptSelection: 0,
  storySubmission: ''
};

const storySubmissionSlice = createSlice({
  name: 'storySubmissionReducer',
  initialState,
  reducers: {
    setGenreSelection(state, action: PayloadAction<number>) {
      state.genreSelection = action.payload;
    },
    setPromptSelection(state, action: PayloadAction<number>) {
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