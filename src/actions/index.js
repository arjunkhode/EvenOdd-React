export const SWAP_STATE = 'SWAP_STATE';

export function swapState(newState){
	let result = newState;
	return{
		type: SWAP_STATE,
		payload: result,
	};
}