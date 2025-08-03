import GridSkeleton from "@/features/home/components/GridSkeleton";
import React from "react";
import Header from "@/components/partials/Header";

const loading = () => {
  return (
    <>
      <Header />
      <GridSkeleton />
    </>
  );
};

export default loading;
