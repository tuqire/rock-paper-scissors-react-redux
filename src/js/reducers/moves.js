import { PLAYER_MOVED, COMP_MOVED } from '../actions/moves';
import { RESET_GAME } from '../actions/game';

export default function moves (state = {}, action) {
  switch (action.type) {
    case PLAYER_MOVED:
      return {
        ...state,
        player: action.payload.move
      };

    case COMP_MOVED:
      return {
        ...state,
        comp: action.payload.move
      };

    case RESET_GAME:
      return {};

    default:
      return state;
  }
}
