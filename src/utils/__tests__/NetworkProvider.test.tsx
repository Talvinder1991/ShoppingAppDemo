import 'react-native';
import React from 'react';
import { render, RenderAPI } from '../../utils/TestHelper';
import { NetworkProvider } from '../NetworkProvider';

describe('Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <NetworkProvider />
    );
  });
  test('is click here is working', () => {
    const { getByTestId } = screen;
    const element = getByTestId('NetworkView');
    expect(element).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
});