import {combineReducers} from 'redux';
import windowSizeReducer from './windowSizeReducer'; 
// when importing an default export we can call it in any name without using as term

export default combineReducers({
	windowWidth:windowSizeReducer 
});