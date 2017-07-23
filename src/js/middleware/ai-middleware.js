import { PLAYER_MOVED, COMP_MOVED, compMoved } from '../actions/moves';
import { PLAYER_WON, DRAWN_GAME, COMP_WON, playerWon, drawnGame, compWon } from '../actions/game';
import { ROCK, PAPER, SCISSORS } from '../constants/moves';

export default function (store) {
  return next => action => {
    next(action);

    switch (action.type) {
      case PLAYER_MOVED:
        const randCompMove = Math.ceil(Math.random() * 3);
        let move = '';

        switch (randCompMove) {
          case 1:
            move = ROCK;
            break;

          case 2:
            move = PAPER;
            break;

          case 3:
            move = SCISSORS;
            break;
        }

        store.dispatch(compMoved(move));
        break;

      case COMP_MOVED:
        const { player: playerMove, comp: compMove } = store.getState().moves;

        console.log(playerMove, compMove);
        if (
          playerMove === ROCK && compMove === SCISSORS ||
          playerMove === SCISSORS && compMove === PAPER ||
          playerMove === PAPER && compMove === ROCK
        ) {
          store.dispatch(playerWon());
        } else if (playerMove === compMove) {
          store.dispatch(drawnGame());
        } else {
          store.dispatch(compWon());
        }
        break;
    };
  };
}
