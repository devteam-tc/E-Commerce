// import React, { useEffect, useState } from "react";
// import { MagnifyingGlass } from 'react-loader-spinner'
// import assortment from "../../images/assortment-citrus-fruits.png";
// import { Link } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import product1 from "../../images/category-baby-care.jpg";
// import product2 from "../../images/category-atta-rice-dal.jpg";
// import ScrollToTop from "../ScrollToTop";
// import ProductCard from "./ProductCard";

// function Dropdown() {
//   const [openDropdowns, setOpenDropdowns] = useState([]);

//   const toggleDropdown = (index) => {
//     if (openDropdowns.includes(index)) {
//       setOpenDropdowns(openDropdowns.filter((item) => item !== index));
//     } else {
//       setOpenDropdowns([...openDropdowns, index]);
//     }
//   };

//      // loading
//      const [loaderStatus, setLoaderStatus] = useState(true);
//      useEffect(() => {
//        setTimeout(() => {
//          setLoaderStatus(false);
//        }, 1500);
//      }, []);

//     const products = [
//       {
//         id: 1,
//         name: "Haldiram's Sev Bhujia",
//         category: "Snack & Munchies",
//         price: 18,
//         originalPrice: 24,
//         image: product1,
//         badge: "Sale",
//         badgeColor: "bg-danger",
//         rating: 4.5,
//         reviews: 149,
//       },
//       {
//         id: 2,
//         name: "NutriChoice Digestive",
//         category: "Bakery & Biscuits",
//         price: 24,
//         originalPrice: null,
//         image: product2,
//         badge: "14%",
//         badgeColor: "bg-success",
//         rating: 4.5,
//         reviews: 25,
//       },
//       {
//         id: 3,
//         name: "Dove Men+Care Body Wash",
//         category: "Cleaning & Household",
//         price: 25,
//         originalPrice: null,
//         image: product1,
//         badge: "14%",
//         badgeColor: "bg-success",
//         rating: 4.5,
//         reviews: 25,
//       },
//       {
//         id: 4,
//         name: "Lays Potato Chips",
//         category: "Snack & Munchies",
//         price: 15,
//         originalPrice: null,
//         image: product2,
//         badge: "14%",
//         badgeColor: "bg-success",
//         rating: 4.5,
//         reviews: 25,
//       },
//     ];
    
   
//   return (
//     <div>
//     {loaderStatus ? (
//       <div className="loader-container">
//         {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
//         <MagnifyingGlass
// visible={true}
// height="100"
// width="100"
// ariaLabel="magnifying-glass-loading"
// wrapperStyle={{}}
// wrapperclassName="magnifying-glass-wrapper"
// glassColor="#c0efff"
// color="#0aad0a"
// />
//       </div>
//     ) : (
//       <>
//        <>
//             <ScrollToTop/>
//             </>
//     <div className="container ">
      

//       <div className="row">
//         {/* Vertical Dropdowns Column */}
//         <h5 className="mb-3 mt-8">Categories</h5>
//         <div className="col-md-3">
//           {dropdownData.map((dropdown, index) => (
//             <ul className="nav flex-column" key={index}>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="#"
//                   onClick={() => toggleDropdown(index)}
//                   aria-expanded={
//                     openDropdowns.includes(index) ? "true" : "false"
//                   }
//                   aria-controls={`categoryFlush${index + 1}`}
//                 >
//                   {dropdown.title} <i className="fa fa-chevron-down"  />

//                 </Link>
//                 <div
//                   className={`collapse ${
//                     openDropdowns.includes(index) ? "show" : ""
//                   }`}
//                   id={`categoryFlush${index + 1}`}
//                 >
//                   <div>
//                     <ul className="nav flex-column ms-3">
//                       {dropdown.items.map((item, itemIndex) => (
//                         <li className="nav-item" key={itemIndex}>
//                           <Link className="nav-link" to="#">
//                             {item} 
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           ))}
//           <div>
//             <div className="py-4">
//               <h5 className="mb-3">Stores</h5>
//               <div className="my-4">
//                 {/* input */}
//                 <input
//                   type="search"
//                   className="form-control"
//                   placeholder="Search by store"
//                 />
//               </div>
//               {/* form check */}
//               <div className="form-check mb-2">
//                 {/* input */}
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   defaultValue
//                   id="eGrocery"
//                   defaultChecked
//                 />
//                 <label className="form-check-label" htmlFor="eGrocery">
//                   E-Grocery
//                 </label>
//               </div>
//               {/* form check */}
//               <div className="form-check mb-2">
//                 {/* input */}
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   defaultValue
//                   id="DealShare"
//                 />
//                 <label className="form-check-label" htmlFor="DealShare">
//                   DealShare
//                 </label>
//               </div>
//               {/* form check */}

