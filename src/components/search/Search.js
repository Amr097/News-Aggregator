"use client";
import "../../app/styles/search.css";

import { Input } from "../ui/input";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { useDebounce } from "use-debounce";
import { useQueryClient } from "@tanstack/react-query";

import { formUrlQuery, removeKeysFromQuery } from "@/helpers/url";

const Search = () => {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 250);
  const hasUserSearched = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const query = params.get("q");
    let url = window.location.toString();

    // Skip if user hasn't searched yet
    if (!hasUserSearched.current && !query) return;

    if (debouncedSearchQuery)
      url = formUrlQuery({
        params: searchParams.toString(),
        key: "q",
        value: debouncedSearchQuery,
      });
    else
      url = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["q"],
      });

    if (url !== window.location.toString())
      window.history.replaceState(null, "", url);

    setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: ["allNews"],
        exact: true,
      });
    }, 0);
  }, [debouncedSearchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    hasUserSearched.current = true;
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
