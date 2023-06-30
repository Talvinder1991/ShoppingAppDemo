import 'react-native';
import React from 'react';
import { render, RenderAPI } from '../utils/TestHelper';
import App from '../../App';

describe('Should render correctly', () => {
  test('is click here is working', () => {
    let screen: RenderAPI;
    screen = render(
      <App />
    );
    const { getByTestId } = screen;
    const element = getByTestId('App');
    expect(element).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
});