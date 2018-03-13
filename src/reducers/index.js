import { combineReducers } from 'redux';
import ComicReducers from './reducers_comic';

const rootReducer = combineReducers({
  comic: ComicReducers
});

export default rootReducer;
