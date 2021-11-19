import React from 'react';
import { Provider } from 'react-redux';

import InfoLodader from 'components/InfoLoader';
import ToggleTheme from 'components/ToggleTheme';

import { setupStore } from 'src/store/store';

const store = setupStore();

const App = () => (
  <Provider store={store}>
    <InfoLodader>
      <ToggleTheme />
    </InfoLodader>
  </Provider>
);

export default App;
