import { combineReducers } from 'redux';
// import stuffReducer from './stuffReducer';
import currentReducer from './currentReducer';
import stuffReducer from './stuffReducer';

const rootReducer = combineReducers({
  stuff: stuffReducer,
  current: currentReducer,
});

export default rootReducer;
