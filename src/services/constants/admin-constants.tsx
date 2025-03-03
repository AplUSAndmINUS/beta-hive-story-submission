import { calendarSchema } from '../../components/calendar/calendar.types';
import { characterSchema } from '../data-interfaces/prompt-selection.types';
import { contentWarningsSchema } from '../data-interfaces/content-warnings.types';
import {
  promptsSchema,
  settingSchema,
} from '../data-interfaces/prompt-selection.types';
import { feedbackSchema } from '../data-interfaces/battleHIVE.types';

export const CALENDAR_EVENTS: calendarSchema[] = [
  {
    name: 'BetaHIVE Selection',
    date: '2025-03-01',
    description: 'Choose your BetaHIVE genre!',
  },
  {
    name: 'Prompt Selection',
    date: '2025-03-08',
    description: 'Select your character and setting!',
  },
  {
    name: 'Content Warnings',
    date: '2025-03-15',
    description: 'Choose your content warnings!',
  },
  {
    name: 'Story Submission',
    date: '2025-04-22',
    description: 'Submit your story for review!',
  },
];

export const CHARACTER_SELECTIONS: characterSchema[] = [
  {
    id: 1,
    name: 'Alice',
    description: 'A curious girl who falls into a magical world.',
  },
  {
    id: 2,
    name: 'Sherlock Holmes',
    description: 'A brilliant detective who solves mysteries.',
  },
  {
    id: 3,
    name: 'Dracula',
    description: 'A vampire who terrorizes the living.',
  },
  {
    id: 4,
    name: 'Elizabeth Bennet',
    description:
      'A witty and independent woman navigating societal expectations.',
  },
  {
    id: 5,
    name: 'Captain Ahab',
    description: 'A vengeful sea captain obsessed with a white whale.',
  },
  {
    id: 6,
    name: 'Huckleberry Finn',
    description:
      'A mischievous boy who embarks on adventures along the Mississippi River.',
  },
];

export const CONTENT_WARNINGS: contentWarningsSchema[] = [
  {
    id: 1,
    name: 'Violence',
    description: 'Scenes of violence or harm to characters.',
  },
  {
    id: 2,
    name: 'Death',
    description: 'Themes of death or dying.',
  },
  {
    id: 3,
    name: 'Sexual Content',
    description: 'Scenes of a sexual nature.',
  },
  {
    id: 4,
    name: 'Substance Abuse',
    description: 'References to drug or alcohol use.',
  },
];

export const SETTING_SELECTIONS: settingSchema[] = [
  {
    id: 7,
    name: 'Baker Street',
    description:
      'The home of Sherlock Holmes and the site of many of his investigations.',
  },
  {
    id: 8,
    name: 'Regency England',
    description: 'A time of elegance, manners, and social conventions.',
  },
  {
    id: 9,
    name: 'Transylvania',
    description:
      'A mysterious and eerie region known for its supernatural occurrences.',
  },
  {
    id: 10,
    name: 'Wonderland',
    description: 'A whimsical and nonsensical world where anything can happen.',
  },
];

// customer requested these be listed all under prompts and not separated -TW
export const PROMPT_SELECTIONS: promptsSchema[] = [
  CHARACTER_SELECTIONS[0],
  CHARACTER_SELECTIONS[1],
  CHARACTER_SELECTIONS[2],
  CHARACTER_SELECTIONS[3],
  CHARACTER_SELECTIONS[4],
  CHARACTER_SELECTIONS[5],
  SETTING_SELECTIONS[0],
  SETTING_SELECTIONS[1],
  SETTING_SELECTIONS[2],
  SETTING_SELECTIONS[3],
];

export const FEEDBACK_SUBMISSIONS: feedbackSchema[] = [
  {
    id: 1,
    title: 'Feedback 1',
    story: 'Story 1',
    feedbackAuthor: 'Author 1',
    feedback: 'Great story!',
    isPositive: true,
    isPublic: true,
    isAnonymous: false,
  },
  {
    id: 2,
    title: 'Feedback 2',
    story: 'Story 1',
    feedbackAuthor: 'Author 2',
    feedback: 'Needs more detail. Please hide me!',
    isPositive: false,
    isPublic: false,
    isAnonymous: true,
  },
  {
    id: 3,
    title: 'Feedback 3',
    story: 'Story 1',
    feedbackAuthor: 'Author 3',
    feedback: 'Loved the characters!',
    isPositive: true,
    isPublic: true,
    isAnonymous: false,
  },
  {
    id: 4,
    title: 'Feedback 1',
    story: 'Story 2',
    feedbackAuthor: 'Author 1',
    feedback: 'Great story!',
    isPositive: true,
    isPublic: true,
    isAnonymous: false,
  },
  {
    id: 5,
    title: 'Feedback 2',
    story: 'Story 2',
    feedbackAuthor: 'Author 2',
    feedback: 'Story two: Needs again more detail. Please hide me!',
    isPositive: false,
    isPublic: false,
    isAnonymous: true,
  },
  {
    id: 6,
    title: 'Feedback 3',
    story: 'Story 2',
    feedbackAuthor: 'Author 3',
    feedback: "Loved the characters! I just do not understand the story's plot",
    isPositive: false,
    isPublic: true,
    isAnonymous: false,
  },
  {
    id: 7,
    title: 'Feedback 1',
    story: 'Story 3',
    feedbackAuthor: 'Author 1',
    feedback: "I've read better...",
    isPositive: false,
    isPublic: true,
    isAnonymous: false,
  },
  {
    id: 8,
    title: 'Feedback 2',
    story: 'Story 3',
    feedbackAuthor: 'Author 2',
    feedback: 'HUH????: Needs again more detail. Please hide me!',
    isPositive: false,
    isPublic: false,
    isAnonymous: true,
  },
  {
    id: 9,
    title: 'Feedback 3',
    story: 'Story 3',
    feedbackAuthor: 'Author 3',
    feedback: "Let's retry doing better at this, shall we? Don't show me.",
    isPositive: false,
    isPublic: false,
    isAnonymous: true,
  },
  {
    id: 10,
    title: 'Feedback 1',
    story: 'Story 4',
    feedbackAuthor: 'Author 1',
    feedback: "WINNER WINNER, CHIKKIN DINNER! I'm a winner!",
    isPositive: true,
    isPublic: true,
    isAnonymous: false,
  },
  {
    id: 11,
    title: 'Feedback 2',
    story: 'Story 4',
    feedbackAuthor: 'Author 2',
    feedback: 'You win!! Please hide me.',
    isPositive: true,
    isPublic: false,
    isAnonymous: true,
  },
  {
    id: 12,
    title: 'Feedback 3',
    story: 'Story 4',
    feedbackAuthor: 'Author 3',
    feedback: 'I am not worthy!',
    isPositive: true,
    isPublic: true,
    isAnonymous: false,
  },
];
