import React from "react";
import "./searchbox.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="searchbox"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
