import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    listProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProductStatus: (state, action) => {
      console.log("action.payload", action.payload);
      const { id, type } = action.payload;
      const itemToUpdate = state.products.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.status = type;
      }
    },
  },
});

export const { listProducts, updateProductStatus } = productSlice.actions;

export default productSlice.reducer;
