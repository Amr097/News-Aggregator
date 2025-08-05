"use client";
import "../../../../app/styles/search.css";

import { Input } from "../../../../components/ui/input";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { useDebounce } from "use-debounce";

import { formUrlQuery, removeKeysFromQuery } from "@/helpers/url";

/**
 * Controlled search input that syncs `q` query param with the URL.
 *
 * - Initializes from `q` param.
 * - Debounces updates.
 * - Updates/replaces browser URL via `window.history`.
 * - Skips effect unless user has typed or `q` exists in URL.
 */

const Search = () => {
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 750);
  const hasUserSearched = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const query = params.get("q");
    let url = window.location.toString();

    // Skip if user hasn't searched yet & there's no search query in the url
    if (!hasUserSearched.current && !query) return;

    if (debouncedSearchQuery) {
      url = formUrlQuery({
        params: searchParams.toString(),
        key: "q",
        value: debouncedSearchQuery,
      });
    } else {
      url = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["q"],
      });
    }

    if (url !== window.location.toString())
      window.history.replaceState(null, "", url);
  }, [debouncedSearchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    hasUserSearched.current = true;
  };

  return (
    <div className="search-block">
      <Input
        type="text"
        placeholder="What are you looking for?"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div className="icon"></div>
    </div>
  );
};

export default Search;
