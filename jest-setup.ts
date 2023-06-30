import '@testing-library/react-native';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockBackHandler from 'react-native/Libraries/Utilities/__mocks__/BackHandler.js';

jest.mock(
  'react-native/Libraries/Utilities/BackHandler',
  () => mockBackHandler
);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      push: jest.fn(),
      popToTop: jest.fn(),
      replace: jest.fn()
    })
  };
});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      push: jest.fn(),
      popToTop: jest.fn(),
      replace: jest.fn()
    })
  };
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    setItem: jest.fn(),
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers)
  };
});

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: async (...args) => args,
    setItem: async (...args) => args,
    removeItem: async (...args) => args
  };
});

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.setTimeout(30000);

