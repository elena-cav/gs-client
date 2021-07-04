import React from 'react';

import { StyledFooter } from '../styled/footer';
function Footer() {
  return (
    <StyledFooter>
      <div className="info"></div>
      <ul>
        <li>Contact us</li>
        <li>Delivery & Returns</li>
        <li>Find our store</li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
      <h4 className="footer-text">
        COPYRIGHT {new Date().getFullYear()} © Golden Shoe
      </h4>
    </StyledFooter>
  );
}

export default Footer;
