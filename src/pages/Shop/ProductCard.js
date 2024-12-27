// import React from "react";
// import { Link } from "react-router-dom";
// import { handleAddClick } from "../../utils/cartUtils";
// import { useDispatch } from "react-redux";

// const ProductCard = ({ product }) => {
//     const dispatch = useDispatch();
//   return (
    // <div className="col-6 col-md-4 col-lg-3">
    //   <div className="card card-product">
    //     <div className="card-body">
    //       {/* Badge */}
    //       <div className="text-center position-relative">
    //         <div className={`position-absolute top-0 start-0`}>
    //           <span className={`badge ${product.badgeColor}`}>{product.badge}</span>
    //         </div>
    //         {/* Image */}
    //         <Link to="#!">
    //           <img
    //             src={product.image}
    //             alt={product.name}
    //             className="mb-3 img-fluid"
    //           />
    //         </Link>
    //         {/* Action Buttons */}
    //         <div className="card-product-action">
    //           <Link
    //             to="#!"
    //             className="btn-action"
    //             data-bs-toggle="modal"
    //             data-bs-target="#quickViewModal"
    //           >
    //             <i className="bi bi-eye" title="Quick View"></i>
    //           </Link>
    //           <Link to="#!" className="btn-action" title="Wishlist">
    //             <i className="bi bi-heart"></i>
    //           </Link>
    //           <Link to="#!" className="btn-action" title="Compare">
    //             <i className="bi bi-arrow-left-right"></i>
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Category */}
    //       <div className="text-small mb-1">
    //         <Link to="#!" className="text-decoration-none text-muted">
    //           <small>{product.category}</small>
    //         </Link>
    //       </div>

    //       {/* Product Name */}
    //       <h2 className="fs-6">
    //         <Link to="#!" className="text-inherit text-decoration-none">
    //           {product.name}
    //         </Link>
    //       </h2>

    //       {/* Rating */}
    //       <div>
    //         <small className="text-warning">
    //           {[...Array(5)].map((_, index) => (
    //             <i
    //               key={index}
    //               className={`bi ${
    //                 index < Math.floor(product.rating)
    //                   ? "bi-star-fill"
    //                   : index < product.rating
    //                   ? "bi-star-half"
    //                   : "bi-star"
    //               }`}
    //             />
    //           ))}
    //         </small>
    //         <span className="text-muted small"> {product.rating} ({product.reviews})</span>
    //       </div>

    //       {/* Price */}
    //       <div className="d-flex justify-content-between align-items-center mt-3">
    //         <div>
    //           <span className="text-dark">${product.price}</span>
    //           {product.originalPrice && (
    //             <span className="text-decoration-line-through text-muted ms-2">
    //               ${product.originalPrice}
    //             </span>
    //           )}
    //         </div>
    //         {/* Add Button */}
    //         <div>
    //           <Link to="#!" className="btn btn-primary btn-sm" onClick={() => handleAddClick(dispatch, product)}>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width={16}
    //               height={16}
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth={2}
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="feather feather-plus"
    //             >
    //               <line x1={12} y1={5} x2={12} y2={19} />
    //               <line x1={5} y1={12} x2={19} y2={12} />
    //             </svg>{" "}
    //             Add
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default ProductCard;

// import React from "react";
// import { Link } from "react-router-dom";
// import { handleAddClick } from "../../utils/cartUtils";
// import { useDispatch } from "react-redux";

// const ProductCard = ({ product, viewType }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className="col-6 col-lg-4 col-xl-3">
//       <div className="card card-product h-100">
//         <div className="card-body d-flex flex-column">
//           {/* Badge */}
//           <div className="text-center position-relative mb-3">
//             <div className={`position-absolute top-0 start-0`}>
//               <span className={`badge ${product.badgeColor}`}>{product.badge}</span>
//             </div>
//             {/* Image */}
//             <Link to="#!">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="mb-3 img-fluid"
//                 style={{ maxHeight: '200px', objectFit: 'contain' }}
//               />
//             </Link>
//             {/* Action Buttons */}
//             <div className="card-product-action d-flex justify-content-center">
//               <Link
//                 to="#!"
//                 className="btn-action me-2"
//                 data-bs-toggle="modal"
//                 data-bs-target="#quickViewModal"
//               >
//                 <i className="bi bi-eye" title="Quick View"></i>
//               </Link>
//               <Link to="#!" className="btn-action me-2" title="Wishlist">
//                 <i className="bi bi-heart"></i>
//               </Link>
//               <Link to="#!" className="btn-action" title="Compare">
//                 <i className="bi bi-arrow-left-right"></i>
//               </Link>
//             </div>
//           </div>

