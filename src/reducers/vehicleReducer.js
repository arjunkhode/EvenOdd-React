import { SET_VEHICLE } from '../actions/index';

const INITIAL_STATE = { rightNow: null};

export default function vehicleReducer(state = INITIAL_STATE, action){
	switch(action.type){
		case SET_VEHICLE:
			return {...state, rightNow: action.payload};
		default: return state;
	}
}