//             </div>
//             <div className="py-4">
//               {/* price */}
//               <h5 className="mb-3">Price</h5>
//               <div>
//                 {/* range */}
//                 <div id="priceRange" className="mb-3" />
//                 <small className="text-muted">Price:</small>{" "}
//                 <span id="priceRange-value" className="small" />
//               </div>
//             </div>
//             {/* rating */}
//             <div className="py-4">
//               <h5 className="mb-3">Rating</h5>
//               <div>
//                 {/* form check */}
//                 <div className="form-check mb-2">
//                   {/* input */}
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     defaultValue
//                     id="ratingFive"
//                   />
//                   <label className="form-check-label" htmlFor="ratingFive">
//                     <i className="bi bi-star-fill text-warning" />
//                     <i className="bi bi-star-fill text-warning " />
//                     <i className="bi bi-star-fill text-warning " />
//                     <i className="bi bi-star-fill text-warning " />
//                     <i className="bi bi-star-fill text-warning " />
//                   </label>
//                 </div>
//                 {/* form check */}
//                 <div className="form-check mb-2">
//                   {/* input */}
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     defaultValue
//                     id="ratingFour"
//                     defaultChecked
//                   />
//                   <label className="form-check-label" htmlFor="ratingFour">
//                     <i className="bi bi-star-fill text-warning" />
//                     <i className="bi bi-star-fill text-warning " />
//                     <i className="bi bi-star-fill text-warning " />
//                     <i className="bi bi-star-fill text-warning " />
//                     <i className="bi bi-star text-warning" />
//                   </label>
//                 </div>
//                 {/* form check */}
//                 <div className="form-check mb-2">
//                   {/* input */}
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     defaultValue
//                     id="ratingThree"
//                   />
//                   <label className="form-check-label" htmlFor="ratingThree">
//                     <i className="bi bi-star-fill text-warning" />
//                     <i className="bi bi-star-fill text-warning " />
//                     <i className="bi bi-star-fill text-warning " />
//                     <i className="bi bi-star text-warning" />
//                     <i className="bi bi-star text-warning" />
//                   </label>
//                 </div>
                
