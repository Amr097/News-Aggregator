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
    return NextResponse.json(
      { message: error?.data?.message || "Failed to fetch news" },
      { status: error.statusCode || 500 }
    );
  }
}
