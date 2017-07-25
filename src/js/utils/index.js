import { ROCK, PAPER, SCISSORS } from '../constants/moves';

export function getMoveDisplayName(move = '') {
  switch (move) {
    case ROCK:
      return 'rock';

    case PAPER:
      return 'paper';

    case SCISSORS:
      return 'scissors';

    default:
      return '';
  }
}
