import aiMiddleware from '../../../src/js/middleware/ai-middleware';
import * as gameActions from '../../../src/js/actions/game';
import * as movesActions from '../../../src/js/actions/moves';
import { ROCK, PAPER, SCISSORS } from '../../../src/js/constants/moves';

import { createMiddlewareStore } from '../../utils';

describe('MIDDLEWARE: AI Middleware', () => {
  it('should pass through actions using next', () => {
    const { next, invoke } = createMiddlewareStore(aiMiddleware);
    const testAction = { type: 'TEST' };

    invoke(testAction);
    expect(next).toHaveBeenCalledWith(testAction);
  });

  it('should dispatch computer move after player moved', () => {
    const { store, invoke } = createMiddlewareStore(aiMiddleware);

    invoke(movesActions.playerMoved(ROCK));
    expect(store.dispatch).toHaveBeenCalledWith({
      type: movesActions.COMP_MOVED,
      payload: {
        move: expect.any(String)
      }
    });
  });

  describe('should resolve game state after player and comp have moved', () => {
    describe('should dispatch PLAYER_WON action', () => {
      [{
        moves: {
          player: ROCK,
          comp: SCISSORS
        }
      }, {
        moves: {
          player: PAPER,
          comp: ROCK
        }
      }, {
        moves: {
          player: SCISSORS,
          comp: PAPER
        }
      }].forEach(state =>
        it(`player moved ${state.moves.player}, computer moved ${state.moves.comp}`, () => {
          const { store, invoke } = createMiddlewareStore(aiMiddleware, state);

          invoke(movesActions.compMoved());
          expect(store.dispatch).toHaveBeenCalledWith(gameActions.playerWon());
        })
      );
    });

    describe('should dispatch COMP_WON action', () => {
      [{
        moves: {
          player: ROCK,
          comp: PAPER
        }
      }, {
        moves: {
          player: PAPER,
          comp: SCISSORS
        }
      }, {
        moves: {
          player: SCISSORS,
          comp: ROCK
        }
      }].forEach(state =>
        it(`player moved ${state.moves.player}, computer moved ${state.moves.comp}`, () => {
          const { store, invoke } = createMiddlewareStore(aiMiddleware, state);

          invoke(movesActions.compMoved());
          expect(store.dispatch).toHaveBeenCalledWith(gameActions.compWon());
        })
      );
    });

    describe('should dispatch DRAWN_GAME action', () => {
      [{
        moves: {
          player: ROCK,
          comp: ROCK
        }
      }, {
        moves: {
          player: PAPER,
          comp: PAPER
        }
      }, {
        moves: {
          player: SCISSORS,
          comp: SCISSORS
        }
      }].forEach(state =>
        it(`player moved ${state.moves.player}, computer moved ${state.moves.comp}`, () => {
          const { store, invoke } = createMiddlewareStore(aiMiddleware, state);

          invoke(movesActions.compMoved());
          expect(store.dispatch).toHaveBeenCalledWith(gameActions.drawnGame());
        })
      );
    });
  });
});
