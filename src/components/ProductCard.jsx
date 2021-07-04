import React from 'react';
import { Link } from '@reach/router';

import { StyledProduct } from '../styled/product';
import { ReactComponent as Bookmark } from '../images/bookmark-regular.svg';
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
      <div>
        <Bookmark />
        <h4>{product_name}</h4>
      </div>
      <h3>{brand}</h3>
      <h3>{product_name}</h3>
      <h2>{sales_price}</h2>
    </StyledProduct>
  );
}
