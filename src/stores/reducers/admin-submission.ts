import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

interface AdminSubmissionState {
  adminPrompts: string[];
  betaHIVEs: string[];
  contentWarnings: string[];
  countdownDate: moment.Moment;
}

const initialState: AdminSubmissionState = {
  adminPrompts: [],
  betaHIVEs: [],
  contentWarnings: [],
  countdownDate: moment(),
};

const adminSubmissionSlice = createSlice({
  name: 'adminSubmissionReducer',
  initialState,
  reducers: {
    setAdminPrompts(state, action: PayloadAction<string[]>) {
      state.adminPrompts = [...action.payload];
    },
    setBetaHIVEs(state, action: PayloadAction<string[]>) {
      state.betaHIVEs = [...action.payload];
    },
    setContentWarnings(state, action: PayloadAction<string[]>) {
      state.contentWarnings = [...action.payload];
    },
    setCountdownDate(state, action: PayloadAction<moment.Moment>) {
      state.countdownDate = action.payload;
    },
  },
});

export const {
  setAdminPrompts,
  setBetaHIVEs,
  setContentWarnings,
  setCountdownDate,
} = adminSubmissionSlice.actions;

export default adminSubmissionSlice.reducer;
