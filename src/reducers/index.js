import { combineReducers } from 'redux';
import stuffReducer from './stuffReducer';

const rootReducer = combineReducers({
  stuff: stuffReducer,
});

export default rootReducer;
