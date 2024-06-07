import type { Metadata } from "next";
import "./globals.css";
import BgVideo from "@/components/bg-video";
import { Analytics } from "@vercel/analytics/react";
import ogImage from "./opengraph-image.png";
import Link from "next/link";
import NewsBanner from "@/components/news-banner";

export const metadata: Metadata = {
  title: "EU Accelerationism",
  description: "let's make Europe great again",
  metadataBase: new URL(
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  ),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-white/80`}>
        <NewsBanner 
          message="EU Elections this weekend. Go Vote!"
          link="https://euandi.eu"
        />
        <BgVideo
          playbackRate={1}
          src={"bg.mp4"}
          posterSrc={"bg-poster.png"}
        />
        <div className="px-[3vw]">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
