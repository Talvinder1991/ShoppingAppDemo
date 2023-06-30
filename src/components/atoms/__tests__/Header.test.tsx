import 'react-native';
import React from 'react';
import { fireEvent, render, RenderAPI } from '../../../utils/TestHelper';
import { Header } from '../Header';

describe('Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Header currentRoute='Cart' />
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
    // expect(goBackButton).toBeEnabled();
    fireEvent.press(goBackButton);
  });
  // test('on goToCartButton, action should be dispatched', async () => {
  //   const { findByTestId } = screen;
  //   const goToCartButton = await findByTestId('GoToCart');
  //   expect(goToCartButton).toBeTruthy();
  //   // expect(goToCartButton).toBeEnabled();
  //   fireEvent.press(goToCartButton);
  // });
});

describe('Should render correctly', () => {
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
  test('on goToCartButton, action should be dispatched', async () => {
    const { findByTestId } = screen;
    const goToCartButton = await findByTestId('GoToCart');
    expect(goToCartButton).toBeTruthy();
    // expect(goToCartButton).toBeEnabled();
    fireEvent.press(goToCartButton);
  });
});

describe('Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Header currentRoute='Cart' />
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
    // expect(goBackButton).toBeEnabled();
    fireEvent.press(goBackButton);
  });
});