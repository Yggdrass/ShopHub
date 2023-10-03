import React from "react";
import SearchBar from "../components/ui/SearchBar";
import FetchProducts from "../components/api/FetchProducts";
import "./Pages.modules.css";

const Home = () => {
  return (
    <div className="homePage-wrapper">
      <SearchBar />
      <FetchProducts />
    </div>
  );
};

export default Home;
