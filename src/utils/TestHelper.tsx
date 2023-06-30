import React, { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { NavigationContainer } from '@react-navigation/native';
import { rootReducer } from '../app/rootReducers';

let store: Store;
interface State {
    initialState: Record<string, unknown>;
};

function render(
    ui: ReactElement,
    { initialState, ...renderOptions } = {} as State
) {
    store = configureStore({ reducer: rootReducer, preloadedState: initialState });
    function Wrapper({ children }: any) {
        return (
            <Provider store={store} >
                <NavigationContainer onStateChange={() => jest.fn()}>
                    {children}
                </NavigationContainer>
            </Provider>
        );
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { render, store };
