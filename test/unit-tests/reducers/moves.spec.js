import movesReducer from '../../../src/js/reducers/moves';
import { ROCK, PAPER, SCISSORS } from '../../../src/js/constants/moves';
import { PLAYER_MOVED, COMP_MOVED } from '../../../src/js/actions/moves';
import { RESET_GAME } from '../../../src/js/actions/game';

describe('REDUCER: moves state', () => {
  it('should return the initial state', () => {
    expect(movesReducer(undefined, {})).toEqual({});
  });

  it('should handle the PLAYER_MOVED action', () => {
    expect(
      movesReducer(undefined, {
        type: PLAYER_MOVED,
        payload: {
          move: ROCK
        }
      })
    ).toEqual({
      player: ROCK
    });

    expect(
      movesReducer(undefined, {
        type: PLAYER_MOVED,
        payload: {
          move: PAPER
        }
      })
    ).toEqual({
      player: PAPER
    });

    expect(
      movesReducer(undefined, {
        type: PLAYER_MOVED,
        payload: {
          move: SCISSORS
        }
      })
    ).toEqual({
      player: SCISSORS
    });
  });

  it('should handle the COMP_MOVED action', () => {
    expect(
      movesReducer(undefined, {
        type: COMP_MOVED,
        payload: {
          move: ROCK
        }
      })
    ).toEqual({
      comp: ROCK
    });

    expect(
      movesReducer({
        player: ROCK
      }, {
        type: COMP_MOVED,
        payload: {
          move: PAPER
        }
      })
    ).toEqual({
      player: ROCK,
      comp: PAPER
    });
  });

  it('should handle the RESET_GAME action', () => {
    expect(
      movesReducer({
        player: ROCK,
        comp: PAPER
      }, {
        type: RESET_GAME
      })
    ).toEqual({});
  });
})
