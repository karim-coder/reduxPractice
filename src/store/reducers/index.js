import {combineReducers} from 'redux';
import loggedReducer from './isLogged';
import countReducer from './counter';

const rootReducer = combineReducers({
  counter: countReducer,
  isLogged: loggedReducer,
});

export default rootReducer;
