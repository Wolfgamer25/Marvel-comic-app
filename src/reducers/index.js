import { combineReducers } from 'redux';
import ComicCharacter from './reducers_character';
import Comic from './reducers_comic';

const rootReducer = combineReducers({
  character: ComicCharacter,
  comic: Comic
});

export default rootReducer;
