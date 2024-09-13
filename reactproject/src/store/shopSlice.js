import { createSlice } from "@reduxjs/toolkit";

const shopInfoState = createSlice({
    name: 'shopInfos',

    initialState : {
        products: []
    },

    reducers: {
        getAllInfos : (state, action) => {
            return { ...state, products: action.payload };
        },
    },
})

export const { getAllInfos } = shopInfoState.actions;
export default shopInfoState.reducer;