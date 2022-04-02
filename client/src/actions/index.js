import { SET_WINDOW_WIDTH } from "./types"

export const setWindowWidth = (width) => async dispath =>{
	let windowWidth = 'xl';
	if(width<640){windowWidth='sm'}
	else if(width<768){windowWidth='md'}
	else if(width<1024){windowWidth='lg'}
	else if(width<1280){windowWidth='xl'}
	else if(width>=1280){windowWidth='2xl'}
	console.log("width: ", windowWidth)
	dispath({type: SET_WINDOW_WIDTH, payload: windowWidth})
}