import { betaHIVESchema } from '../../services/data-interfaces/betaHIVE-selection.types';
import { storySchema } from '../../services/data-interfaces/battleHIVE.types';
import {
  CONTENT_WARNINGS,
  FEEDBACK_SUBMISSIONS,
  PROMPT_SELECTIONS,
} from './admin-constants';

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

export const STORY_SUBMISSIONS: storySchema[] = [
  {
    id: 1,
    title: 'Story 1',
    author: 'Author 1',
    story:
      'Once upon a time...Story 1 tried with all its might but could barely get an itch into what it was doing. The end.',
    HIVE: BETAHIVE_SELECTIONS[0].name,
    prompts: [PROMPT_SELECTIONS[0].name, PROMPT_SELECTIONS[6].name],
    isContentSensitive: false,
    contentWarnings: ['None'],
    wordCount: 1000,
    characterCount: 5000,
    status: 'Submitted',
    feedback: [
      {
        feedback: FEEDBACK_SUBMISSIONS[0].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[0].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[0].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[0].isAnonymous,
      },
      {
        feedback: FEEDBACK_SUBMISSIONS[1].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[1].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[1].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[1].isAnonymous,
      },
      {
        feedback: FEEDBACK_SUBMISSIONS[2].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[2].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[2].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[2].isAnonymous,
      },
    ],
    wins: 0,
    losses: 0,
  },
  {
    id: 2,
    title: 'Story 2',
    author: 'Author 2',
    story:
    'Once upon a time...Story 2 worked real hard and got mixed results. The end.',
    HIVE: BETAHIVE_SELECTIONS[0].name,
    prompts: [PROMPT_SELECTIONS[0].name, PROMPT_SELECTIONS[6].name],
    isContentSensitive: false,
    contentWarnings: ['None'],
    wordCount: 1000,
    characterCount: 5000,
    status: 'Submitted',
    feedback: [
      {
        feedback: FEEDBACK_SUBMISSIONS[3].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[3].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[3].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[3].isAnonymous,
      },
      {
        feedback: FEEDBACK_SUBMISSIONS[4].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[4].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[4].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[4].isAnonymous,
      },
      {
        feedback: FEEDBACK_SUBMISSIONS[5].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[5].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[5].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[5].isAnonymous,
      },
    ],
    wins: 0,
    losses: 0,
  },
  {
    id: 3,
    title: 'Story 3',
    author: 'Author 3',
    story:
      'Once upon a time...Story 3 got high and mighty on its ego... barely getting anything across to anyone who dared read it. The end.',
    HIVE: BETAHIVE_SELECTIONS[4].name,
    prompts: [PROMPT_SELECTIONS[1].name, PROMPT_SELECTIONS[6].name],
    isContentSensitive: false,
    contentWarnings: ['None'],
    wordCount: 350,
    characterCount: 5000,
    status: 'Submitted',
    feedback: [
      {
        feedback: FEEDBACK_SUBMISSIONS[6].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[6].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[6].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[6].isAnonymous,
      },
      {
        feedback: FEEDBACK_SUBMISSIONS[7].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[7].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[7].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[7].isAnonymous,
      },
      {
        feedback: FEEDBACK_SUBMISSIONS[8].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[8].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[8].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[8].isAnonymous,
      },
    ],
    wins: 0,
    losses: 0,
  },
  {
    id: 3,
    title: 'Story 4',
    author: 'Author 4',
    story:
    'Once upon a time...Story 4 decided to hire a professional at Disney to write their story. They won because as we know, capitalism cheats the system and allows anyone with enough money to buy their way into anything to win. The end.',
    HIVE: BETAHIVE_SELECTIONS[0].name,
    prompts: [PROMPT_SELECTIONS[4].name, PROMPT_SELECTIONS[9].name],
    isContentSensitive: true,
    contentWarnings: [CONTENT_WARNINGS[2].name, CONTENT_WARNINGS[3].name],
    wordCount: 350,
    characterCount: 5000,
    status: 'Submitted',
    feedback: [
      {
        feedback: FEEDBACK_SUBMISSIONS[9].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[9].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[9].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[9].isAnonymous,
      },
      {
        feedback: FEEDBACK_SUBMISSIONS[10].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[10].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[10].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[10].isAnonymous,
      },
      {
        feedback: FEEDBACK_SUBMISSIONS[11].feedback,
        isPublic: FEEDBACK_SUBMISSIONS[11].isPublic,
        isPositive: FEEDBACK_SUBMISSIONS[11].isPositive,
        isAnonymous: FEEDBACK_SUBMISSIONS[11].isAnonymous,
      },
    ],
    wins: 0,
    losses: 0,
  },
];
