import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { BETAHIVE_SELECTIONS } from '../../services/constants/constants';
import { CALENDAR_EVENTS } from '../../services/constants/constants';
import { CONTENT_WARNINGS } from '../../services/constants/constants';
import { PROMPT_SELECTIONS } from '../../services/constants/constants';
import { betaHIVESchema } from '../../pages/betaHIVE-selection/betaHIVE-selection.types';
import { calendarSchema } from '../../components/calendar/calendar.types';
import { contentWarningsSchema } from '../../pages/content-warnings/content-warnings.types';
import { promptsSchema } from '../../pages/prompt-selection/prompt-selection.types';

interface AdminSubmissionState {
  betaHIVECount: number;
  betaHIVEs: betaHIVESchema[];
  calendarEventCount: number;
  calendarEvents: calendarSchema[];
  contentWarningCount: number;
  contentWarnings: contentWarningsSchema[];
  countdownDate: string;
  minPromptSelections: number;
  numOfLosses: number;
  promptsCount: number;
  prompts: promptsSchema[];
  wordCount: number;
}

const initialState: AdminSubmissionState = {
  betaHIVECount: 8,
  betaHIVEs: [...BETAHIVE_SELECTIONS],
  calendarEventCount: 4,
  calendarEvents: [...CALENDAR_EVENTS],
  contentWarningCount: 4,
  contentWarnings: [...CONTENT_WARNINGS],
  countdownDate: moment().add(20, 'days').format('YYYY-MM-DD'),
  minPromptSelections: 2,
  numOfLosses: 3,
  promptsCount: 10,
  prompts: [...PROMPT_SELECTIONS],
  wordCount: 500,
};

const adminSubmissionSlice = createSlice({
  name: 'adminSubmissionReducer',
  initialState,
  reducers: {
    setBetaHIVECount(state, action: PayloadAction<number>) {
      state.betaHIVECount = action.payload;
    },
    setBetaHIVEs(state, action: PayloadAction<betaHIVESchema[]>) {
      state.betaHIVEs = [...action.payload];
    },
    setCalendarEventCount(state, action: PayloadAction<number>) {
      state.calendarEventCount = action.payload;
    },
    setCalendarEvents(state, action: PayloadAction<calendarSchema[]>) {
      state.calendarEvents = [...action.payload];
    },
    setContentWarningCount(state, action: PayloadAction<number>) {
      state.contentWarningCount = action.payload;
    },
    setContentWarnings(state, action: PayloadAction<contentWarningsSchema[]>) {
      state.contentWarnings = [...action.payload];
    },
    setCountdownDate(state, action: PayloadAction<string>) {
      state.countdownDate = action.payload;
    },
    setMinPromptSelections(state, action: PayloadAction<number>) {
      state.minPromptSelections = action.payload;
    },
    setNumOfLosses(state, action: PayloadAction<number>) {
      state.numOfLosses = action.payload;
    },
    setPromptCount(state, action: PayloadAction<number>) {
      state.promptsCount = action.payload;
    },
    setPrompts(state, action: PayloadAction<promptsSchema[]>) {
      state.prompts = [...action.payload];
    },
    setWordCount(state, action: PayloadAction<number>) {
      state.wordCount = action.payload;
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
  setMinPromptSelections,
  setNumOfLosses,
  setPromptCount,
  setPrompts,
  setWordCount,
} = adminSubmissionSlice.actions;

export default adminSubmissionSlice.reducer;
