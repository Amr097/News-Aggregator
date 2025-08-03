import { fetchAllNews } from "@/services/fetchAllNews";
import { NextResponse } from "next/server";
import { getQueryFromUrl } from "@/helpers/url";
export async function GET(request) {
  try {
    const { searchQuery } = getQueryFromUrl(request.url);
    console.log(searchQuery);

    const newsData = await fetchAllNews(searchQuery);

    return NextResponse.json(newsData);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
