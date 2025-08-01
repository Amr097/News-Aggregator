import React from "react";
import Search from "./search/Search";

const Header = () => {
  return (
    <div className="text-black py-6 px-6 flex justify-between items-center">
      <h1 className="logo">Beyond Aggregation</h1>
      <Search />
    </div>
  );
};

export default Header;
