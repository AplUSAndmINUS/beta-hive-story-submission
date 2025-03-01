import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StorySubmissionState {
  betaHIVESelection: string;
  isBetaHIVEConfirmation: boolean;
  contentWarning: string;
  contentSensitivities: string[];
  characterSelection: string;
  settingSelection: string;
  promptSelections: string[];
  storyTitle: string;
  storySubmission: string;
}

const initialState: StorySubmissionState = {
  betaHIVESelection: '',
  isBetaHIVEConfirmation: false,
  contentWarning: '',
  contentSensitivities: [],
  characterSelection: '',
  settingSelection: '',
  promptSelections: [],
  storyTitle: '',
  storySubmission: '',
};

const storySubmissionSlice = createSlice({
  name: 'storySubmissionReducer',
  initialState,
  reducers: {
    setBetaHIVEConfirmation(state, action: PayloadAction<boolean>) {
      state.isBetaHIVEConfirmation = action.payload;
    },
    setBetaHIVESelection(state, action: PayloadAction<string>) {
      state.betaHIVESelection = action.payload;
    },
    setContentSensitivities(state, action: PayloadAction<string[]>) {
      state.contentSensitivities = action.payload;
    },
    setIsContentWarning(state, action: PayloadAction<string>) {
      state.contentWarning = action.payload;
      if (action.payload.includes('No')) {
        state.contentSensitivities = [];
      }
    },
    setCharacterSelection(state, action: PayloadAction<string>) {
      state.characterSelection = action.payload;
    },
    setPromptSelections(state, action: PayloadAction<string[]>) {
      state.promptSelections = action.payload;
    },
    setSettingSelection(state, action: PayloadAction<string>) {
      state.settingSelection = action.payload;
    },
    setStorySubmission(state, action: PayloadAction<string>) {
      state.storySubmission = action.payload;
    },
    setStoryTitle(state, action: PayloadAction<string>) {
      state.storyTitle = action.payload;
    },
  },
});

export const {
  setBetaHIVEConfirmation,
  setBetaHIVESelection,
  setContentSensitivities,
  setIsContentWarning,
  setCharacterSelection,
  setPromptSelections,
  setSettingSelection,
  setStorySubmission,
  setStoryTitle,
} = storySubmissionSlice.actions;

export default storySubmissionSlice.reducer;
