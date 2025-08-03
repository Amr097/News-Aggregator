import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const GridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-8">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="space-y-3">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default GridSkeleton;
