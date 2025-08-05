import { Card } from "@/components/ui/card";
import ImageSection from "./ImageSection";
import TitleSection from "./TitleSection";
import ContentSection from "./ContentSection";

export default function NewsCard({ newsData }) {
  return (
    <Card className="h-full grid grid-rows-[max-content_max-content_1fr] hover:shadow-lg transition-shadow duration-300 bg-white/80 border border-[#eaeaea]/30">
      <ImageSection newsData={newsData} />
      <TitleSection newsData={newsData} />
      <ContentSection newsData={newsData} />
    </Card>
  );
}
