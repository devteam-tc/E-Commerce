// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// // Function to load the state from localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('cartState');
//     return serializedState ? JSON.parse(serializedState) : undefined;
//   } catch (e) {
//     console.warn("Failed to load state from localStorage:", e);
//     return undefined;
//   }
// };

// // Function to save the state to localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('cartState', serializedState);
//   } catch (e) {
//     console.warn("Failed to save state to localStorage:", e);
//   }
// };

// // Preloaded state from localStorage
// const preloadedState = {
//   cart: loadState(),
// };

// // Configure store
// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
//   preloadedState,
// });

// // Subscribe to store changes and save to localStorage
// store.subscribe(() => {
//   saveState(store.getState().cart);
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (e) {
    console.warn("Failed to save state to localStorage:", e);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Failed to load state from localStorage:", e);
    return undefined;
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: preloadedState ? { cart: preloadedState } : undefined,
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;
