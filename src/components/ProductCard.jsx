import React from 'react';
import { StyledProduct } from '../styled/product';
export default function ProductCard(props) {
  const {
    product_name,
    image_url,
    sales_price,
    brand,
    discount_percentage,
    colors
  } = props;
  return (
    <StyledProduct>
      <div class="product-img-container">
        <img class="product-img" src={image_url}></img>
      </div>
      <h4>{product_name}</h4>
      <h3>{brand}</h3>
      <h3>{product_name}</h3>
      <h2>{sales_price}</h2>
    </StyledProduct>
  );
}
