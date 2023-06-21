import { products as initProducts } from "../mocks/products.json";
import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorageProducts = (state) => {
  window.localStorage.setItem("productList", JSON.stringify(state.products));
};

const initialState = {
  products: localStorage.getItem("productList")
    ? JSON.parse(localStorage.getItem("productList"))
    : initProducts,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let tempProductItem = { ...action.payload };
      state.products.push(tempProductItem);
      updateLocalStorageProducts(state);
    },
    /* Simulate purchase action (Update amount for each product depending cart)*/
    purchaseProduct: (state, action) => {
      const { productId, amount } = action.payload;
      const productIndex = state.products.findIndex(
        (item) => item.id === productId
      );
      if (productIndex !== -1) {
        state.products[productIndex].amount -= amount;
        if (state.products[productIndex].amount === 0) {
          const newState = {
            ...state,
            products: state.products.filter((item) => item.id !== productId),
          };
          updateLocalStorageProducts(newState);
        }
        updateLocalStorageProducts(state);
      }
    },
  },
});

export const { addProduct, purchaseProduct } = productsSlice.actions;

export default productsSlice.reducer;
