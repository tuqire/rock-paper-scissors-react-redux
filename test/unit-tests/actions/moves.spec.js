import * as movesActions from '../../../src/js/actions/moves';
import { ROCK, PAPER, SCISSORS } from '../../../src/js/constants/moves';

describe('ACTIONS: player moves', () => {
  it('player moved', () => {
    const move = ROCK;
    const expectedAction = {
      type: movesActions.PLAYER_MOVED,
      payload: {
        move
      }
    };
    expect(movesActions.playerMoved(move)).toEqual(expectedAction);

    const secondMove = PAPER;
    const secondExpectedAction = {
      type: movesActions.PLAYER_MOVED,
      payload: {
        move: secondMove
      }
    };
    expect(movesActions.playerMoved(secondMove)).toEqual(secondExpectedAction);

    const thirdMove = SCISSORS;
    const thirdExpectedAction = {
      type: movesActions.PLAYER_MOVED,
      payload: {
        move: thirdMove
      }
    };
    expect(movesActions.playerMoved(thirdMove)).toEqual(thirdExpectedAction);
  });

  it('comp moved', () => {
    const move = SCISSORS;
    const expectedAction = {
      type: movesActions.COMP_MOVED,
      payload: {
        move
      }
    };
    expect(movesActions.compMoved(move)).toEqual(expectedAction);
  });
})
