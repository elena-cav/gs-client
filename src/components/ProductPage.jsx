import React from 'react';
import { StyledProductPage } from '../styled/product-page';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function ProductPage({ location }) {
  const {
    image_url,
    product_name,
    sales_price,
    brand,
    discount_percentage,
    colors
  } = location.state;

  console.log('COLORS', colors);
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      class="sliderimg"
      alt={`${product_name}`}
      src={image_url}
      onDragStart={handleDragStart}
    />,
    <img
      class="sliderimg"
      alt={`${product_name}`}
      src={image_url}
      onDragStart={handleDragStart}
    />,
    <img
      class="sliderimg"
      alt={`${product_name}`}
      src={image_url}
      onDragStart={handleDragStart}
    />
  ];
  const percentage =
    (parseInt(discount_percentage) / 100) * parseInt(sales_price);
  return (
    <StyledProductPage>
      <div class="top-block">
        <div>
          <AliceCarousel
            mouseTracking
            items={items}
            autoHeight={true}
            controlsStrategy="alternate"
          />
        </div>
      </div>
      <div>
        <h3>{product_name}</h3>

        {discount_percentage !== '0%' ? (
          <h3> It was £{sales_price}</h3>
        ) : (
          <h3>£{sales_price}</h3>
        )}
        {discount_percentage !== '0%' && (
          <h3>It's now £{parseInt(sales_price) - percentage}</h3>
        )}
        <h3>{brand}</h3>
        <h3>Colours: {colors.join(' | ')}</h3>
      </div>
      <div>
        <h2>You may also like</h2>
        <div class="gallery">
          <div class="recommended-wrapper">
            <h3>Recommended product</h3>

            <img
              alt="recommended product"
              src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            ></img>
          </div>
          <div class="recommended-wrapper">
            <h3>Recommended product</h3>

            <img
              alt="recommended product"
              src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            ></img>
          </div>
          <div class="recommended-wrapper">
            <h3>Recommended product</h3>

            <img
              alt="recommended product"
              src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            ></img>
          </div>
        </div>
      </div>
    </StyledProductPage>
  );
}
