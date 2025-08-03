"use client";
import "../../app/styles/search.css";

import { Input } from "../ui/input";

import React, { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";
import { useQueryClient } from "@tanstack/react-query";

const Search = () => {
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 250);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["allNews"],
    });
  }, [debouncedSearchQuery, queryClient]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-block">
      <Input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div className="icon"></div>
    </div>
  );
};

export default Search;
