import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import WhyChooseUs from './WhyChooseUs';
import Faq from './Faq';

const Container = styled.div`
  padding: 20px;
`;
const Breadcrumb = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  width: 100%; /* Match ContentWrapper width */
  max-width: 1115px; /* Add a max-width if ContentWrapper has one */
  margin: 0 auto 20px; /* Center align and add spacing below */

  a {
    color: #007bff;
    text-decoration: none;

    &:not(:last-child)::after {
      content: '/';
      margin: 0 5px;
      color: #555;
    }
  }
`;


const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageGallery = styled.div`
  flex: 1;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  gap: 10px;
  display: flex;
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border: 1px solid rgba(213, 213, 213, ${({ opacity }) => opacity || '1'});
  border-radius: 4px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(213, 213, 213, ${({ opacity }) => opacity || '1'});
  border-radius: 10px;
  align-items: center;

  .magnify-wrapper {
    width: 100%;
    max-width: 400px;
    height: 400px;
  }
`;

const ProductDetailsWrapper = styled.div`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 10px;
`;

const RatingWrapper = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;

  span {
    background-color: #4caf50;
    color: #fff;
    padding: 2px 6px;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

const PriceWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const DiscountedPrice = styled.h3`
  color: green;
  font-size: 24px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  margin-left: 10px;
`;

const Discount = styled.span`
  color: red;
  font-size: 14px;
  margin-left: 10px;
`;

const ProductDetails = () => {
  const { productId } = useParams(); // Get productId from URL
  const [productDetails, setProductDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Initialize selectedImage state

  useEffect(() => {
    const allProducts = [
      {
        id: 1,
        title: 'Pampers New Medium - 2 Diaper Pants, 2 pcs',
        rating: 4.2,
        reviews: 34,
        mainPrice: 25,
        originalPrice: 50,
        discount: '50% Off',
        images: [
          require('../../images/category-baby-care.jpg'),
          require('../../images/pamper1.webp'),
          require('../../images/pamper2.webp'),
          require('../../images/pamper3.webp'),
          require('../../images/pamper4.webp'),
        ],
      },
      {
        id: 2,
        title: 'Pampers New Large - 3 Diaper Pants, 3 pcs',
        rating: 4.5,
        reviews: 50,
        mainPrice: 30,
        originalPrice: 60,
        discount: '50% Off',
        images: [
          require('../../images/ashirwad1.webp'),
          require('../../images/ashiwad2.webp'),
          require('../../images/ashirwad3.webp'),
          require('../../images/ashirwad4.webp'),
          require('../../images/ashirwad5.webp'),
        ],
      },
    ];

    const product = allProducts.find(p => p.id === parseInt(productId));
    setProductDetails(product);
    setSelectedImage(product ? product.images[0] : null); // Set the selected image based on the product details
  }, [productId]);

  // If product is not found
  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <><Container>
      {/* Breadcrumb */}
      <Breadcrumb>
        <a href="/">Home</a>  <a href="/baby-care">Baby care</a>  <a href="/diapers">Diapers</a>
        {/* <a href="/">Home</a> / <a href="/baby-care">Baby care</a> / <a href="/diapers">Diapers</a> */}

      </Breadcrumb>

      <ContentWrapper>

        {/* Thumbnail Gallery */}
        <ImageGallery>
          {productDetails.images.map((img, index) => (
            <Thumbnail
              key={index}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </Thumbnail>
          ))}
        </ImageGallery>

        {/* Magnifiable Image */}
        <ProductImageWrapper>
          <div className="magnify-wrapper">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Product Image',
                  isFluidWidth: true,
                  src: selectedImage,
                },
                largeImage: {
                  src: selectedImage,
                  width: 1200,
                  height: 1200,
                },
                enlargedImageContainerStyle: {
                  zIndex: 1,
                },
              }} />
          </div>
        </ProductImageWrapper>

        {/* Product Details */}
        <ProductDetailsWrapper>
          <Title>{productDetails.title}</Title>
          <RatingWrapper>
            <span>{productDetails.rating}</span>
            {productDetails.reviews} Ratings & 0 Reviews
          </RatingWrapper>
          <PriceWrapper>
            <DiscountedPrice>₹{productDetails.mainPrice}</DiscountedPrice>
            <OriginalPrice>₹{productDetails.originalPrice}</OriginalPrice>
            <Discount>{productDetails.discount}</Discount>
          </PriceWrapper>
          <p>Inclusive of all taxes.</p>
          <Button variant="danger">Add to basket</Button>
          <Button variant="outline-secondary" className="ms-2">
            Save for later
          </Button>
        </ProductDetailsWrapper>
      </ContentWrapper>
    </Container>
   
    </>
  );
};

export default ProductDetails;
