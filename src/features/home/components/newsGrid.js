"use client";

import NewsCard from "@/features/home/components/newsCard/NewsCard";
import { useQuery } from "@tanstack/react-query";
import fetchNextServer from "@/services/fetchNextServer";
import { useSearchParams } from "next/navigation";
import EmptyState from "@/components/partials/EmptyState";
import GridSkeleton from "./GridSkeleton";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function NewsGrid() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const query = params.get("q");

  const { data: newsItems, isLoading } = useQuery({
    queryKey: ["allNews", query],
    queryFn: () =>
      fetchNextServer(`/api/news`, {
        searchQuery: query,
      }),
    throwOnError: true,
  });

  const { addToRefs, clearRefs } = useScrollAnimation([newsItems]);

  useEffect(() => {
    clearRefs();
  }, [query, clearRefs]);

  if (newsItems && newsItems.length === 0) {
    return <EmptyState query={query} />;
  }

  return isLoading ? (
    <GridSkeleton />
  ) : (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-8">
      {newsItems &&
        newsItems.length > 0 &&
        newsItems.map((item) => (
          <li
            key={item.id}
            ref={addToRefs}
            style={{ transform: "translateY(30px)", opacity: 0 }}
          >
            <NewsCard newsData={item} />
          </li>
        ))}
    </ul>
  );
}
