import "./search-box.css";

import React from "react";

const SearchBox = ({placeholder, onChangeHandler}) => {
  return (
    <input
      className={`shadow appearance-none border rounded w-12rem mt-[1rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline search-box`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
