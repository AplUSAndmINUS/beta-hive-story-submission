import { betaHIVESchema } from './betaHIVE-selection.types';
import { promptsSchema } from './prompt-selection.types';
import { contentWarningsSchema } from './content-warnings.types';

export interface authorSchema {
  id: number;
  name: string;
  email: string;
  HIVE: betaHIVESchema['name'];
  wins: storySchema['wins'];
  losses: storySchema['losses'];
  stories: storySchema['title'][];
}

export interface feedbackSchema {
  id: number;
  title: string;
  story: string;
  feedbackAuthor: string;
  feedback: string;
  isPositive: boolean;
  isPublic: boolean;
  isAnonymous: boolean;
}

export interface storySchema {
  id: number;
  title: string;
  author: string;
  story: string;
  HIVE: betaHIVESchema['name'];
  prompts: promptsSchema['name'][];
  isContentSensitive: boolean;
  contentWarnings: contentWarningsSchema['name'][] | ['None'];
  wordCount: number;
  characterCount: number;
  status: 'Draft' | 'Submitted' | 'Approved' | 'Rejected';
  feedback: Pick<feedbackSchema, 'id' | 'feedback' | 'isPublic' | 'isPositive' | 'isAnonymous' >[];
  wins: number;
  losses: number;
}
