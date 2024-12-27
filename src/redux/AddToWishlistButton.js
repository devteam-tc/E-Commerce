import React from "react";
import { useDispatch } from "react-redux";

// Action creator for adding items to the wishlist
const addToWishlist = item => ({
  type: "ADD_TO_WISHLIST",
  payload: item,
});

const AddToWishlistButton = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(item)); // Dispatch the action
  };

  return (
    <button onClick={handleAddToWishlist}>
      Add to Wishlist
    </button>
  );
};

export default AddToWishlistButton;