//               </div>
//             </div>
//             <div className="py-4">
//               {/* Banner Design */}
//               {/* Banner Content */}
//               <div className="position-absolute p-5 py-8">
//                 <h3 className="mb-0">Fresh Fruits </h3>
//                 <p>Get Upto 25% Off</p>
//                 <Link to="#" className="btn btn-dark">
//                   Shop Now
//                   <i className="feather-icon icon-arrow-right ms-1" />
//                 </Link>
//               </div>
//               {/* Banner Content */}
//               {/* Banner Image */}
//               {/* img */}
//               <img
//                 src={assortment}
//                 alt="assortment"
//                 className="img-fluid rounded-3"
//               />
//               {/* Banner Image */}
//             </div>
//             {/* Banner Design */}
//           </div>
//         </div>
//         {/* Cards Column */}
//         <div className="col-lg-9 col-md-8">
//           {/* card */}
//           <div className="card mb-4 bg-light border-0">
//             {/* card body */}
//             <div className=" card-body p-9">
//               <h1 className="mb-0">Snacks &amp; Munchies</h1>
//             </div>
//           </div>
//           {/* list icon */}
//           <div className="d-md-flex justify-content-between align-items-center">
//             <div>
//               <p className="mb-3 mb-md-0">
//                 {" "}
//                 <span className="text-dark">24 </span> Products found{" "}
//               </p>0
//             </div>
//             {/* icon */}
//             <div className="d-flex justify-content-between align-items-center">
//               <Link to="/ShopListCol" className="text-muted me-3">
//                 <i className="bi bi-list-ul" />
//               </Link>
//               <Link to="/ShopGridCol3" className=" me-3 active">
//                 <i className="bi bi-grid" />
//               </Link>
//               <Link to="/Shop" className="me-3 text-muted">
//                 <i className="bi bi-grid-3x3-gap" />
//               </Link>
//               <div className="me-2">
//                 {/* select option */}
//                 <select
//                   className="form-select"
//                   aria-label="Default select example"
//                 >
//                   <option selected>Show: 50</option>
//                   <option value={10}>10</option>
//                   <option value={20}>20</option>
//                   <option value={30}>30</option>
//                 </select>
//               </div>
//               <div>
//                 {/* select option */}
//                 <select
//                   className="form-select"
//                   aria-label="Default select example"
//                 >
//                   <option selected>Sort by: Featured</option>
//                   <option value="Low to High">Price: Low to High</option>
//                   <option value="High to Low"> Price: High to Low</option>
//                   <option value="Release Date"> Release Date</option>
//                   <option value="Avg. Rating"> Avg. Rating</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/* Product Card */}
//           <section className="my-lg-14 my-8">
//             <div className="container">
//               <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
//                 {products.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//             </div>
//           </section>
          
//           <div className="row mt-8">
//             <div className="col">
//               {/* nav */}
//               <nav>
//                 <ul className="pagination">
//                   <li className="page-item disabled">
//                     <Link
//                       className="page-link  mx-1 rounded-3 "
//                       to="#"
//                       aria-label="Previous"
//                     >
//                       <i className="fa fa-chevron-left" />
//                     </Link>
//                   </li>
//                   <li className="page-item ">
//                     <Link className="page-link  mx-1 rounded-3 active" to="#">
//                       1
//                     </Link>
//                   </li>
//                   <li className="page-item">
//                     <Link className="page-link mx-1 rounded-3 text-body" to="#">
//                       2
//                     </Link>
//                   </li>
//                   <li className="page-item">
//                     <Link className="page-link mx-1 rounded-3 text-body" to="#">
//                       ...
//                     </Link>
//                   </li>
//                   <li className="page-item">
//                     <Link className="page-link mx-1 rounded-3 text-body" to="#">
//                       12
//                     </Link>
//                   </li>
//                   <li className="page-item">
//                     <Link
//                       className="page-link mx-1 rounded-3 text-body"
//                       to="#"
//                       aria-label="Next"
//                     >
//                       <i className="fa fa-chevron-right" />
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
// )}
// </div>
//   );
// }

// const dropdownData = [
//   {
//     title: "Dairy, Bread & Eggs",
//     items: [
//       "Milk",
//       "Milk Drinks",
//       "Curd & Yogurt",
//       "Eggs",
//       "Bread",
//       "Buns & Bakery",
//       "Butter & More",
//       "Cheese",
//       "Paneer & Tofu",
//       "Cream & Whitener",
//       "Condensed Milk",
//       "Vegan Drinks",
//     ],
//   },
//   {
//     title: "Snacks & Munchies",
//     items: [
//       "Chips & Crisps",
//       "Nachos",
//       "Popcorn",
//       "Bhujia & Mixtures",
//       "Namkeen Snacks",
//       "Healthy Snacks",
//       "Cakes & Rolls",
//       "Energy Bars",
//       "Papad & Fryums",
//       "Rusks & Wafers",
//     ],
//   }
// ];

// export default Dropdown;


// import React, { useEffect, useState } from "react";
// import { MagnifyingGlass } from 'react-loader-spinner';
// import assortment from "../../images/assortment-citrus-fruits.png";
// import { Link } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import product1 from "../../images/category-baby-care.jpg";
// import product2 from "../../images/category-atta-rice-dal.jpg";
// import ScrollToTop from "../ScrollToTop";
// import ProductCard from "./ProductCard";

