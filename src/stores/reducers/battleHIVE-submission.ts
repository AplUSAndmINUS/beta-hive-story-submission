import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BattleHIVESubmissionState {
  isNoContentWarnings: boolean;
  stories: string[];
  selectedStoryOne: string;
  selectedStoryTwo: string;
}
