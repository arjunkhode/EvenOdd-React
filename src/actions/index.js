export const SWAP_STATE = 'SWAP_STATE';
export const SET_VEHICLE = 'SET_VEHICLE';

export function swapState(newState){
	let result = newState;
	return{
		type: SWAP_STATE,
		payload: result,
	};
}

export function setVehicle(id){
	return{
		type: SET_VEHICLE,
		payload: id,
	};
}