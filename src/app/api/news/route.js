import { fetchAllNews } from "@/services/fetchAllNews";
import { NextResponse } from "next/server";
export async function GET(request) {
  console.log(request);
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const country = searchParams.get("country");

    const newsData = await fetchAllNews({
      ...(query && { q: query }),
      country: country || "us",
    });

    return NextResponse.json(newsData);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
