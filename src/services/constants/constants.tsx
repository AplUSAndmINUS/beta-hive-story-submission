import { characterSchema } from '../../pages/prompt-selection/prompt-selection.types';
import { genreSchema } from '../../pages/genre-selection/genre-selection.types';
import { settingSchema } from '../../pages/prompt-selection/prompt-selection.types';

export const GENRE_SELECTIONS: genreSchema[] = [
  {
    id: 1,
    name: 'Fantasy',
    imgSource: '../../assets/images/fantasy.jpg',
    description: 'Magic, dragons, and other fantastical elements.'
  }, 
  {
    id: 2,
    name: 'Horror',
    imgSource: '../../assets/images/horror.jpg',
    description: 'Scary stories that will keep you up at night.'
  },
  {
    id: 3,
    name: 'Sci-Fi',
    imgSource: '../../assets/images/sci-fi.jpg',
    description: 'Stories set in the future or in space.'
  },
  {
    id: 4,
    name: 'Mystery',
    imgSource: '../../assets/images/mystery.jpg',
    description: 'Puzzles and enigmas to solve.'
  },
  {
    id: 5,
    name: 'Romance',
    imgSource: '../../assets/images/romance.jpg',
    description: 'Love stories and romantic adventures.'
  },
  {
    id: 6,
    name: 'Historical Fiction',
    imgSource: '../../assets/images/non-fiction.jpg',
    description: 'Stories set in the past.'
  },
  {
    id: 7,
    name: 'Adventure',
    imgSource: '../../assets/images/adventure.jpg',
    description: 'Exciting journeys and daring escapades.'
  },
  {
    id: 8,
    name: 'Suspense',
    imgSource: '../../assets/images/suspense.jpg',
    description: 'Suspenseful and thrilling stories.'
  }
];

export const CHARACTER_SELECTIONS: characterSchema[] = [
  {
    id: 1,
    name: 'Alice',
    description: 'A curious girl who falls into a magical world.'
  },
  {
    id: 2,
    name: 'Sherlock Holmes',
    description: 'A brilliant detective who solves mysteries.'
  },
  {
    id: 3,
    name: 'Dracula',
    description: 'A vampire who terrorizes the living.'
  },
  {
    id: 4,
    name: 'Elizabeth Bennet',
    description: 'A witty and independent woman navigating societal expectations.'
  },
  {
    id: 5,
    name: 'Captain Ahab',
    description: 'A vengeful sea captain obsessed with a white whale.'
  },
  {
    id: 6,
    name: 'Huckleberry Finn',
    description: 'A mischievous boy who embarks on adventures along the Mississippi River.'
  }
];

export const SETTING_SELECTIONS: settingSchema[] = [
  {
    id: 1,
    name: 'Wonderland',
    description: 'A whimsical and nonsensical world where anything can happen.'
  },
  {
    id: 2,
    name: 'Baker Street',
    description: 'The home of Sherlock Holmes and the site of many of his investigations.'
  },
  {
    id: 3,
    name: 'Transylvania',
    description: 'A mysterious and eerie region known for its supernatural occurrences.'
  },
  {
    id: 4,
    name: 'Regency England',
    description: 'A time of elegance, manners, and social conventions.'
  }
];