import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeCartItem } from "../../utils/cartSlice";
import productimage1 from "../../images/product-img-1.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const ShopCart = () => {
  const [loaderStatus, setLoaderStatus] = useState(true); // Loader for initial delay
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  const handleQuantityChange = (id, change) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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
          <div>
            <section className="mb-lg-14 mb-8 mt-8">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="card py-1 border-0 mb-8">
                      <div>
                        <h1 className="fw-bold">Shopping Cart</h1>
                      </div>
                    </div>
                  </div>
                </div>
                {cartItems.length > 0 ? (
                  <div className="row">
                    <div className="col-lg-8 col-md-7">
                      <div className="py-3">
                        <div className="alert alert-danger p-2" role="alert">
                          You’ve got FREE delivery. Start{" "}
                          <Link to="#!" className="alert-link">
                            checkout now!
                          </Link>
                        </div>
                        <ul className="list-group list-group-flush">
                          {cartItems.map((item) => (
                            <li className="list-group-item py-3 py-lg-0 px-0 border-top" key={item.id}>
                              <div className="row align-items-center">
                                <div className="col-3 col-md-2">
                                  <img
                                    src={item.image || productimage1}
                                    alt="Ecommerce"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-4 col-md-5">
                                <h6 className="mb-0">{item.name}</h6>
                                <span>
                                  <small className="text-muted">.98 / lb</small>
                                </span>
                                <div className="mt-2 small">
                                  <Link
                                    to="#!"
                                    className="text-decoration-none text-inherit"
                                    onClick={() => dispatch(removeCartItem({ id: item.id }))}
                                  >
                                    <span className="me-1 align-text-bottom">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-trash-2 text-success"
                                      >
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1={10} y1={11} x2={10} y2={17} />
                                        <line x1={14} y1={11} x2={14} y2={17} />
                                      </svg>
                                    </span>
                                    <span className="text-muted">Remove</span>
                                  </Link>
                                </div>
                              </div>
                                
                                <div className="col-3 col-md-3 col-lg-3">
                                  <div className="input-group flex-nowrap justify-content-center">
                                    <button
                                      className="button-minus form-control text-center"
                                      onClick={() => handleQuantityChange(item.id, -1)}
                                    >
                                      -
                                    </button>
                                    <input
                                      type="number"
                                      value={item.quantity}
                                      className="quantity-field form-control text-center"
                                      aria-readonly
                                    />
                                    <button
                                      className="button-plus form-control text-center"
                                      onClick={() => handleQuantityChange(item.id, 1)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div className="col-1 text-lg-end text-start text-md-end col-md-2">
                                  <span className="fw-bold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="d-flex justify-content-between mt-4">
                          <Link to="#!" className="btn btn-primary">
                            Continue Shopping
                          </Link>
                          <Link to="#!" className="btn btn-dark">
                            Update Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-5">
                      <div className="mb-5 card mt-6">
                        <div className="card-body p-6">
                          <h2 className="h5 mb-4">Summary</h2>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                              <span>Item Subtotal</span>
                              <span>${calculateTotal()}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span>Service Fee</span>
                              <span>$3.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">Total</span>
                              <span className="fw-bold">
                                ${(parseFloat(calculateTotal()) + 3.0).toFixed(2)}
                              </span>
                            </li>
                          </ul>
                          <button className="btn btn-primary w-100 mt-3">
                            Checkout (${(parseFloat(calculateTotal()) + 3.0).toFixed(2)})
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center my-5">
                    <img src={require("../../images/empty_cart.gif")} alt="Empty Cart" className="mb-4" style={{ width: "250px" }} />
                    <h2>Your cart is empty!</h2>
                    <p>Start shopping to fill your cart with amazing products.</p>
                    <Link to="/" className="btn btn-primary">
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCart;
