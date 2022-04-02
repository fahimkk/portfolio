import { SET_WINDOW_WIDTH } from "../actions/types";

export default function(state='xl', action){
	switch (action.type){
		case SET_WINDOW_WIDTH:
			return action.payload	
		default:
			return state
	}
}