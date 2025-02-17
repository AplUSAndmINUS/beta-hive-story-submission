import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

interface BetaHIVEPrompt {
  name: string;
  image: string;
}

interface AdminSubmissionState {
  adminPrompts: string[];
  betaHIVEs: BetaHIVEPrompt[];
  contentWarnings: string[];
  countdownDate: moment.Moment;
}

const initialState: AdminSubmissionState = {
  adminPrompts: [],
  betaHIVEs: [],
  contentWarnings: [],
  countdownDate: moment().add(20, 'days'),
};

const adminSubmissionSlice = createSlice({
  name: 'adminSubmissionReducer',
  initialState,
  reducers: {
    setAdminPrompts(state, action: PayloadAction<string[]>) {
      state.adminPrompts = [...action.payload];
    },
    setBetaHIVEs(state, action: PayloadAction<BetaHIVEPrompt[]>) {
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

// Validation function
const validateSubmission = (state: AdminSubmissionState): boolean => {
  const { adminPrompts, betaHIVEs, contentWarnings } = state;

  if (adminPrompts.length === 0 || betaHIVEs.length === 0 || contentWarnings.length === 0) {
    alert('All fields must be filled out.');
    return false;
  }

  // Add more specific validation logic if needed
  return true;
};

// handleSubmit function
const handleSubmit = (state: AdminSubmissionState) => {
  if (validateSubmission(state)) {
    // Proceed with submission
    console.log('Submission is valid. Proceeding with submission...');
    // Add your submission logic here
  } else {
    console.log('Submission is invalid. Please fill out all fields.');
  }
};
