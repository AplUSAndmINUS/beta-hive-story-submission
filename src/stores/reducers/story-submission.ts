import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StorySubmissionState {
  isContentWarning: boolean;
  contentSensitivities: string[];
  genreSelection: string;
  characterSelection: string;
  settingSelection: string;
  storySubmission: string;
}

const initialState: StorySubmissionState = {
  isContentWarning: false,
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
    setIsContentWarning(state, action: PayloadAction<boolean>) {
      state.isContentWarning = action.payload;
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
  setIsContentWarning,
  setContentSensitivities,
  setGenreSelection,
  setCharacterSelection,
  setSettingSelection,
  setStorySubmission,
} = storySubmissionSlice.actions;

export default storySubmissionSlice.reducer;
