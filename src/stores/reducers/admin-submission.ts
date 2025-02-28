import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

export interface BetaHIVEPrompt {
  name: string;
  image: string;
}

interface AdminSubmissionState {
  betaHIVECount: number;
  betaHIVEs: BetaHIVEPrompt[];
  calendarEventCount: number;
  calendarEvents: string[];
  contentWarningCount: number;
  contentWarnings: string[];
  countdownDate: string;
  promptsCount: number;
  prompts: string[];
  wordCount: number;
}

const initialState: AdminSubmissionState = {
  betaHIVECount: 4,
  betaHIVEs: [],
  calendarEventCount: 4,
  calendarEvents: [],
  contentWarningCount: 4,
  contentWarnings: [],
  countdownDate: moment().add(20, 'days').format('YYYY-MM-DD'),
  promptsCount: 10,
  prompts: [],
  wordCount: 500,
};

const adminSubmissionSlice = createSlice({
  name: 'adminSubmissionReducer',
  initialState,
  reducers: {
    setBetaHIVECount(state, action: PayloadAction<number>) {
      state.betaHIVECount = action.payload;
    },
    setBetaHIVEs(state, action: PayloadAction<BetaHIVEPrompt[]>) {
      state.betaHIVEs = [...action.payload];
    },
    setCalendarEventCount(state, action: PayloadAction<number>) {
      state.calendarEventCount = action.payload;
    },
    setCalendarEvents(state, action: PayloadAction<string[]>) {
      state.calendarEvents = [...action.payload];
    },
    setContentWarningCount(state, action: PayloadAction<number>) {
      state.contentWarningCount = action.payload;
    },
    setContentWarnings(state, action: PayloadAction<string[]>) {
      state.contentWarnings = [...action.payload];
    },
    setCountdownDate(state, action: PayloadAction<string>) {
      state.countdownDate = action.payload;
    },
    setPromptCount(state, action: PayloadAction<number>) {
      state.promptsCount = action.payload;
    },
    setPrompts(state, action: PayloadAction<string[]>) {
      state.prompts = [...action.payload];
    },
    setWordCount(state, action: PayloadAction<number>) {
      state.wordCount = action.payload
    },
  },
});

export const {
  setBetaHIVEs,
  setBetaHIVECount,
  setCalendarEventCount,
  setCalendarEvents,
  setContentWarningCount,
  setContentWarnings,
  setCountdownDate,
  setPromptCount,
  setPrompts,
  setWordCount,
} = adminSubmissionSlice.actions;

export default adminSubmissionSlice.reducer;