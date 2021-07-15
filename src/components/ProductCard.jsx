import React, { useState } from 'react';
import { Link } from '@reach/router';
import { StyledProduct } from '../styled/product';
import { ReactComponent as Bookmark } from '../images/bookmark-regular.svg';
import { ReactComponent as BookmarkSolid } from '../images/bookmark-solid.svg';
export default function ProductCard(props) {
  const {
    product_name,
    image_url,
    sales_price,
    brand,
    discount_percentage,
    colors,
    product_id,
    setCount,
    count
  } = props;

  const [bookmark, setBookmark] = useState(false);
  return (
    <StyledProduct>
      <div class="product-img-container">
        <Link
          state={{
            product_name,
            image_url,
            sales_price,
            brand,
            discount_percentage,
            colors,
            product_id
          }}
          to={`/product/${product_id}`}
        >
          <img
            alt={`${product_name}`}
            class="product-img"
            src={image_url}
          ></img>
        </Link>
      </div>
      <div>
        {bookmark ? (
          <BookmarkSolid
            class="bookmark-solid"
            onClick={() => setBookmark((v) => !v)}
          />
        ) : (
          <Bookmark class="bookmark" onClick={() => setBookmark((v) => !v)} />
        )}

        <h4>{product_name}</h4>
      </div>
      <div class="card-text">
        <h3>{brand}</h3>
        <h3>{sales_price}</h3>
        <h3>{discount_percentage}</h3>
      </div>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </StyledProduct>
  );
}
