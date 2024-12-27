import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../redux/slices/wishlistSlice"; 

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
