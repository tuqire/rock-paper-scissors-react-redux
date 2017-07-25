export const createMiddlewareStore = (middleware, state = {}) => {
  const _middleware = middleware;
  const store = {
    getState: jest.fn(() => state),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => _middleware(store)(next)(action);

  return { store, next, invoke };
};
