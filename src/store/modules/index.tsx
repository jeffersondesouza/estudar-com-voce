import { combineReducers } from 'redux';

import  courseReducer from './course/reducer';

const rootReducer = combineReducers({
  course:  courseReducer,
});

export default rootReducer;
