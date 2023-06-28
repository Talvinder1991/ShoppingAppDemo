import 'react-native';
import React from 'react';
import { cleanup, renderer, fireEvent, act } from '../utils/TestHelper';
import configureStore from 'redux-mock-store';
import App from '../../App';

// jest.mock('../utils/TestHelper/analytics', () => {
//   const original = jest.requireActual('../utils/TestHelper/analytics');
//   return {
//     ...original,
//     trackEvent: jest.fn().mockReturnValue(true),
//   };
// });

const inputProps = {
  // loading: false,
  // dataList: [
  //   {
  //     voucherNumber: '1',
  //     name: 'Amit',
  //     staffCode: '12',
  //     headQuarter: 'New Delhi',
  //     voucherDate: '01 Jan 2023',
  //     grNumber: '00000000',
  //     grDate: '01 Jan 2023',
  //     transport: 'Express Way',
  //   },
  // ],
};
const mockState = {
  inventoryState: {

  },
};

const mockStore = configureStore([]);

const getStore = (useCaseSpecificStore: any) => {
  return mockStore(useCaseSpecificStore);
};

afterEach(cleanup);

function renderComponent(props, useCaseSpecificStore) {
  return renderer(
    <App {...props} />,
    getStore(useCaseSpecificStore)
  );
}
// describe('Should render correctly', () => {
//   test('is click here is working', () => {
//     const tempMockState = {
//       inventoryState: {},
//     };
//     const {getByTestId} = renderComponent(inputProps, tempMockState);
//     act(() => jest.runAllTimers());
//     const element = getByTestId('inventory_pending_sample_conatiner');
//     expect(element).toBeTruthy();
//   });
// });

test('snapshot test PendingSample', () => {
  expect(renderComponent(inputProps, mockState).toJSON()).toMatchSnapshot();
});