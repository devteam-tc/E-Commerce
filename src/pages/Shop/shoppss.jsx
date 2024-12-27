import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from 'react-loader-spinner';
import assortment from "../../images/assortment-citrus-fruits.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { dropdownData } from '../../utils/constant';
import { products } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Pagination from "./Pagination";

function Dropdown() {
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const navigate = useNavigate();
  const [selectedDiscount, setSelectedDiscount] = useState([]);

  const discountOptions = [
    { label: "Upto 5%", value: "upto5" },
    { label: "10% - 15%", value: "10-15" },
    { label: "15% - 25%", value: "15-25" },
    { label: "More than 25%", value: "more25" },
  ];

  const handleAddClick = (id) => {
    navigate(`/product/${id}`);
  };

  const [selectedStores, setSelectedStores] = useState(["eGrocery"]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRatings, setSelectedRatings] = useState([4]);

  const toggleStore = (store) => {
    setSelectedStores((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  const filterByDiscount = (product) => {
    if (selectedDiscount.length === 0) return true; // No discount filter applied
    const discount = product.discount || 0; // Assuming products have a `discount` field (as percentage)

    return selectedDiscount.some((selected) => {
      switch (selected) {
        case "upto5":
          return discount <= 5;
        case "10-15":
          return discount >= 10 && discount <= 15;
        case "15-25":
          return discount >= 15 && discount <= 25;
        case "more25":
          return discount > 25;
        default:
          return true;
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    const inStore = selectedStores.includes(product.store || "eGrocery");
    const inPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const inRating = selectedRatings.includes(Math.floor(product.rating));
    const inDiscount = filterByDiscount(product);
    return inStore && inPriceRange && inRating && inDiscount;
  });

  const handleAddProductClick = (productId) => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: `Product ID: ${productId} has been added to your cart!`,
      showConfirmButton: true,
      timer: 3000,
    });
  };

  const toggleDropdown = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productExists = wishlist.some((item) => item.id === product.id);
    
    if (productExists) {
      Swal.fire({
        icon: 'info',
        title: 'Already in Wishlist',
        text: `${product.name} is already in your wishlist.`,
      });
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      Swal.fire({
        icon: 'success',
        title: 'Added to Wishlist',
        text: `${product.name} has been added to your wishlist!`,
      });
    }
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
            wrapperStyle={{}}
            wrapperclassName="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <div className="container">
            <div className="row">
              {/* Vertical Dropdowns Column */}
              <h5 className="mb-3 mt-8">Categories</h5>
              <div className="col-md-3">
                {/* Other dropdown sections */}

                <div className="py-4">
                  <h5 className="mb-3">Discount</h5>
                  {discountOptions.map((discount) => (
                    <div className="form-check mb-2" key={discount.value}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={discount.value}
                        checked={selectedDiscount.includes(discount.value)}
                        onChange={() => {
                          if (selectedDiscount.includes(discount.value)) {
                            setSelectedDiscount(
                              selectedDiscount.filter((d) => d !== discount.value)
                            );
                          } else {
                            setSelectedDiscount([...selectedDiscount, discount.value]);
                          }
                        }}
                      />
                      <label className="form-check-label" htmlFor={discount.value}>
                        {discount.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cards Column */}
              <div className="col-lg-9 col-md-8">
                {/* Product cards */}
                <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div className="col" key={product.id}>
                        <div className="card card-product h-100">
                          <div className="card-body d-flex flex-column">
                            {/* Product Actions */}
                            <div className="card-product-action">
                              <Link
                                to="#!"
                                className="btn-action"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                              >
                                <i
                                  className="bi bi-eye"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Quick View"
                                />
                              </Link>
                              <button
                                onClick={() => addToWishlist(product)}
                                className="btn-action"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Wishlist"
                              >
                                <i className="bi bi-heart" />
                              </button>
                              <Link
                                to="#!"
                                className="btn-action"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Compare"
                              >
                                <i className="bi bi-arrow-left-right" />
                              </Link>
                            </div>
                            {/* Product Details */}
                            <div className="text-center">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="mb-3 img-fluid"
                                onClick={() => handleAddClick(product.id)}
                                target="_blank"
                              />
                            </div>

                            <div className="card-body">
                              <h2 className="fs-6">
                                <span>{product.name}</span>
                              </h2>
                              <div>
                                <small className="text-warning">
                                  {[...Array(Math.floor(product.rating))].map((_, index) => (
                                    <i key={index} className="bi bi-star-fill" />
                                  ))}
                                  {product.rating % 1 !== 0 && <i className="bi bi-star-half" />}
                                  {[...Array(5 - Math.floor(product.rating))].map((_, index) => (
                                    <i key={index} className="bi bi-star" />
                                  ))}
                                </small>
                              </div>
                              <p className="mb-1">
                                <small className="text-muted">{product.vendor}</small>
                              </p>
                              <div className="d-flex justify-content-between">
                                <span className="text-dark">${product.price}</span>
                                {product.originalPrice > product.price && (
                                  <span className="text-decoration-line-through text-muted">${product.originalPrice}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>No products found</div>
                  )}
                </div>
                <Pagination />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dropdown;
