// import { Link } from '@reach/router';
import { StyledNavBar } from '../styled/nav';
import { ReactComponent as CloseBtn } from '../images/times-solid.svg';
import React from 'react';

function Nav(props) {
  const { isActive, openMenu } = props;

  return (
    <StyledNavBar isActive={isActive}>
      <header>
        <nav className={`navbar${isActive ? ' navbar--open' : ''}`}>
          <div className="navbar-header">
            <span className="nav-close" id="nav-close" onClick={openMenu}>
              <CloseBtn />
            </span>

            <ul className="nav-items">
              <li>
                <h4>Women</h4>
                <h4>Men</h4>
                <h4>Brands</h4>
                <h4>Sale</h4>
                <h4>Account</h4>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </StyledNavBar>
  );
}

export default Nav;
