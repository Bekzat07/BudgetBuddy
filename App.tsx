import React from 'react';

import AppNavigator from './src/navigator/appNavigator';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <AppNavigator />
      </GluestackUIProvider>
    </Provider>
  );
};

export default App;
