import { store } from "../store/store";
import { setWishlistCount } from "../store/wishlistSlice";

export const updateWishlist = (newWishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(newWishlist));

  // Dispatch Redux action to update count
  store.dispatch(setWishlistCount(newWishlist.length));
};
