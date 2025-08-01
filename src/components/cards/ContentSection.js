import React from "react";
import { CardContent, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ContentSection = ({ newsData }) => {
  return (
    <CardContent className="flex flex-col justify-between">
      {/* Description Section */}
      <CardDescription className="text-[#2a2a2a]/80 text-sm leading-relaxed line-clamp-3 mb-4">
        {newsData.description}
      </CardDescription>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[#af695c] font-medium">
          {newsData.sourceName}
        </span>
        <button className="inline-flex cursor-pointer items-center gap-1 text-xs text-[#af695c] hover:text-[#2a2a2a] transition-colors duration-200">
          Read more
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </CardContent>
  );
};

export default ContentSection;
