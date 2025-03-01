import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { promptsSchema } from '../../pages/prompt-selection/prompt-selection.types';
import { contentWarningsSchema } from '../../pages/content-warnings/content-warnings.types';

interface StorySubmissionState {
  isHIVEConfirmation: boolean;
  contentWarning: string;
  contentSensitivities: contentWarningsSchema[];
  genreSelection: string;
  characterSelection: string;
  settingSelection: string;
  promptSelections: promptsSchema[];
  storySubmission: string;
}

const initialState: StorySubmissionState = {
  isHIVEConfirmation: false,
  contentWarning: '',
  contentSensitivities: [],
  genreSelection: '',
  characterSelection: '',
  settingSelection: '',
  promptSelections: [],
  storySubmission: '',
};

const storySubmissionSlice = createSlice({
  name: 'storySubmissionReducer',
  initialState,
  reducers: {
    setBetaHIVEConfirmation(state, action: PayloadAction<boolean>) {
      state.isHIVEConfirmation = action.payload;
    },
    setContentSensitivities(state, action: PayloadAction<contentWarningsSchema[]>) {
      state.contentSensitivities = action.payload;
    },
    setIsContentWarning(state, action: PayloadAction<string>) {
      state.contentWarning = action.payload;
      if (action.payload.includes('No')) {
        state.contentSensitivities = [];
      }
    },
    setGenreSelection(state, action: PayloadAction<string>) {
      state.genreSelection = action.payload;
    },
    setCharacterSelection(state, action: PayloadAction<string>) {
      state.characterSelection = action.payload;
    },
    setPromptSelections(state, action: PayloadAction<promptsSchema[]>) {
      state.promptSelections = action.payload;
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
  setBetaHIVEConfirmation,
  setContentSensitivities,
  setIsContentWarning,
  setGenreSelection,
  setCharacterSelection,
  setPromptSelections,
  setSettingSelection,
  setStorySubmission,
} = storySubmissionSlice.actions;

export default storySubmissionSlice.reducer;
