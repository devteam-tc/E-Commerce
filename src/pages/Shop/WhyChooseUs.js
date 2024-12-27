// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       id: 1,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           width="40"
//           height="40"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 12l2 2 4-4m6 2a9 9 0 11-6-8.28"
//           />
//         </svg>
//       ),
//       title: "Quality",
//       description: "You can trust",
//     },
//     {
//       id: 2,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           width="40"
//           height="40"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M8 12h4m0 0h4m-4-4v8"
//           />
//         </svg>
//       ),
//       title: "On time",
//       description: "Guarantee",
//     },
//     {
//       id: 3,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           width="40"
//           height="40"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 12c2.5 0 3-2 3-2s0-1.5-1-3m-5 5c-2.5 0-3-2-3-2s0-1.5 1-3m9-2V5a2 2 0 10-4 0v1a2 2 0 10-4 0v1a2 2 0 104 0v3"
//           />
//         </svg>
//       ),
//       title: "Free",
//       description: "Delivery",
//     },
//     {
//       id: 4,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           width="40"
//           height="40"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 8v4m0 4h.01"
//           />
//         </svg>
//       ),
//       title: "Return Policy",
//       description: "No Question asked",
//     },
//   ];

//   return (
//     <section className="py-5 bg-light">
//       <Container>
//         <h2 className="text-center mb-5 font-weight-bold">
//           Why choose E-Commerce ?
//         </h2>
//         <Row className="justify-content-center">
//           {features.map((feature) => (
//             <Col md={3} sm={6} xs={12} key={feature.id} className="mb-4">
//               <Card className="text-center border-0 shadow-sm">
//                 <div
//                   className="d-flex justify-content-center align-items-center mx-auto bg-white rounded-circle shadow"
//                   style={{
//                     width: "60px",
//                     height: "60px",
//                     marginTop: "11px",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   {feature.icon}
//                 </div>
//                 <Card.Body>
//                   <Card.Title className="font-weight-bold">
//                     {feature.title}
//                   </Card.Title>
//                   <Card.Text className="text-muted">
//                     {feature.description}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default WhyChooseUs;
