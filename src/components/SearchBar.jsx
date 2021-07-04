import { ReactComponent as Search } from '../images/search-solid.svg';
import { StyledBar } from '../styled/searchbar';

import React, { useState } from 'react';
export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [searchBar, setSearchBar] = useState(false);

  const handleChange = (event) => {
    console.log(event);
    // setSearchTerm(event.target.value);
  };
  const handleKeyPress = (event) => {
    console.log(event, 'EVENT');
  };
  const handleSubmit = (event) => {
    console.log(event, 'EVENT');
  };
  return (
    <StyledBar>
      <Search class="search-icon" onClick={() => setSearchBar((v) => !v)} />
      <form onSubmit={handleSubmit}>
        <input
          key="random1"
          value={keyword}
          placeholder={'search country'}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <input type="submit" value="Submit" />
      </form>
    </StyledBar>
  );
}
