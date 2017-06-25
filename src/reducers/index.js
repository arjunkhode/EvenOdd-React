import { combineReducers } from 'redux';
import stuffReducer from './stuffReducer';
import currentReducer from './currentReducer';

import stuff from '../data/stuff';

const rootReducer = combineReducers({
  stuff,
  current: currentReducer,
});

export default rootReducer;
