import { combineReducers } from 'redux';
import stuffReducer from './stuffReducer';
import currentReducer from './currentReducer';

const rootReducer = combineReducers({
  stuff: stuffReducer,
  current: currentReducer,
});

export default rootReducer;
