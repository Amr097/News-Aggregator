import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const ImageSection = ({ newsData }) => {
  return (
    <div className="relative overflow-hidden">
      <Image
        width={500}
        height={300}
        unoptimized
        src={newsData.image || "/placeholder.jpg"}
        alt={newsData.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute top-3 right-3">
        <Badge
          variant="secondary"
          className="bg-[#f9f4ed]/90 text-[#2a2a2a] border-[#eaeaea]/50"
        >
          {newsData.sourceName}
        </Badge>
      </div>
    </div>
  );
};

export default ImageSection;
