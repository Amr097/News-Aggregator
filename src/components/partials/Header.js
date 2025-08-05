import React from "react";
import Search from "../../features/home/components/Search/Search";
import { Suspense } from "react";

const Header = () => {
  return (
    <div className="text-black pb-6 pt-8 px-10 sm:gap-8 gap-4  flex-col flex sm:flex-row items-center">
      <h1 className="logo -rotate-1">Beyond Aggregation</h1>
      <Suspense>
        <Search />
      </Suspense>
    </div>
  );
};

export default Header;
