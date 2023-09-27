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
      const { id, type } = action.payload;
      const itemToUpdate = state.products.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.status = type;
      }
    },
    updateProductDetails: (state, action) => {
      const { id, status, price, quantity, total } = action.payload;
      const itemToUpdate = state.products.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.status = status;
        itemToUpdate.price = price;
        itemToUpdate.quantity = quantity;
        itemToUpdate.total = total;
      }
    },
  },
});

export const { listProducts, updateProductStatus, updateProductDetails } =
  productSlice.actions;

export default productSlice.reducer;
