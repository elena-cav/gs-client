import { ReactComponent as Search } from '../images/search-solid.svg';
import { StyledBar } from '../styled/searchbar';
import { navigate } from '@reach/router';
import React, { useState } from 'react';
export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [searchBar, setSearchBar] = useState(false);

  const handleKeyPress = (event) => {
    console.log(event.key, 'KEY');
    if (event.key === 'Enter') {
      handleSubmit(keyword);
    }
  };
  const handleSubmit = () => {
    console.log('in here');
    console.log(keyword, 'KEYWORD');
    navigate(`/${keyword}`, { state: { keyword } });
  };
  return (
    <StyledBar>
      <Search class="search-icon" onClick={() => setSearchBar((v) => !v)} />
      {searchBar && (
        <form onSubmit={handleSubmit}>
          <input
            key="random1"
            value={keyword}
            placeholder={'search for products'}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <button type="submit">Search</button>
        </form>
      )}
    </StyledBar>
  );
}
