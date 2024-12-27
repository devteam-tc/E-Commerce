import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  try {
    const savedState = localStorage.getItem('cartState');
    return savedState ? JSON.parse(savedState) : { items: [] };
  } catch (e) {
    console.warn("Error reading cart state from localStorage:", e);
    return { items: [] };
  }
};

const initialState = getInitialState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    removeCartItem(state, action) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
    }
,
    updateQuantity(state, action) {
        const item = state.items.find(item => item.id === action.payload.id);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      },
    incrementQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // Optionally remove item if quantity is 1
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      }
    },
  },
});

export const {
  setCart,
  addItem,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  removeCartItem
} = cartSlice.actions;
export default cartSlice.reducer;
