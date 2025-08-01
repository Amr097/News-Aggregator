import React from "react";
import "../../app/styles/search.css";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="search-block">
      <Input type="text" placeholder="Search" />
      <div className="icon"></div>
    </div>
  );
};

export default Search;
