import 'react-native';
import React from 'react';
import { fireEvent, render, RenderAPI } from '../../../utils/TestHelper';
import { Home } from '../screens/Home';

describe('Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Home />
    );
  });
  test('is click here is working', () => {
    const { getByTestId } = screen;
    const element = getByTestId('Home');
    expect(element).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });

  test('on AddToCart Button, action should be dispatched', async () => {
    const { findByTestId } = screen;
    const addToCartButton = await findByTestId('AddToCart-0');
    expect(addToCartButton).toBeTruthy();
    fireEvent.press(addToCartButton);
  });

});