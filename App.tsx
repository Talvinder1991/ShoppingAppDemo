/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/app/store';
import RootStack from './src/navigation/RootStack';
import { NetworkProvider } from './src/utils/NetworkProvider';
import { Header } from './src/components/atoms/Header';
import styles from './App.styles';
import { globalStyle } from './src/core/GlobalStyles';
let persistor = persistStore(store);

const App = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const getCurrentRoute = (state: NavigationState | undefined) => {
    const index =
      state?.hasOwnProperty('index') && state.index > -1 ? state.index : -1;
    try {
      if (index > -1 && state?.routes && state.routes.length > index) {
        if (state.routes[index].state) {
          getCurrentRoute(state.routes[index].state);
        } else {
          setCurrentRoute(state.routes[index].name || '');
        }
      }
    } catch (err) { }
  };

  return (
    <View testID='App' style={globalStyle.flexOne}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NetworkProvider>
            <NavigationContainer onStateChange={(state: NavigationState | undefined) => {
              getCurrentRoute(state)
            }} >
              <SafeAreaView style={styles.container}>
                <Header currentRoute={currentRoute} />
                <RootStack />
              </SafeAreaView>
            </NavigationContainer>
          </NetworkProvider>
        </PersistGate>
      </Provider >
    </View>
  );
};

export default App;
