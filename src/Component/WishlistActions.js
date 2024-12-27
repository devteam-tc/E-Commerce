import { useDispatch } from "react-redux";

const addToWishlist = item => ({
  type: "ADD_TO_WISHLIST",
  payload: item,
});

const Component = () => {
  const dispatch = useDispatch();

  const handleAddToWishlist = item => {
    dispatch(addToWishlist(item));
  };

  return (
    <button onClick={() => handleAddToWishlist({ id: 1, name: "Product" })}>
      Add to Wishlist
    </button>
  );
};
