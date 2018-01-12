import { combineReducers } from 'redux';
import flash from './flash';
import episodes from './episodes';
import characters from './characters';

const rootReducer = combineReducers({
  flash,
  episodes,
  characters,
  
});

export default rootReducer;
