import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] },
  reducers: {
    setWishlist: (state, action) => {
      state.items = action.payload;
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
