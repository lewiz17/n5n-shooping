import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorageCart = (state) => {
  window.localStorage.setItem(
    "cartProducts",
    JSON.stringify(state.cartProducts)
  );
};

const initialState = {
  cartProducts: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  cartTotalQt: 0,
  cartTotalAmount: 0,
  purchaseMade: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { quantity } = action.payload;

      const productExistIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productExistIndex >= 0) {
        state.cartProducts[productExistIndex] = {
          ...state.cartProducts[productExistIndex],
          cartQuantity:
            state.cartProducts[productExistIndex].cartQuantity + quantity >
            state.cartProducts[productExistIndex].amount
              ? state.cartProducts[productExistIndex].amount
              : state.cartProducts[productExistIndex].cartQuantity + quantity,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: quantity };
        state.cartProducts.push(tempProductItem);
      }
      updateLocalStorageCart(state);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.cartProducts.find((item) => item.id === productId);

      if (product) {
        product.quantity = quantity;
        product.cartQuantity = quantity;
      }

      updateLocalStorageCart(state);
    },
    totalCart(state) {
      let { total, quantity } = state.cartProducts.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQt = quantity;
      state.cartTotalAmount = total;
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const newState = {
        ...state,
        cartProducts: state.cartProducts.filter((item) => item.id !== id),
      };
      updateLocalStorageCart(newState);
      return newState;
    },
    clearCart(state) {
      state.cartProducts = [];
      updateLocalStorageCart(state);
    },
    updatePurchase(state, action) {
      const { pmade } = action.payload;
      state.purchaseMade = pmade;
      updateLocalStorageCart(state);
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  totalCart,
  removeFromCart,
  clearCart,
  updatePurchase,
} = cartSlice.actions;
export default cartSlice.reducer;
