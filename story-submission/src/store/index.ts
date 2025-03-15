// filepath: beta-hive-story-submission/story-submission/src/store/index.ts
import { createStore, combineReducers } from 'redux';

// Example reducer (you can replace this with your actual reducers)
const initialState = {
  stories: [],
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STORY':
      return {
        ...state,
        stories: [...state.stories, action.payload],
      };
    default:
      return state;
  }
};

// Combine reducers if you have more than one
const rootReducer = combineReducers({
  story: storyReducer,
  // other reducers can be added here
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;