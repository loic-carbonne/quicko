import React, { FunctionComponent } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import PlaybooksPage from './components/PlaybooksPage';
import store, { persistor } from './shared/store';
import { PersistGate } from 'redux-persist/integration/react';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = (Component: FunctionComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component />
        </PersistGate>
      </Provider>
    </AppContainer>,
    mainElement
  );
};

render(PlaybooksPage);
