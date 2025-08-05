import React from "react";
import { CardContent, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Calendar } from "lucide-react";
import { formatDate } from "@/helpers/formatDate";

const ContentSection = ({ newsData }) => {
  return (
    <CardContent className="flex flex-col justify-between">
      {/* Description Section */}
      <CardDescription className="text-[#2a2a2a]/80 text-sm leading-relaxed line-clamp-3 mb-4">
        {newsData.content}
      </CardDescription>
      {/* Footer Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[#af695c]">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(newsData.publishedAt)}</span>
        </div>
        <a
          href={newsData.url}
          target="_blank"
          className="inline-flex cursor-pointer items-center gap-1 text-xs text-[#af695c] hover:text-[#2a2a2a] transition-colors duration-200"
        >
          Read more
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </CardContent>
  );
};

export default ContentSection;