// function Dropdown() {
//   const [openDropdowns, setOpenDropdowns] = useState([]);
//   const [loaderStatus, setLoaderStatus] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [sortOption, setSortOption] = useState("Featured");
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   const toggleDropdown = (index) => {
//     setOpenDropdowns(openDropdowns.includes(index) ? openDropdowns.filter(item => item !== index) : [...openDropdowns, index]);
//   };

//   useEffect(() => {
//     setTimeout(() => setLoaderStatus(false), 1500);

    // const initialProducts = [
    //   { id: 1, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
    //   { id: 2, name: "NutriChoice Digestive", category: "Bakery & Biscuits", price: 24, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 3, name: "Dove Men+Care Body Wash", category: "Cleaning & Household", price: 25, originalPrice: null, image: product1, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 4, name: "Lays Potato Chips", category: "Snack & Munchies", price: 15, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 5, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
    //   { id: 6, name: "NutriChoice Digestive", category: "Bakery & Biscuits", price: 24, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 7, name: "Dove Men+Care Body Wash", category: "Cleaning & Household", price: 25, originalPrice: null, image: product1, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 8, name: "Lays Potato Chips", category: "Snack & Munchies", price: 15, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 9, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
    //   { id: 10, name: "NutriChoice Digestive", category: "Bakery & Biscuits", price: 24, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 11, name: "Dove Men+Care Body Wash", category: "Cleaning & Household", price: 25, originalPrice: null, image: product1, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 12, name: "Lays Potato Chips", category: "Snack & Munchies", price: 15, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 13, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
    //   { id: 14, name: "NutriChoice Digestive", category: "Bakery & Biscuits", price: 24, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 15, name: "Dove Men+Care Body Wash", category: "Cleaning & Household", price: 25, originalPrice: null, image: product1, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 16, name: "Lays Potato Chips", category: "Snack & Munchies", price: 15, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
    //   { id: 17, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
    // ];

//     setProducts(initialProducts);
//     setFilteredProducts(initialProducts);
//   }, []);

//   useEffect(() => {
//     let sortedProducts = [...products];
//     if (sortOption === "Low to High") sortedProducts.sort((a, b) => a.price - b.price);
//     else if (sortOption === "High to Low") sortedProducts.sort((a, b) => b.price - a.price);
//     else if (sortOption === "Avg. Rating") sortedProducts.sort((a, b) => b.rating - a.rating);
//     setFilteredProducts(sortedProducts);
//   }, [sortOption]);

//   const handleItemsPerPageChange = (e) => {
//     setItemsPerPage(Number(e.target.value));
//     setCurrentPage(1);
//   };

//   const handleSortChange = (e) => setSortOption(e.target.value);
//   const handlePageChange = (page) => setCurrentPage(page);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

//   return (
//     <div>
//       {loaderStatus ? (
//         <div className="loader-container">
//           <MagnifyingGlass visible={true} height="100" width="100" ariaLabel="magnifying-glass-loading" glassColor="#c0efff" color="#0aad0a" />
//         </div>
//       ) : (
//         <>
//           <ScrollToTop />
//           <div className="container">
//             <div className="row">
//               <h5 className="mb-3 mt-8">Categories</h5>
//               <div className="col-md-3">
//                 {dropdownData.map((dropdown, index) => (
//                   <ul className="nav flex-column" key={index}>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="#" onClick={() => toggleDropdown(index)}>
//                         {dropdown.title} <i className="fa fa-chevron-down" />
//                       </Link>


//                       <div className={`collapse ${openDropdowns.includes(index) ? "show" : ""}`}>

//                         <ul className="nav flex-column">
//                           {dropdown.items.map((item, index) => (
//                             <li className="nav-item" key={index}>
//                               <Link className="nav-link" to="#">{item}</Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </li>
//                   </ul>
//                 ))}
//               </div>
//               <div className="col-lg-9 col-md-8">
//                 <div className="d-md-flex justify-content-between align-items-center">
//                   <p className="mb-3 mb-md-0"><span className="text-dark">{filteredProducts.length} </span> Products found</p>
//                   <div className="d-flex">
//                     <select className="form-select me-2" value={itemsPerPage} onChange={handleItemsPerPageChange}>
//                       {[5, 10, 25, 50].map(size => (<option key={size} value={size}>Show: {size}</option>))}
//                     </select>
//                     <select className="form-select" value={sortOption} onChange={handleSortChange}>
//                       <option value="Featured">Sort by: Featured</option>
//                       <option value="Low to High">Price: Low to High</option>
//                       <option value="High to Low">Price: High to Low</option>
//                       <option value="Avg. Rating">Avg. Rating</option>
//                     </select>
//                   </div>
//                 </div>
//                 <section className="my-lg-14 my-8">
//                   <div className="container">
//                     <div className="row g-4">
//                       {paginatedProducts.map(product => (<ProductCard key={product.id} product={product} />))}
//                     </div>
//                   </div>
//                 </section>
//                 <nav>
//                   <ul className="pagination">
//                     {[...Array(totalPages)].map((_, index) => (
//                       <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
//                         <Link className="page-link" to="#" onClick={() => handlePageChange(index + 1)}>{index + 1}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// const dropdownData = [
//   {
//     title: "Dairy, Bread & Eggs",
//     items: [
//       "Milk",
//       "Milk Drinks",
//       "Curd & Yogurt",
//       "Eggs",
//       "Bread",
//       "Buns & Bakery",
//       "Butter & More",
//       "Cheese",
//       "Paneer & Tofu",
//       "Cream & Whitener",
//       "Condensed Milk",
//       "Vegan Drinks",
//     ],
//   },
//   {
//     title: "Snacks & Munchies",
//     items: [
//       "Chips & Crisps",
//       "Nachos",
//       "Popcorn",
//       "Bhujia & Mixtures",
//       "Namkeen Snacks",
//       "Healthy Snacks",
//       "Cakes & Rolls",
//       "Energy Bars",
//       "Papad & Fryums",
//       "Rusks & Wafers",
//     ],
//   }
// ];

// export default Dropdown;

import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from 'react-loader-spinner';
import assortment from "../../images/assortment-citrus-fruits.png";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import product1 from "../../images/category-baby-care.jpg";
import product2 from "../../images/category-atta-rice-dal.jpg";
import ScrollToTop from "../ScrollToTop";
import ProductCard from "./ProductCard";

function Dropdown() {
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("Featured");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState("grid");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleDropdown = (index) => {
    setOpenDropdowns(openDropdowns.includes(index) ? openDropdowns.filter(item => item !== index) : [...openDropdowns, index]);
  };

  
  // Sort products when the sort option changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    
    let sortedProducts = [...products];
    // Simulate loader and initialize products
    setTimeout(() => setLoaderStatus(false), 1500);
  
    const initialProducts = [
      { id: 1, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
      { id: 2, name: "NutriChoice Digestive", category: "Bakery & Biscuits", price: 24, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 3, name: "Dove Men+Care Body Wash", category: "Cleaning & Household", price: 25, originalPrice: null, image: product1, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 4, name: "Lays Potato Chips", category: "Snack & Munchies", price: 15, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 5, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
      { id: 6, name: "NutriChoice Digestive", category: "Bakery & Biscuits", price: 24, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 7, name: "Dove Men+Care Body Wash", category: "Cleaning & Household", price: 25, originalPrice: null, image: product1, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 8, name: "Lays Potato Chips", category: "Snack & Munchies", price: 15, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 9, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
      { id: 10, name: "NutriChoice Digestive", category: "Bakery & Biscuits", price: 24, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 11, name: "Dove Men+Care Body Wash", category: "Cleaning & Household", price: 25, originalPrice: null, image: product1, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 12, name: "Lays Potato Chips", category: "Snack & Munchies", price: 15, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 13, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
      { id: 14, name: "NutriChoice Digestive", category: "Bakery & Biscuits", price: 24, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 15, name: "Dove Men+Care Body Wash", category: "Cleaning & Household", price: 25, originalPrice: null, image: product1, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 16, name: "Lays Potato Chips", category: "Snack & Munchies", price: 15, originalPrice: null, image: product2, badge: "14%", badgeColor: "bg-success", rating: 4.5, reviews: 25 },
      { id: 17, name: "Haldiram's Sev Bhujia", category: "Snack & Munchies", price: 18, originalPrice: 24, image: product1, badge: "Sale", badgeColor: "bg-danger", rating: 4.5, reviews: 149 },
    ];
  
    // Initialize products and filteredProducts
    setProducts(initialProducts);
    setFilteredProducts(initialProducts); // Show all products initially
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://techclouderp.info/toolsmyne_erp/api/v1/item-categories.php',
          {
            method: 'GET',
            headers: {
              Apikey: '96vthr6e5bnv4&;'
            },
          },
        )
        const data = await response.json()
        console.log('Fetched categories:', data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  
    if (sortOption === "Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Avg. Rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
  
    // Update filtered products based on sorting
    setFilteredProducts(sortedProducts);
    return () => window.removeEventListener("resize", handleResize);
  }, [sortOption, products]); // Depend on both sortOption and products

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => setSortOption(e.target.value);
  const handlePageChange = (page) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass visible={true} height="100" width="100" ariaLabel="magnifying-glass-loading" glassColor="#c0efff" color="#0aad0a" />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <div className="container">
            <div className="row">
              <div className="col-md-3 mt-5">
                <h3>Categories</h3>
                {dropdownData.map((dropdown, index) => (
                  <ul className="nav flex-column" key={index}>
                    <li className="nav-item">
                      <Link className="nav-link" to="#" onClick={() => toggleDropdown(index)}>
                        {dropdown.title} <i className="fa fa-chevron-down" />
                      </Link>

                      <div className={`collapse ${openDropdowns.includes(index) ? "show" : ""}`}>
                        <ul className="nav flex-column">
                          {dropdown.items.map((item, index) => (
                            <li className="nav-item" key={index}>
                              <Link className="nav-link" to="#">{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
              <div className="col-lg-9 col-md-8 mt-5">
                <div className="d-md-flex justify-content-between align-items-center">
                  <p className="mb-3 mb-md-0"><span className="text-dark">{filteredProducts.length} </span> Products found</p>
                  <div className="d-flex">
                    <select className="form-select me-2" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                      {[5, 10, 25, 50].map(size => (<option key={size} value={size}>Show: {size}</option>))}
                    </select>
                    <select className="form-select me-2" value={sortOption} onChange={handleSortChange}>
                      <option value="Featured">Sort by: Featured</option>
                      <option value="Low to High">Price: Low to High</option>
                      <option value="High to Low">Price: High to Low</option>
                      <option value="Avg. Rating">Avg. Rating</option>
                    </select>
                    <button className={`btn ${viewType === "grid" ? "btn-primary" : "btn-light"}`} onClick={() => setViewType("grid")}>
                      <i className="fas fa-th-large"></i>
                    </button>
                    <button className={`btn ms-2 ${viewType === "list" ? "btn-primary" : "btn-light"}`} onClick={() => setViewType("list")}>
                      <i className="fas fa-list"></i>
                    </button>
                  </div>
                </div>
                <section className="my-lg-14 my-8">
                  <div className="container">
                    <div className={`row g-4 ${viewType === "list" ? "flex-column" : ""}`}>
                      {paginatedProducts.map(product => (<ProductCard key={product.id} product={product} viewType={viewType} />))}
                    </div>
                  </div>
                </section>
                <nav>
                  <ul className="pagination">
                    {[...Array(totalPages)].map((_, index) => (
                      <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
                        <Link className="page-link" to="#" onClick={() => handlePageChange(index + 1)}>{index + 1}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const dropdownData = [
  {
    title: "Dairy, Bread & Eggs",
    items: [
      "Milk","Milk Drinks","Curd & Yogurt","Eggs","Bread","Buns & Bakery","Butter & More","Cheese","Paneer & Tofu","Cream & Whitener","Condensed Milk","Vegan Drinks",
    ],
  },
  {
    title: "Snacks & Munchies",
    items: [
      "Chips & Crisps","Nachos","Popcorn","Bhujia & Mixtures","Namkeen Snacks","Healthy Snacks","Cakes & Rolls","Energy Bars","Papad & Fryums","Rusks & Wafers",
    ],
  }
];

export default Dropdown;