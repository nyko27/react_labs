import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let currentItem = state.items.find(
        (cheese) => cheese.id === action.payload.id
      );
      if (currentItem) {
        currentItem.count++;
      } else {
        action.payload.count = 1;
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      let itemToDelete = state.items.find(
        (cheese) => cheese.id === action.payload.id
      );
      itemToDelete.count = 0;
    },

    decrement: (state, action) => {
      let itemToDelete = state.items.find(
        (cheese) => cheese.id === action.payload.id
      );
      itemToDelete.count --;
    },

    increment: (state, action) => {
      let itemToDelete = state.items.find(
        (cheese) => cheese.id === action.payload.id
      );
      itemToDelete.count ++
    },


  },
});

export const { addToCart, removeFromCart, decrement, increment } = itemSlice.actions;

export default itemSlice.reducer;