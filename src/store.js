import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    data: productsReducer,
  },
});

export default store;
