import type { Metadata } from "next";
import "./globals.css";
import BgVideo from "@/components/bg-video";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "EU Accelerationism",
  description: "let's make Europe great again",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-white/80`}>
        <BgVideo playbackRate={1} src={"bg.mp4"} posterSrc={"bg-poster.png"} />
        <div className="px-[3vw]">{children}</div>
        <footer className="mt-[40dvh] flex justify-center">
          <p>made in Europe, by Europeans, for Europeans</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
