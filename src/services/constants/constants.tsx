import { calendarSchema } from '../../components/calendar/calendar.types';
import { characterSchema } from '../../pages/prompt-selection/prompt-selection.types';
import { contentWarningsSchema } from '../../pages/content-warnings/content-warnings.types';
import { betaHIVESchema } from '../../pages/betaHIVE-selection/betaHIVE-selection.types';
import {
  promptsSchema,
  settingSchema,
} from '../../pages/prompt-selection/prompt-selection.types';

export const BETAHIVE_SELECTIONS: betaHIVESchema[] = [
  {
    id: 1,
    name: 'Fantasy',
    imgSource: 'fantasy.png',
    description: 'Magic, dragons, and other fantastical elements.',
  },
  {
    id: 2,
    name: 'Horror',
    imgSource: 'horror.png',
    description: 'Scary stories that will keep you up at night.',
  },
  {
    id: 3,
    name: 'Sci-Fi',
    imgSource: 'sci-fi.png',
    description: 'Stories set in the future or in space.',
  },
  {
    id: 4,
    name: 'Mystery',
    imgSource: 'mystery.png',
    description: 'Puzzles and enigmas to solve.',
  },
  {
    id: 5,
    name: 'Romance',
    imgSource: 'romance.png',
    description: 'Love stories and romantic adventures.',
  },
  {
    id: 6,
    name: 'Historical Fiction',
    imgSource: 'non-fiction.png',
    description: 'Stories set in the past.',
  },
  {
    id: 7,
    name: 'Adventure',
    imgSource: 'adventure.png',
    description: 'Exciting journeys and daring escapades.',
  },
  {
    id: 8,
    name: 'Suspense',
    imgSource: 'suspense.png',
    description: 'Suspenseful and thrilling stories.',
  },
];

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
  }
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
