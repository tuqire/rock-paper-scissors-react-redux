export const PLAYER_MOVED = 'PLAYER_MOVED';

export const playerMoved = move => ({
  type: PLAYER_MOVED,
  payload: {
    move
  }
});

export const COMP_MOVED = 'COMP_MOVED';

export const compMoved = move => ({
  type: COMP_MOVED,
  payload: {
    move
  }
});
