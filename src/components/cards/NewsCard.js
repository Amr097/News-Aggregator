import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function NewsCard() {
  // Sample news data
  const newsData = {
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    image: "/placeholder.svg?height=200&width=400",
    sourceName: "TechNews Daily",
    description:
      "A groundbreaking artificial intelligence system has been developed that can diagnose medical conditions with unprecedented accuracy, potentially revolutionizing patient care worldwide.",
    publishDate: "2024-01-15",
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-[#eaeaea]/30">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <Image
            width={400}
            height={200}
            src={newsData.image || "/placeholder.svg"}
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

        {/* Content Section */}
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-[#2a2a2a] leading-tight line-clamp-2 hover:text-[#af695c] transition-colors duration-200">
            {newsData.title}
          </CardTitle>

          <div className="flex items-center gap-2 text-sm text-[#af695c]">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(newsData.publishDate)}</span>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <CardDescription className="text-[#2a2a2a]/80 text-sm leading-relaxed line-clamp-3">
            {newsData.description}
          </CardDescription>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-[#af695c] font-medium">
              {newsData.sourceName}
            </span>
            <button className="inline-flex items-center gap-1 text-xs text-[#af695c] hover:text-[#2a2a2a] transition-colors duration-200">
              Read more
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
