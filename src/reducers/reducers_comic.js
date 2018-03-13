import { FETCH_COMIC } from '../actions/index';

export default function(state=[], action){
  switch(action.type){
    case FETCH_COMIC:
      if(action.error){
        return state;
      }
      return [action.payload.data, ...state ];
  }
  return state
}
