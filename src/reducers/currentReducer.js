import { SWAP_STATE } from '../actions/index';

const INITIAL_STATE = { stateRightNow: null};

export default function currentReducer(state = INITIAL_STATE, action){
	switch(action.type){
		case SWAP_STATE:
			return {...state, stateRightNow: action.payload};
		default: return state;
	}
}