//           {/* Category */}
//           <div className="text-small mb-1">
//             <Link to="#!" className="text-decoration-none text-muted">
//               <small>{product.category}</small>
//             </Link>
//           </div>

//           {/* Product Name */}
//           <h5 className="fs-6">
//             <Link to="#!" className="text-inherit text-decoration-none">
//               {product.name}
//             </Link>
//           </h5>

//           {/* Rating */}
//           <div>
//             <small className="text-warning">
//               {[...Array(5)].map((_, index) => (
//                 <i
//                   key={index}
//                   className={`bi ${
//                     index < Math.floor(product.rating)
//                       ? "bi-star-fill"
//                       : index < product.rating
//                       ? "bi-star-half"
//                       : "bi-star"
//                   }`}
//                 />
//               ))}
//             </small>
//             <span className="text-muted small"> {product.rating} ({product.reviews})</span>
//           </div>

//           {/* Price */}
//           <div className="d-flex justify-content-between align-items-center mt-3">
//             <div>
//               <span className="text-dark">${product.price}</span>
//               {product.originalPrice && (
//                 <span className="text-decoration-line-through text-muted ms-2">
//                   ${product.originalPrice}
//                 </span>
//               )}
//             </div>
//             {/* Add Button */}
//             <div>
//               <Link
//                 to="#!"
//                 className="btn btn-primary btn-sm"
//                 onClick={() => handleAddClick(dispatch, product)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-plus"
//                 >
//                   <line x1={12} y1={5} x2={12} y2={19} />
//                   <line x1={5} y1={12} x2={19} y2={12} />
//                 </svg>{" "}
//                 Add
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React from "react";
// import { Link } from "react-router-dom";
// import { handleAddClick } from "../../utils/cartUtils";
// import { useDispatch } from "react-redux";

// const ProductCard = ({ product, viewType }) => {
//   const dispatch = useDispatch();

//   // Conditional Classes
//   const containerClass = viewType === "grid" ? "col-6 col-lg-4 col-xl-3" : "col-12";
//   const cardClass = viewType === "grid" ? "h-100" : "flex-row align-items-center";
//   const imageClass = viewType === "grid" ? "mb-3 img-fluid" : "me-3 img-fluid";

//   return (
    // <div className={containerClass}>
    //   <div className={`card card-product ${cardClass}`}>
    //     <div className={`card-body d-flex ${viewType === "grid" ? "flex-column" : "flex-row"}`}>
    //       {/* Product Image */}
    //       <div className={`position-relative ${viewType === "list" ? "flex-shrink-0" : "text-center"}`}>
    //         <div className="position-absolute top-0 start-0">
    //           <span className={`badge ${product.badgeColor}`}>{product.badge}</span>
    //         </div>
    //         <Link to="#!">
    //           <img
    //             src={product.image}
    //             alt={product.name}
    //             className={imageClass}
    //             style={{
    //               maxHeight: viewType === "grid" ? "200px" : "120px",
    //               objectFit: "contain",
    //             }}
    //           />
    //         </Link>
    //       </div>

    //       {/* Product Details */}
    //       <div className="flex-grow-1">
    //         <div className={`text-small ${viewType === "list" ? "mb-1" : ""}`}>
    //           <Link to="#!" className="text-decoration-none text-muted">
    //             <small>{product.category}</small>
    //           </Link>
    //         </div>

    //         {/* Product Name */}
    //         <h5 className={`fs-6 ${viewType === "list" ? "mb-1" : ""}`}>
    //           <Link to="#!" className="text-inherit text-decoration-none">
    //             {product.name}
    //           </Link>
    //         </h5>

    //         {/* Rating */}
    //         <div>
    //           <small className="text-warning">
    //             {[...Array(5)].map((_, index) => (
    //               <i
    //                 key={index}
    //                 className={`bi ${
    //                   index < Math.floor(product.rating)
    //                     ? "bi-star-fill"
    //                     : index < product.rating
    //                     ? "bi-star-half"
    //                     : "bi-star"
    //                 }`}
    //               />
    //             ))}
    //           </small>
    //           <span className="text-muted small"> {product.rating} ({product.reviews})</span>
    //         </div>

    //         {/* Price and Add Button */}
    //         <div className={`d-flex ${viewType === "grid" ? "justify-content-between mt-3" : "align-items-center mt-2"}`}>
    //           <div>
    //             <span className="text-dark">${product.price}</span>
    //             {product.originalPrice && (
    //               <span className="text-decoration-line-through text-muted ms-2">
    //                 ${product.originalPrice}
    //               </span>
    //             )}
    //           </div>

    //           <div className={`${viewType === "list" ? "ms-auto" : ""}`}>
    //             <Link
    //               to="#!"
    //               className="btn btn-primary btn-sm"
    //               onClick={() => handleAddClick(dispatch, product)}
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width={16}
    //                 height={16}
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 className="feather feather-plus"
    //               >
    //                 <line x1={12} y1={5} x2={12} y2={19} />
    //                 <line x1={5} y1={12} x2={19} y2={12} />
    //               </svg>{" "}
    //               Add
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import { handleAddClick } from "../../utils/cartUtils";
import { useDispatch } from "react-redux";

