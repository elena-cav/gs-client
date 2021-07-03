import React from 'react';

import { StyledFooter } from '../styled/footer';
function Footer() {
  return (
    <StyledFooter>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/elenacavallero"
          className="social-icon"
        ></a>
        <a href="https://github.com/elena-cav" className="social-icon"></a>
      </div>
      <h4 className="footer-text">
        COPYRIGHT {new Date().getFullYear()} © Golden Shoe
      </h4>
    </StyledFooter>
  );
}

export default Footer;
