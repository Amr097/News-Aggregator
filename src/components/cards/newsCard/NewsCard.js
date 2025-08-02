import { Card } from "@/components/ui/card";
import ImageSection from "./ImageSection";
import TitleSection from "./TitleSection";
import ContentSection from "./ContentSection";

export default function NewsCard({ newsData }) {
  return (
    <li className="w-full max-w-md mx-auto">
      <Card className="h-full grid grid-rows-[max-content_max-content_1fr] hover:shadow-lg transition-shadow duration-300 bg-white/80 border border-[#eaeaea]/30">
        {/* Image Section */}
        <ImageSection newsData={newsData} />
        {/* Title Section */}
        <TitleSection newsData={newsData} />
        {/* Content Section */}
        <ContentSection newsData={newsData} />
      </Card>
    </li>
  );
}
