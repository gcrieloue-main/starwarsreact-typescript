import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { createRootReducer } from './reducers';
import { UserStore } from '../modules/user';

export type Store = {
  user: UserStore;
};

/**
 * Store configuration
 * @param initialState
 */
export const configureStore = () => {
  // Register reducers
  const rootReducer = createRootReducer();
  const middlewares: Middleware[] = [thunk];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const mw = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, composeEnhancers(mw));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
