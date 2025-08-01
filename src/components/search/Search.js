import React from "react";
import "../../app/styles/search.css";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div class="search-block">
      <Input type="text" placeholder="Search" />
      <div class="icon"></div>
    </div>
  );
};

export default Search;
