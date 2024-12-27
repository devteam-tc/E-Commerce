// import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";

// const StyledAccordion = styled(Accordion)`
//   .accordion-item {
//     border: none;
//     margin-bottom: 10px;
//   }
//   .accordion-header {
//     font-family: Arial, sans-serif;
//     font-size: 18px;
//     font-weight: bold;
//     background-color: #f9f9f9;
//     padding: 10px;
//     border-radius: 5px;
//   }
//   .accordion-button {
//     font-weight: bold;
//     font-size: 18px;
//     color: #333;
//   }
//   .accordion-body {
//     font-family: Arial, sans-serif;
//     font-size: 16px;
//     line-height: 1.5;
//     padding: 15px;
//     background-color: #ffffff;
//     border: 1px solid #ddd;
//     border-radius: 5px;
//   }
// `;

// const productDetails = [
//   {
//     title: "About the Product",
//     content: `
//       Pampers baby-dry pants style diapers are the only pants in India with new air channels providing your baby with the comfort of dryness overnight.
//       It comes with a magic gel that locks wetness away for up to 12 hours of dryness. The new and improved product design enables a comfortable fit
//       and comes equipped with a flexible waistband that adapts to baby's movements for a comfortable fit.
//       Baby lotion with Aloe Vera helps protect your baby's delicate skin from diaper rash and irritation.
//       It also comes equipped with a top layer with cotton-like soft material for a comfortable night's sleep.
//     `,
//   },
//   {
//     title: "Features",
//     content: `
//       - Pampers baby-dry pants style diapers are the only pants in India with new Air Channels providing your baby with a new type of dryness overnight; breathable dryness.
//       - A top layer with cotton-like soft material, for a comfortable night's sleep.
//     `,
//   },
//   {
//     title: "Storage",
//     content: `Keep out of the reach of children. Store in a cool and dry place.`,
//   },
//   {
//     title: "Other Product Info",
//     content: `
//       EAN Code: 4987176164186
//       Country of origin: India
//     `,
//   },
// ];

// const Faq = () => {
//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       <h2 style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginBottom: "20px" }}>
//         Pampers New Medium - 2 Diaper Pants
//       </h2>
//       <StyledAccordion defaultActiveKey="0">
//         {productDetails.map((item, index) => (
//           <Accordion.Item eventKey={index.toString()} key={index}>
//             <Accordion.Header>{item.title}</Accordion.Header>
//             <Accordion.Body>{item.content}</Accordion.Body>
//           </Accordion.Item>
//         ))}
//       </StyledAccordion>
//     </div>
//   );
// };

// export default Faq;
