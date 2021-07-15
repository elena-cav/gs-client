import React from 'react';
import { StyledHeader } from '../styled/header';
import { Link } from '@reach/router';
import { ReactComponent as MenuBtn } from '../images/menu-btn.svg';
import { ReactComponent as Cart } from '../images/shopping-cart-solid.svg';

// import { ReactComponent as User } from '../images/user-solid.svg';
import SearchBar from './SearchBar';
function Header({ openMenu, count }) {
  return (
    <StyledHeader>
      <p className="nav-btn" id="nav-btn" onClick={openMenu}>
        <MenuBtn />
      </p>
      <h2>
        <Link to={'/'}>Golden Shoe</Link>
      </h2>
      <Cart class="cart-icon" />
      <p class="count">{count}</p>
      <SearchBar />
    </StyledHeader>
  );
}

export default Header;
