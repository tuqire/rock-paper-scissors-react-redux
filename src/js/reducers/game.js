import { PLAYER_WON, DRAWN_GAME, COMP_WON, RESET_GAME } from '../actions/game';
import { PLAYER_MOVED } from '../actions/moves';
import { PENDING, PLAYER, DRAW, COMP } from '../constants/game';

export default function game(state = {
  status: PENDING,
  winCounter: 0,
  lossCounter: 0,
  disabled: false
}, action) {
  switch (action.type) {
    case PLAYER_MOVED:
      return {
        ...state,
        disabled: true
      };

    case PLAYER_WON:
      return {
        ...state,
        status: PLAYER,
        winCounter: state.winCounter + 1,
        disabled: false
      };

    case DRAWN_GAME:
      return {
        ...state,
        status: DRAW,
        disabled: false
      };

    case COMP_WON:
      return {
        ...state,
        status: COMP,
        lossCounter: state.lossCounter + 1,
        disabled: false
      };

    case RESET_GAME:
      return {
        ...state,
        status: PENDING,
        winCounter: 0,
        lossCounter: 0,
        disabled: false
      };

    default:
      return state;
  }
}
