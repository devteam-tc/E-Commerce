import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import { removeFromWishlist, setWishlist } from "../../redux/slices/wishlistSlice"; // Import actions
import ScrollToTop from "../ScrollToTop";

const ShopWishList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items); // Get wishlist from Redux state
  const [loaderStatus, setLoaderStatus] = React.useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);

    // Initialize wishlist from localStorage when the component mounts
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    dispatch(setWishlist(storedWishlist)); // Dispatch to set the wishlist in Redux state
  }, [dispatch]);

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromWishlist(productId)); // Dispatch remove action to Redux
  };

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <section className="my-14">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-lg-10">
                  <div className="mb-8">
                    <h1 className="mb-1">My Wishlist</h1>
                    <p>There are {wishlist.length} products in this wishlist.</p>
                  </div>
                  <div>
                    {wishlist.length === 0 ? (
                      <div className="text-center">
                        <h1>No Wishlist Items Found</h1>
                        <button className="btn btn-primary mt-3">Continue Shopping</button>
                      </div>
                    ) : (
                      <div className="table-responsive">
                        <table className="table text-nowrap">
                          <thead className="table-light">
                            <tr>
                              <th />
                              <th>Product</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            {wishlist.map((product) => (
                              <tr key={product.id}>
                                <td className="align-middle">
                                  <Link to="#">
                                    <img
                                      src={product.image}
                                      className="img-fluid icon-shape icon-xxl"
                                      alt={product.name}
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle">
                                  <div>
                                    <h5 className="fs-6 mb-0">
                                      <Link to="#" className="text-inherit">
                                        {product.name}
                                      </Link>
                                    </h5>
                                    <small>{product.unit}</small>
                                  </div>
                                </td>
                                <td className="align-middle">${product.price}</td>
                                <td className="align-middle">
                                  <span className={`badge ${product.inStock ? "bg-success" : "bg-danger"}`}>
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                  </span>
                                </td>
                                <td className="align-middle text-center">
                                  <Link
                                    to="#"
                                    className="text-muted"
                                    onClick={() => handleRemoveProduct(product.id)}
                                  >
                                    <i className="fas fa-trash-alt"></i>
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ShopWishList;
