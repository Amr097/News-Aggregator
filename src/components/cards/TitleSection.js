import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { formatDate } from "@/helpers/formatDate";

const TitleSection = ({ newsData }) => {
  return (
    <CardHeader>
      <CardTitle className="text-lg font-bold text-[#2a2a2a] leading-tight line-clamp-2 hover:text-[#af695c] transition-colors duration-200">
        {newsData.title}
      </CardTitle>

      <div className="flex items-center gap-2 text-sm text-[#af695c]">
        <Calendar className="w-4 h-4" />
        <span>{formatDate(newsData.publishDate)}</span>
      </div>
    </CardHeader>
  );
};

export default TitleSection;
