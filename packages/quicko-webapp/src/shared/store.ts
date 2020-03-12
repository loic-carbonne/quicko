import { applyMiddleware, createStore, Store, DeepPartial } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { RootState } from './reducers';

const configureStore = (initialState?: DeepPartial<RootState>): Store<RootState | undefined> => {
  const middlewares: any[] = [];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  // @ts-ignore next-line
  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();

// @ts-ignore next-line
if (typeof module.hot !== 'undefined') {
  // @ts-ignore next-line
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
