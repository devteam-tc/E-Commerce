import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ScrollToTop from "../ScrollToTop";
import { products } from "../../utils/constant"; // Assuming products are imported from constants

function Dropdown() {
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [selectedStores, setSelectedStores] = useState(["eGrocery"]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRatings, setSelectedRatings] = useState([4]);
  const navigate = useNavigate();

  const discountOptions = [
    { label: "Upto 5%", value: "upto5", min: 0, max: 5 },
    { label: "10% - 15%", value: "10-15", min: 10, max: 15 },
    { label: "15% - 25%", value: "15-25", min: 15, max: 25 },
    { label: "More than 25%", value: "more25", min: 25, max: 100 },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

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

  const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productExists = wishlist.some((item) => item.id === product.id);

    if (productExists) {
      Swal.fire({
        icon: "info",
        title: "Already in Wishlist",
        text: `${product.name} is already in your wishlist.`,
      });
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      Swal.fire({
        icon: "success",
        title: "Added to Wishlist",
        text: `${product.name} has been added to your wishlist!`,
      });
    }
  };

  const filterByDiscount = (product) => {
    if (!selectedDiscount) return true; // No discount filter applied
    const discount = product.discount || 0; // Assuming products have a `discount` field (as percentage)

    switch (selectedDiscount) {
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
  };

  const filteredProducts = products.filter((product) => {
    const inStore = selectedStores.includes(product.store || "eGrocery");
    const inPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const inRating = selectedRatings.includes(Math.floor(product.rating));
    const inDiscount = filterByDiscount(product);
    return inStore && inPriceRange && inRating && inDiscount;
  });

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
          <div className="container">
            <div className="row">
              {/* Sidebar */}
              <div className="col-md-3">
                <h5 className="mb-3">Stores</h5>
                {["eGrocery", "DealShare", "Dmart", "Blinkit", "BigBasket"].map(
                  (store) => (
                    <div className="form-check mb-2" key={store}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={store}
                        checked={selectedStores.includes(store)}
                        onChange={() => toggleStore(store)}
                      />
                      <label className="form-check-label" htmlFor={store}>
                        {store}
                      </label>
                    </div>
                  )
                )}

                <h5 className="mt-4 mb-3">Price Range</h5>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                />
                <p>Price: ${priceRange[0]} - ${priceRange[1]}</p>

                <h5 className="mt-4 mb-3">Rating</h5>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div className="form-check mb-2" key={rating}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`rating${rating}`}
                      checked={selectedRatings.includes(rating)}
                      onChange={() => toggleRating(rating)}
                    />
                    <label className="form-check-label" htmlFor={`rating${rating}`}>
                      {[...Array(rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning"></i>
                      ))}
                    </label>
                  </div>
                ))}

                <h5 className="mt-4 mb-3">Discount</h5>
                {discountOptions.map((discount) => (
                  <div className="form-check mb-2" key={discount.value}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="discount"
                      id={discount.value}
                      checked={selectedDiscount === discount.value}
                      onChange={() => setSelectedDiscount(discount.value)}
                    />
                    <label className="form-check-label" htmlFor={discount.value}>
                      {discount.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Products */}
              <div className="col-md-9">
                <div className="row">
                  {filteredProducts.map((product) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                      <div className="card">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">${product.price}</p>
                          <button
                            className="btn btn-primary"
                            onClick={() => addToWishlist(product)}
                          >
                            Add to Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dropdown;
