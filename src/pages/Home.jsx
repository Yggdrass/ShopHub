import React from "react";
import SearchBar from "../components/ui/SearchBar";
//import FetchProducts from "../components/api/FetchProducts";
import "./Pages.modules.css";
import FetchJson from "../components/api/FetchJson";
import AutocompleteSearch from "../components/ui/AutocompleteSearch";
import FetchProducts from "../components/api/FetchProducts";

const Home = () => {
  return (
    <div className="homePage-wrapper">
      <AutocompleteSearch />
    </div>
  );
};

export default Home;
