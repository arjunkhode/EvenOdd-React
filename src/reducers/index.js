import { combineReducers } from 'redux';
// import stuffReducer from './stuffReducer';
import currentReducer from './currentReducer';
import stuffReducer from './stuffReducer';
import vehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({
  stuff: stuffReducer,
  current: currentReducer,
  inner: vehicleReducer,
});

export default rootReducer;
