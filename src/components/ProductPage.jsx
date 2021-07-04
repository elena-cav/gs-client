import React from 'react';
import { StyledProductPage } from '../styled/product-page';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function ProductPage({ location }) {
  console.log(location.state, 'LOCATIONS');
  const { image_url } = location.state;
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src={image_url} onDragStart={handleDragStart} />,
    <img src={image_url} onDragStart={handleDragStart} />,
    <img src={image_url} onDragStart={handleDragStart} />
  ];
  return (
    // <StyledProductPage>
    <div class="top-block">
      <div>
        <AliceCarousel mouseTracking items={items} autoHeight={true} />
      </div>
    </div>
    // <div>
    //   <h1>You may also like</h1>
    // </div>
    // </StyledProductPage>
  );
}
