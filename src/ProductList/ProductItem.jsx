// import React from "react";
// import { Link } from "react-router-dom";
// import product1 from '../images/category-baby-care.jpg'
// import product2 from '../images/category-atta-rice-dal.jpg'
// import product3 from '../images/category-bakery-biscuits.jpg'
// import product4 from '../images/category-chicken-meat-fish.jpg'
// import product5 from '../images/category-cleaning-essentials.jpg'
// import product6 from '../images/category-dairy-bread-eggs.jpg'
// import product7 from '../images/category-instant-food.jpg'
// import product8 from '../images/category-pet-care.jpg'
// import product9 from '../images/category-snack-munchies.jpg'
// import product10 from '../images/category-tea-coffee-drinks.jpg'
// import Swal from 'sweetalert2';

// const ProductItem = () => {


//   const handleAddClick = () => {
//     Swal.fire({
//       icon: 'success',
//       title: 'Added to Cart',
//       text: "Product has been added to your cart!",
//       showConfirmButton: true,
//       timer: 3000,
//     });
//   };
//   return (
//     <div>
//       {/* Popular Products Start*/}
//       <section className="my-lg-14 my-8">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 mb-6">
//             <div className="section-head text-center mt-8" >
//               <h3 className='h3style' data-title="Popular Products">Popular Products</h3>
//               <div className="wt-separator bg-primarys">
//               </div>
//               <div className="wt-separator2 bg-primarys">
//               </div>
//               {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
//             </div>
//             </div>
//           </div>
//           <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative ">
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-danger">Sale</span>
//                     </div>
//                     <Link href="#!">
//                       {" "}
//                       <img
//                         src={product1}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid "
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Snack &amp; Munchies</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Haldiram's Sev Bhujia
//                     </Link>
//                   </h2>
//                   <div>
//                     <small className="text-warning">
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5(149)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$18</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $24
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-success">14%</span>
//                     </div>
//                     <Link href="#!">
//                       <img
//                         src={product2}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Bakery &amp; Biscuits</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       NutriChoice Digestive{" "}
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (25)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$24</span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Popular Products End*/}
//     </div>
//   );
// };

// export default ProductItem;


// import React from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// import product1 from "../images/category-baby-care.jpg";
// import product2 from "../images/category-atta-rice-dal.jpg";
// import product3 from '../images/category-bakery-biscuits.jpg'
// import product4 from '../images/category-chicken-meat-fish.jpg'
// import product5 from '../images/category-cleaning-essentials.jpg'
// import product6 from '../images/category-dairy-bread-eggs.jpg'
// import product7 from '../images/category-instant-food.jpg'
// import product8 from '../images/category-pet-care.jpg'
// import product9 from '../images/category-snack-munchies.jpg'
// import product10 from '../images/category-tea-coffee-drinks.jpg'

// const ProductItem = () => {
//   const dispatch = useDispatch();

//   const handleAddClick = (product) => {
//     dispatch(addItem(product));
//     Swal.fire({
//       icon: "success",
//       title: "Added to Cart",
//       text: "Product has been added to your cart!",
//       showConfirmButton: true,
//       timer: 3000,
//     });
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Haldiram's Sev Bhujia",
//       price: 18,
//       image: product1,
//     },
//     {
//       id: 2,
//       name: "NutriChoice Digestive",
//       price: 24,
//       image: product2,
//     },
//     {
//       id: 3,
//       name: "Dove Men+Care Body Wash",
//       price: 25,
//       image: product1,
//       },
//       {
//         id: 4,
//         name: "Lays Potato Chips",
//         price: 15,
//         image: product2,
//         },
//         {
//           id: 5,
//           name: "Kurkure Masala Munch",
//           price: 20,
//           image: product3,
//           },
//           {
//             id: 6,
//             name: "Parle Monaco",
//             price: 12,
//             image: product4,
//             },
//             {
//               id: 7,
//               name: "Kurkure Masala Munch",
//               price: 20,
//               image: product5,
//               },
//               {
//                 id: 8,
//                 name: "Parle Monaco",
//                 price: 12,
//                 image: product6,
//                 },
//                 {
//                   id: 9,
//                   name: "Kurkure Masala Munch",
//                   price: 20,
//                   image: product7,
//                   },
//                   {
//                     id: 10,
//                     name: "Parle Monaco",
//                     price: 12,
//                     image: product8,
//             },
//             {
//               id: 11,
//               name: "Kurkure Masala Munch",
//               price: 20,
//               image: product9,
//               },
//               {
//                 id: 12,
//                 name: "Parle Monaco",
//                 price: 12,
//                 image: product10,
//             }
          
//   ];

//   return (
//     <section className="my-lg-14 my-8">
//       <div className="container">
//         <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
//           {products.map((product) => (
//             <div className="col fade-zoom" key={product.id}>
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     <Link to="#!">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       to="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       {product.name}
//                     </Link>
//                   </h2>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">${product.price}</span>
//                     </div>
//                     <div>
//                       <button
//                         className="btn btn-primary btn-sm"
//                         onClick={() => handleAddClick(product)}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductItem;


import React from "react";
import { useDispatch } from "react-redux";
import { handleAddClick } from "../utils/cartUtils"; // Import the function
import { Link } from "react-router-dom";

