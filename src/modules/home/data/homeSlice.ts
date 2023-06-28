import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopListItems } from '../../../app/commonTypes';

export interface HomeState {
    homeList: Array<ShopListItems>;
}

const initialState: HomeState = {
    homeList: [],
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setHomeItemsList: (
            state,
            action: PayloadAction<Array<ShopListItems>>,
        ) => {
            state.homeList = action.payload;
        },
    },
});

export const { setHomeItemsList } =
    homeSlice.actions;

export default homeSlice.reducer;
