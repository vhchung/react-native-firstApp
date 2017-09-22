import {combineReducers} from 'redux';
import gitReducer from './gitReducer';
import activityReducer from './activityReducer';
const allReducers = combineReducers({
  repos: gitReducer,
  activeRepo: activityReducer
});

export default allReducers;
