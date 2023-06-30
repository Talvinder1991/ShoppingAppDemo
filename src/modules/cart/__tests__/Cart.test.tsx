import 'react-native';
import React from 'react';
import { fireEvent, render, RenderAPI } from '../../../utils/TestHelper';
import { Cart } from '../screens/Cart';
import { CartListData } from '../../../app/TestData';

describe('Cart without blank data Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Cart />
    );
  });
  test('is click here is working', () => {
    const { getByTestId } = screen;
    const element = getByTestId('Cart');
    expect(element).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
});

describe('Cart with 1 count data Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Cart />,
      { initialState: { ...CartListData } }
    );
  });
  test('is click here is working', () => {
    const { getByTestId } = screen;
    const element = getByTestId('Cart');
    expect(element).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
  test('on Decrease Count Button, action should be dispatched', async () => {
    const { findByTestId } = screen;
    const decreaseCount = await findByTestId('Subtraction-0');
    expect(decreaseCount).toBeTruthy();
    fireEvent.press(decreaseCount);
  });
  test('on Increase Count Button, action should be dispatched', async () => {
    const { findByTestId } = screen;
    const increaseCount = await findByTestId('Addition-0');
    expect(increaseCount).toBeTruthy();
    fireEvent.press(increaseCount);
  });
});