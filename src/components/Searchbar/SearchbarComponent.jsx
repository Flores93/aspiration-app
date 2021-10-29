import { useState } from "react";

import "./Searchbar.css";
const Searchbar = ({ onSearch, initSearchValue }) => {
  const [inputValue, setInputValue] = useState(initSearchValue);
  return (
    <nav>
      <form onSubmit={(e) => onSearch(e, inputValue, setInputValue)}>
        <input
          className="search-bar"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Searchbar;
