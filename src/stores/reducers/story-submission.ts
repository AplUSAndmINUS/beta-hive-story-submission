import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StorySubmissionState {
  genreSelection: string;
  characterSelection: string;
  settingSelection: string;
  storySubmission: string;
}

const initialState: StorySubmissionState = {
  genreSelection: '',
  characterSelection: '',
  settingSelection: '',
  storySubmission: '',
};

const storySubmissionSlice = createSlice({
  name: 'storySubmissionReducer',
  initialState,
  reducers: {
    setGenreSelection(state, action: PayloadAction<string>) {
      state.genreSelection = action.payload;
    },
    setCharacterSelection(state, action: PayloadAction<string>) {
      state.characterSelection = action.payload;
    },
    setSettingSelection(state, action: PayloadAction<string>) {
      state.settingSelection = action.payload;
    },
    setStorySubmission(state, action: PayloadAction<string>) {
      state.storySubmission = action.payload;
    },
  },
});

export const { setGenreSelection, setCharacterSelection, setSettingSelection, setStorySubmission } =
  storySubmissionSlice.actions;

export default storySubmissionSlice.reducer;
