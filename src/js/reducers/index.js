import { combineReducers } from 'redux';

import game from './game';
import moves from './moves';

const reducer = combineReducers({
  game,
  moves
});

export default reducer;
