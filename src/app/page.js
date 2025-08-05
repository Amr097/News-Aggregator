import Header from "@/components/partials/Header";
import NewsGrid from "@/features/home/components/newsGrid";
import { fetchAllNews } from "@/services/fetchAllNews";
import { getQueryClient } from "@/lib/tanstack-query/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import GridSkeleton from "@/features/home/components/GridSkeleton";

export default async function Home() {
  const queryClient = getQueryClient();

  // Prefetch initial news data on the server
  await queryClient.prefetchQuery({
    queryKey: ["allNews", null],
    queryFn: fetchAllNews,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  return (
    <>
      <Header />
      {/* Provide the pre-fetched data to the client */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense>
          <NewsGrid />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
