import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StorySubmissionState {
  contentWarning: string;
  contentSensitivities: string[];
  genreSelection: string;
  characterSelection: string;
  settingSelection: string;
  storySubmission: string;
}

const initialState: StorySubmissionState = {
  contentWarning: '',
  contentSensitivities: [],
  genreSelection: '',
  characterSelection: '',
  settingSelection: '',
  storySubmission: '',
};

const storySubmissionSlice = createSlice({
  name: 'storySubmissionReducer',
  initialState,
  reducers: {
    setContentWarning(state, action: PayloadAction<string>) {
      state.contentWarning = action.payload;
    },
    setContentSensitivities(state, action: PayloadAction<string[]>) {
      state.contentSensitivities = action.payload;
    },
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

export const {
  setContentWarning,
  setContentSensitivities,
  setGenreSelection,
  setCharacterSelection,
  setSettingSelection,
  setStorySubmission,
} = storySubmissionSlice.actions;

export default storySubmissionSlice.reducer;