import product1 from "../images/category-baby-care.jpg";
import product2 from "../images/category-atta-rice-dal.jpg";
import product3 from '../images/category-bakery-biscuits.jpg';
import product4 from '../images/category-chicken-meat-fish.jpg';
import product5 from '../images/category-cleaning-essentials.jpg';
import product6 from '../images/category-dairy-bread-eggs.jpg';
import product7 from '../images/category-instant-food.jpg';
import product8 from '../images/category-pet-care.jpg';
import product9 from '../images/category-snack-munchies.jpg';
import product10 from '../images/category-tea-coffee-drinks.jpg';
import ProductCard from "../pages/Shop/ProductCard";

const ProductItem = () => {

  const dispatch = useDispatch();


  const products = [
    {
      id: 1,
      name: "Haldiram's Bhujia Sev",
      category: "Snacks & Namkeen",
      price: 14.7,
      originalPrice: 20,
      image: product1,
      badge: "Sale",
      badgeColor: "bg-danger",
      rating: 4.5,
      reviews: 149,
    },
    {
      id: 2,
      name: "Britannia Digestive Biscuits",
      category: "Bakery & Biscuits",
      price: 3.5,
      originalPrice: null,
      image: product2,
      badge: "14%",
      badgeColor: "bg-success",
      rating: 4.5,
      reviews: 25,
    },
    {
      id: 3,
      name: "Dove Men+Care Body Wash",
      category: "Personal Care",
      price: 25,
      originalPrice: 30,
      image: product3,
      badge: "New",
      badgeColor: "bg-info",
      rating: 4.7,
      reviews: 30,
    },
    {
      id: 4,
      name: "Lay's Classic Salted Chips",
      category: "Snacks & Namkeen",
      price: 2.5,
      originalPrice: 3.0,
      image: product4,
      badge: "Offer",
      badgeColor: "bg-warning",
      rating: 4.3,
      reviews: 200,
    },
    {
      id: 5,
      name: "Parachute Coconut Oil",
      category: "Personal Care",
      price: 5,
      originalPrice: 6.5,
      image: product5,
      badge: null,
      badgeColor: null,
      rating: 4.6,
      reviews: 50,
    },
    {
      id: 6,
      name: "Tata Sampann Toor Dal",
      category: "Groceries",
      price: 10,
      originalPrice: 12,
      image: product6,
      badge: "Discount",
      badgeColor: "bg-success",
      rating: 4.8,
      reviews: 75,
    },
    {
      id: 7,
      name: "Amul Butter",
      category: "Dairy Products",
      price: 3,
      originalPrice: 4,
      image: product7,
      badge: "Fresh",
      badgeColor: "bg-primary",
      rating: 4.9,
      reviews: 100,
    },
    {
      id: 8,
      name: "Brooke Bond Red Label Tea",
      category: "Beverages",
      price: 4,
      originalPrice: 5,
      image: product8,
      badge: null,
      badgeColor: null,
      rating: 4.7,
      reviews: 60,
    },
  ];


  return (
    <section className="my-lg-14 my-8">
            <div className="container">
              <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
                {products.map((product) => (
                  <div className="col-6 col-md-4 col-lg-3">
                        <div className="card card-product">
                          <div className="card-body">
                            {/* Badge */}
                            <div className="text-center position-relative">
                              <div className={`position-absolute top-0 start-0`}>
                                <span className={`badge ${product.badgeColor}`}>{product.badge}</span>
                              </div>
                              {/* Image */}
                              <Link to="#!">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="mb-3 img-fluid"
                                />
                              </Link>
                              {/* Action Buttons */}
                              <div className="card-product-action">
                                <Link
                                  to="#!"
                                  className="btn-action"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  <i className="bi bi-eye" title="Quick View"></i>
                                </Link>
                                <Link to="#!" className="btn-action" title="Wishlist">
                                  <i className="bi bi-heart"></i>
                                </Link>
                                <Link to="#!" className="btn-action" title="Compare">
                                  <i className="bi bi-arrow-left-right"></i>
                                </Link>
                              </div>
                            </div>
                  
                            {/* Category */}
                            <div className="text-small mb-1">
                              <Link to="#!" className="text-decoration-none text-muted">
                                <small>{product.category}</small>
                              </Link>
                            </div>
                  
                            {/* Product Name */}
                            <h2 className="fs-6">
                              <Link to="#!" className="text-inherit text-decoration-none">
                                {product.name}
                              </Link>
                            </h2>
                  
                            {/* Rating */}
                            <div>
                              <small className="text-warning">
                                {[...Array(5)].map((_, index) => (
                                  <i
                                    key={index}
                                    className={`bi ${
                                      index < Math.floor(product.rating)
                                        ? "bi-star-fill"
                                        : index < product.rating
                                        ? "bi-star-half"
                                        : "bi-star"
                                    }`}
                                  />
                                ))}
                              </small>
                              <span className="text-muted small"> {product.rating} ({product.reviews})</span>
                            </div>
                  
                            {/* Price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                <span className="text-dark">${product.price}</span>
                                {product.originalPrice && (
                                  <span className="text-decoration-line-through text-muted ms-2">
                                    ${product.originalPrice}
                                  </span>
                                )}
                              </div>
                              {/* Add Button */}
                              <div>
                                <Link to="#!" className="btn btn-primary btn-sm" onClick={() => handleAddClick(dispatch, product)}>
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
                                    className="feather feather-plus"
                                  >
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                  </svg>{" "}
                                  Add
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                ))}
              </div>
            </div>
    </section>
  );
};

export default ProductItem;
