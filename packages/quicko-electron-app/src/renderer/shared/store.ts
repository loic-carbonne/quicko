import { applyMiddleware, createStore, Store, DeepPartial } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { ipcRenderer } from 'electron';

import rootReducer, { RootState } from './reducers';

import { CustomAsyncNodeStorage } from './custom-node-storage';

const quickoFileLocationParam = ipcRenderer.sendSync('get-quicko-file-location-param', '');

const persistConfig = {
  key: 'quicko.json',
  storage: new CustomAsyncNodeStorage(quickoFileLocationParam)
};

const configureStore = (initialState?: DeepPartial<RootState>): Store<RootState | undefined> => {
  const middlewares: any[] = [];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  // @ts-ignore next-line
  return createStore(persistedReducer, initialState, enhancer);
};

const store = configureStore();

// @ts-ignore next-line
if (typeof module.hot !== 'undefined') {
  // @ts-ignore next-line
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export const persistor = persistStore(store);

export default store;
