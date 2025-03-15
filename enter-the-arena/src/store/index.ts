// filepath: beta-hive-story-submission/enter-the-arena/src/store/index.ts
import { createStore, combineReducers } from 'redux';

// Example reducer
const initialState = {
  // Define your initial state here
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your action cases here
    default:
      return state;
  }
};

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  example: exampleReducer,
  // Add other reducers here
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;