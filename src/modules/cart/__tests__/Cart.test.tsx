import 'react-native';
import React from 'react';
import { fireEvent, render, RenderAPI } from '../../../utils/TestHelper';
import { Cart } from '../screens/Cart';

const mockDispatch = jest.fn();

const reduxDummyData = {
  cart: {
    cartList: [
      {
        "id": 1,
        "colour": "Black",
        "name": "Black Sheet Strappy Textured Glitter Bodycon Dress",
        "price": 10,
        "img": "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
        "count": 0
      },
      {
        "id": 2,
        "colour": "Stone",
        "name": "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
        "price": 4,
        "img": "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024",
        "count": 0
      },
      {
        "id": 3,
        "colour": "Black",
        "name": "Black Frill Tie Shoulder Bodycon Dress",
        "price": 7.99,
        "img": "https://cdn-img.prettylittlething.com/d/c/3/3/dc337260f9ecefdb99a8c8e98cd73ccb1b79cea5_cmb6804_4.jpg?imwidth=1024",
        "count": 0
      },
      {
        "id": 5,
        "colour": "Red",
        "name": "Red Pin Stripe Belt T Shirt Dress",
        "price": 17,
        "img": "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
        "count": 0
      }
    ]
  }
}

describe('Should render correctly', () => {
  let screen: RenderAPI;
  beforeEach(() => {
    screen = render(
      <Cart />,
      { initialState: { ...reduxDummyData } }
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