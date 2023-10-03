import React, { useState } from "react";
//import TextField from "@mui/material/TextField";
//import Stack from "@mui/material/Stack";
//import { Autocomplete } from "@mui/material";
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
