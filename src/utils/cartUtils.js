import { addItem } from "./cartSlice";
import Swal from "sweetalert2";

// Export the handleAddClick function
export const handleAddClick = (dispatch, product) => {
  dispatch(addItem(product));
  Swal.fire({
    icon: "success",
    title: "Added to Cart",
    text: "Product has been added to your cart!",
    showConfirmButton: true,
    timer: 3000,
  });
};
