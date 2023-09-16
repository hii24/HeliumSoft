import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/store/store';
import RootApp from './src/RootApp';

function App() {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

export default App;
