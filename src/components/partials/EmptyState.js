import React from "react";

const EmptyState = ({ query }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center h-full gap-3">
      <div>
        <svg
          className="w-32 h-32 mx-auto text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3v6m0 0l-2-2m2 2l2-2"
          />
        </svg>
      </div>
      <h3 className="text-3xl font-semibold text-gray-900">
        {query ? "No results found" : "No news available"}
      </h3>
      <p className="text-gray-600 max-w-md text-xl">
        {query
          ? `We couldn't find any news articles matching "${query}". Try adjusting your search terms.`
          : "There are currently no news articles available. Please check back later."}
      </p>
    </div>
  );
};

export default EmptyState;
