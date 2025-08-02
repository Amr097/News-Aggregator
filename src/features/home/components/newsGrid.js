"use client";

import NewsCard from "@/components/cards/NewsCard";
import { useQuery } from "@tanstack/react-query";
const items = [
  {
    id: 1,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    image: "/placeholder.svg?height=200&width=400",
    sourceName: "TechNews Daily",
    description:
      "A groundbreaking artificial intelligence system has been developed that can diagnose medical conditions with unprecedented accuracy, potentially revolutionizing patient care worldwide.",
    publishDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Climate Change Summit Reaches Historic Agreement",
    image: "/placeholder.svg?height=200&width=400",
    sourceName: "Global Times",
    description:
      "World leaders have reached a landmark agreement on climate action, committing to ambitious targets for carbon reduction and renewable energy adoption over the next decade.",
    publishDate: "2024-01-14",
  },
  {
    id: 3,
    title: "Space Exploration Milestone: Mars Colony Plans Unveiled",
    image: "/placeholder.svg?height=200&width=400",
    sourceName: "Space Weekly",
    description:
      "Scientists and engineers have revealed detailed plans for the first permanent human.",
    publishDate: "2024-01-13",
  },
  {
    id: 4,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    image: "/placeholder.svg?height=200&width=400",
    sourceName: "TechNews Daily",
    description:
      "A groundbreaking artificial intelligence system has been developed that can diagnose medical conditions with unprecedented accuracy, potentially revolutionizing patient care worldwide. A groundbreaking artificial intelligence system has been developed that can diagnose medical conditions with unprecedented accuracy, potentially revolutionizing patient care worldwide.A groundbreaking artificial intelligence system has been developed that can diagnose medical conditions with unprecedented accuracy, potentially revolutionizing patient care worldwide.",
    publishDate: "2024-01-15",
  },
  {
    id: 5,
    title: "Climate Change Summit Reaches Historic Agreement",
    image: "/placeholder.svg?height=200&width=400",
    sourceName: "Global Times",
    description:
      "World leaders have reached a landmark agreement on climate action, committing to ambitious targets for carbon reduction and renewable energy adoption over the next decade.",
    publishDate: "2024-01-14",
  },
  {
    id: 6,
    title: "Space Exploration Milestone: Mars Colony Plans Unveiled",
    image: "/placeholder.svg?height=200&width=400",
    sourceName: "Space Weekly",
    description:
      "Scientists and engineers have revealed detailed plans for the first permanent human.",
    publishDate: "2024-01-13",
  },
];

export default function NewsGrid() {
  const { data: newsItems } = useQuery({
    queryKey: ["allNews"],
  });

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-8">
      {newsItems &&
        newsItems.length > 0 &&
        newsItems.map((item) => <NewsCard key={item.id} newsData={item} />)}
    </ul>
  );
}
