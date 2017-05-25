export const SWAP_STATE = 'SWAP_STATE';

export function swapState(currentState){
	let result = "odd";
	if(currentState==="even"){result="odd"}
	else if(currentState==="odd"){result="even"}
	console.log("Hi I am action, I am swapping the state and currentState was",currentState);
	return{
		type: SWAP_STATE,
		payload: result,
	};
}