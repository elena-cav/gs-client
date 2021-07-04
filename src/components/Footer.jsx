import React from 'react';
import { Link } from '@reach/router';

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
          <Link to={'/faq'}>FAQ</Link>
        </li>
      </ul>
      <h4 className="footer-text">
        COPYRIGHT {new Date().getFullYear()} © Golden Shoe
      </h4>
    </StyledFooter>
  );
}

export default Footer;
