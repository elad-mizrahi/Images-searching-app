import {combineReducers} from 'redux';
import images from './imageReducer';
import searchHistory from './historyReducer';

const rootReducer = combineReducers({images, searchHistory});

export default rootReducer;
