'use client'
import { ICart } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";


// Define the initial state using that type
const initialState: ICart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addtoCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 6000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
   
    },
    delItem(state,{payload}){
      return state.filter((val)=>val.uuid !== payload)
    }
  },
});

export const {addtoCart,delItem} = cartSlice.actions;

export default cartSlice.reducer;