const ProductCard = ({ product, viewType }) => {
  const dispatch = useDispatch();

  // Conditional Classes
  const containerClass = viewType === "grid" ? "col-6 col-lg-4 col-xl-3" : "col-12";
  const cardClass = viewType === "grid" ? "h-100" : "flex-row align-items-center";
  const imageClass = viewType === "grid" ? "mb-3 img-fluid" : "me-3 img-fluid";

  return (
    <div className={containerClass}>
      <div className={`card card-product ${cardClass}`}>
        <div className={`card-body d-flex ${viewType === "grid" ? "flex-column" : "flex-row"}`}>
          {/* Product Image */}
          <div className={`position-relative ${viewType === "list" ? "flex-shrink-0" : "text-center"}`}>
            <div className="position-absolute top-0 start-0">
              <span className={`badge ${product.badgeColor}`}>{product.badge}</span>
            </div>
            <Link to="#!">
              <img
                src={product.image}
                alt={product.name}
                className={imageClass}
                style={{
                  maxHeight: viewType === "grid" ? "200px" : "120px",
                  objectFit: "contain",
                }}
              />
            </Link>
	{/* Action Buttons */}
            <div className="card-product-action d-flex justify-content-center">
              <Link
                to="#!"
                className="btn-action me-2"
                data-bs-toggle="modal"
                data-bs-target="#quickViewModal"
              >
                <i className="bi bi-eye" title="Quick View"></i>
              </Link>
              <Link to="#!" className="btn-action me-2" title="Wishlist">
                <i className="bi bi-heart"></i>
              </Link>
              <Link to="#!" className="btn-action" title="Compare">
                <i className="bi bi-arrow-left-right"></i>
              </Link>
            </div>
          
          </div>

          {/* Product Details */}
          <div className="flex-grow-1">
            <div className={`text-small ${viewType === "list" ? "mb-1" : ""}`}>
              <Link to="#!" className="text-decoration-none text-muted">
                <small>{product.category}</small>
              </Link>
            </div>

            {/* Product Name */}
            <h5 className={`fs-6 ${viewType === "list" ? "mb-1" : ""}`}>
              <Link to="#!" className="text-inherit text-decoration-none">
                {product.name}
              </Link>
            </h5>

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

            {/* Price and Add Button */}
            <div className={`d-flex ${viewType === "grid" ? "justify-content-between mt-3" : "align-items-center mt-2"}`}>
              <div>
                <span className="text-dark">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-decoration-line-through text-muted ms-2">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className={`${viewType === "list" ? "ms-auto" : ""}`}>
                <Link
                  to="#!"
                  className="btn btn-primary btn-sm"
                  onClick={() => handleAddClick(dispatch, product)}
                >
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
    </div>
  );
};

export default ProductCard;
