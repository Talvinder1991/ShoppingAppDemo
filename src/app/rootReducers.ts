import { combineReducers } from 'redux';
import homeReducer from '../modules/home/data/homeSlice';
import cartReducer from '../modules/cart/data/cartSlice';

export const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer,
});