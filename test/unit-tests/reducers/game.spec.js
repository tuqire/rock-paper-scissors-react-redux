import gameReducer from '../../../src/js/reducers/game';
import { PLAYER_WON, DRAWN_GAME, COMP_WON, RESET_GAME } from '../../../src/js/actions/game';
import { PLAYER_MOVED } from '../../../src/js/actions/moves';
import { PENDING, PLAYER, DRAW, COMP } from '../../../src/js/constants/game';

describe('REDUCER: game state', () => {
  it('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual({
      status: PENDING,
      winCounter: 0,
      lossCounter: 0,
      disabled: false
    });
  });

  it('should handle the PLAYER_MOVED action', () => {
    expect(
      gameReducer(undefined, {
        type: PLAYER_MOVED
      })
    ).toEqual({
      status: PENDING,
      winCounter: 0,
      lossCounter: 0,
      disabled: true
    });

    expect(
      gameReducer({
        status: PENDING,
        winCounter: 5,
        lossCounter: 5
      }, {
        type: PLAYER_MOVED
      })
    ).toEqual({
      status: PENDING,
      winCounter: 5,
      lossCounter: 5,
      disabled: true
    });
  });

  it('should handle the PLAYER_WON action', () => {
    expect(
      gameReducer(undefined, {
        type: PLAYER_WON
      })
    ).toEqual({
      status: PLAYER,
      winCounter: 1,
      lossCounter: 0,
      disabled: false
    });

    expect(
      gameReducer({
        status: PENDING,
        winCounter: 5,
        lossCounter: 5
      }, {
        type: PLAYER_WON
      })
    ).toEqual({
      status: PLAYER,
      winCounter: 6,
      lossCounter: 5,
      disabled: false
    });
  });

  it('should handle the DRAWN_GAME action', () => {
    expect(
      gameReducer(undefined, {
        type: DRAWN_GAME
      })
    ).toEqual({
      status: DRAW,
      winCounter: 0,
      lossCounter: 0,
      disabled: false
    });

    expect(
      gameReducer({
        status: PENDING,
        winCounter: 5,
        lossCounter: 5
      }, {
        type: DRAWN_GAME
      })
    ).toEqual({
      status: DRAW,
      winCounter: 5,
      lossCounter: 5,
      disabled: false
    });
  });

  it('should handle the COMP_WON action', () => {
    expect(
      gameReducer(undefined, {
        type: COMP_WON
      })
    ).toEqual({
      status: COMP,
      winCounter: 0,
      lossCounter: 1,
      disabled: false
    });

    expect(
      gameReducer({
        status: PENDING,
        winCounter: 5,
        lossCounter: 5
      }, {
        type: COMP_WON
      })
    ).toEqual({
      status: COMP,
      winCounter: 5,
      lossCounter: 6,
      disabled: false
    });
  });

  it('should handle the RESET_GAME action', () => {
    expect(
      gameReducer(undefined, {
        type: RESET_GAME
      })
    ).toEqual({
      status: PENDING,
      winCounter: 0,
      lossCounter: 0,
      disabled: false
    });

    expect(
      gameReducer({
        status: COMP,
        winCounter: 5,
        lossCounter: 5
      }, {
        type: RESET_GAME
      })
    ).toEqual({
      status: PENDING,
      winCounter: 0,
      lossCounter: 0,
      disabled: false
    });
  });
})
