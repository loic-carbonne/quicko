import { applyMiddleware, createStore, Store, DeepPartial } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer, { RootState } from './reducers';

import { AsyncNodeStorage } from 'redux-persist-node-storage';

const persistConfig = {
  key: 'codai.json',
  storage: new AsyncNodeStorage('./')
};

const configureStore = (initialState?: DeepPartial<RootState>): Store<RootState | undefined> => {
  const middlewares: any[] = [];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  return createStore(persistedReducer, initialState, enhancer);
};

const store = configureStore();

if (typeof module.hot !== 'undefined') {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export const persistor = persistStore(store);

export default store;
