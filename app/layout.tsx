import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/logo";
import BgVideo from "@/components/bg-video";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`text-white/80 ${inter.className}`}>
        <nav className="fixed top-10 z-50 left-0 w-full flex justify-center">
          <div className="w-32">
        <Logo
            
            starColor={"#FFDD00"}
            textColorEU={"#FFFFFF"}
            textColorACC={"#FFFFFF"}
          />
          </div>
        </nav>
        <BgVideo playbackRate={1} src={"bg.mp4"} posterSrc={"bg-poster.png"} />
        <div className="px-[3vw]">{children}</div>
        <footer><a href="https://github.com/philparzer/euacc" target="_blank" className="fixed z-10 pb-1 w-full text-center text-xs left-0 bottom-0 underline">contribute</a></footer>
        <Analytics />
      </body>
    </html>
  );
}
