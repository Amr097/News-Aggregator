"use client";

import { useQueryClient } from "@tanstack/react-query";

export default function Error({ error, reset }) {
  const queryClient = useQueryClient();

  const handleReset = () => {
    queryClient.removeQueries();
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 flex flex-col gap-2 items-center bg-white shadow-lg rounded-lg max-w-md w-full">
        <div className="text-6xl mb-4">😵</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
