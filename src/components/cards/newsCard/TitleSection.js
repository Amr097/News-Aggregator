import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";

const TitleSection = ({ newsData }) => {
  return (
    <CardHeader>
      <CardTitle className="text-lg font-bold text-[#2a2a2a] leading-tight line-clamp-2 hover:text-[#af695c] transition-colors duration-200">
        {newsData.title}
      </CardTitle>
    </CardHeader>
  );
};

export default TitleSection;
