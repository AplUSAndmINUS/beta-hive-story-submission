// filepath: beta-hive-story-submission/admin-page/src/store/index.ts
import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer defined in a reducers file

const store = createStore(rootReducer);

export default store;