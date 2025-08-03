"use client";

import NewsCard from "@/components/cards/newsCard/NewsCard";
import { useQuery } from "@tanstack/react-query";
import fetchNextServer from "@/services/fetchNextServer";
import { useSearchParams } from "next/navigation";

export default function NewsGrid() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const query = params.get("q");

  const { data: newsItems } = useQuery({
    queryKey: ["allNews", query],
    queryFn: () =>
      fetchNextServer(`/api/news`, {
        searchQuery: query,
      }),
  });

  console.log(newsItems);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-8">
      {newsItems &&
        newsItems.length > 0 &&
        newsItems.map((item) => <NewsCard key={item.id} newsData={item} />)}
    </ul>
  );
}
