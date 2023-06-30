import 'react-native';
import React from 'react';
import { fireEvent, render, RenderAPI } from '../../../utils/TestHelper';
import { Header } from '../Header';
import { HomeListData } from '../../../app/TestData';

describe('Screen with Inital State Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Header currentRoute='Home' />,
      { initialState: { ...HomeListData } }
    );
  });
  test('is click here is working', () => {
    const { getByTestId } = screen;
    const element = getByTestId('Header');
    expect(element).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
  test('on goToCartButton, action should be dispatched', async () => {
    const { findByTestId } = screen;
    const goToCartButton = await findByTestId('GoToCart');
    expect(goToCartButton).toBeTruthy();
    fireEvent.press(goToCartButton);
  });
});

describe('Cart Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Header currentRoute='Cart' />,
      { initialState: { ...HomeListData } }
    );
  });
  test('is click here is working', () => {
    const { getByTestId } = screen;
    const element = getByTestId('Header');
    expect(element).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
  test('on goBackButton, action should be dispatched', async () => {
    const { findByTestId } = screen;
    const goBackButton = await findByTestId('GoBack');
    expect(goBackButton).toBeTruthy();
    fireEvent.press(goBackButton);
  });
});

describe('Home Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Header currentRoute='Home' />
    );
  });
  test('is click here is working', () => {
    const { getByTestId } = screen;
    const element = getByTestId('Header');
    expect(element).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
});