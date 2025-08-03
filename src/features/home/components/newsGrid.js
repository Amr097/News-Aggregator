"use client";

import NewsCard from "@/components/cards/newsCard/NewsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllNews } from "@/services/fetchAllNews";

export default function NewsGrid() {
  const { data: newsItems } = useQuery({
    queryKey: ["allNews"],
    queryFn: fetchAllNews,
  });

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-8">
      {newsItems &&
        newsItems.length > 0 &&
        newsItems.map((item) => <NewsCard key={item.id} newsData={item} />)}
    </ul>
  );
}
