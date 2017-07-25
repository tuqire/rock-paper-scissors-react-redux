import * as gameActions from '../../../src/js/actions/game';

describe('ACTIONS: game state changes', () => {
  it('player won', () => {
    const expectedAction = {
      type: gameActions.PLAYER_WON
    };
    expect(gameActions.playerWon()).toEqual(expectedAction);
  });

  it('drawn game', () => {
    const expectedAction = {
      type: gameActions.DRAWN_GAME
    };
    expect(gameActions.drawnGame()).toEqual(expectedAction);
  });

  it('comp won', () => {
    const expectedAction = {
      type: gameActions.COMP_WON
    };
    expect(gameActions.compWon()).toEqual(expectedAction);
  });
})
