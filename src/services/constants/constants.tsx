import { characterSchema } from '../../pages/prompt-selection/prompt-selection.types';
import { contentWarningsSchema } from '../../pages/content-warnings/content-warnings.types';
import { betaHIVESchema } from '../../pages/betaHIVE-selection/betaHIVE-selection.types';
import {
  promptsSchema,
  settingSchema,
} from '../../pages/prompt-selection/prompt-selection.types';

// GENRE_SELECTIONS aren't used in the code, but they are used in the tests
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
    id: 1,
    name: 'Baker Street',
    description:
      'The home of Sherlock Holmes and the site of many of his investigations.',
  },
  {
    id: 2,
    name: 'Regency England',
    description: 'A time of elegance, manners, and social conventions.',
  },
  {
    id: 3,
    name: 'Transylvania',
    description:
      'A mysterious and eerie region known for its supernatural occurrences.',
  },
  {
    id: 4,
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
