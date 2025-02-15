import type { Metadata } from "next";
import "./globals.css";
import BgVideo from "@/components/bg-video";
import { Analytics } from "@vercel/analytics/react";
import ogImage from "./opengraph-image.png";
import Logo from "@/components/logo";
import NewsBanner from "@/components/news-banner";
// import NewsBanner from "@/components/news-banner";

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
        <nav className="flex w-full items-center justify-center pt-10">
          <div className="w-[100px]">
            <Logo
              textColorEU="#FFFFFF"
              textColorACC="#FFFFFF"
              starColor="#FFDD00"
            />
          </div>
        </nav>
        <BgVideo
          playbackRate={0.5}
          src={"bg.mp4"}
          posterSrc={"bg-poster.png"}
        />
        <div className="px-[3vw]">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
