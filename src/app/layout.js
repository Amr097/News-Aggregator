import { Bitter, IBM_Plex_Sans, Jim_Nightshade } from "next/font/google";
import "./styles/globals.css";

const headerFont = Bitter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-header",
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

const logoFont = Jim_Nightshade({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

export const metadata = {
  title: "Beyond Aggregation",
  description: "Curated news from everywhere, just for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headerFont.variable} ${bodyFont.variable} ${logoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
