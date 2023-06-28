import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopListItems } from '../../../app/commonTypes';

export interface CartState {
    cartList: Array<ShopListItems>;
}

const initialState: CartState = {
    cartList: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updatedCartList: (
            state,
            action: PayloadAction<Array<ShopListItems>>,
        ) => {
            state.cartList = action.payload;
        },
    },
});

export const { updatedCartList } =
    cartSlice.actions;

export default cartSlice.reducer;
