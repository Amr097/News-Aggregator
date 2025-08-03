import Header from "@/components/partials/Header";
import NewsGrid from "@/features/home/components/NewsGrid";
import { fetchAllNews } from "@/services/fetchAllNews";
import { getQueryClient } from "@/lib/tanstack-query/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["allNews", null],
    queryFn: fetchAllNews,
  });
  console.log("page rerender");
  return (
    <>
      <Header />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NewsGrid />
      </HydrationBoundary>
    </>
  );
}
