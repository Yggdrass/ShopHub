import React, { useState } from "react";
import "./SearchBar.css";
import LogoImage from "../images/LogoImage";

const SearchBar = () => {
  const [input, setInput] = useState("");
  return (
    <div className="input-wrapper">
      <LogoImage />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
