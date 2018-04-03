import { FETCH_CHARACTER } from '../actions/index';

export default function(state=[], action){
  switch(action.type){
    case FETCH_CHARACTER:
      const empty = action.payload.data.data.results;
      console.log(empty)
      if(empty[0] === undefined){
        return state;
      }
      return  [ action.payload.data.data.results[0], ...state];
    default:
      return state;
  }
}
