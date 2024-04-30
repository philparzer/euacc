import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/logo";
import BgVideo from "@/components/bg-video";
import { Analytics } from "@vercel/analytics/react"

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
        <nav className="flex fixed top-0 right-0 w-full items-center justify-center p-4">
          <div className="w-[120px]">
            <Logo
              starColor={"#FFDD00"}
              textColorEU={"#FFFFFF"}
              textColorACC={"#FFFFFF"}
            />
          </div>
        </nav>
        <BgVideo playbackRate={1} src={"bg.mp4"} posterSrc={"bg-poster.png"} />
        <div className="px-[3vw]">{children}</div>
        <footer className="flex text-xs flex-col items-center justify-center gap-1 pb-1 opacity-50">
          <div>
            credits to{" "}
            <a
              href="https://twitter.com/levelsio/status/1784943280171467260"
              className="text-eu-yellow underline"
            >
              @levelsio
            </a>{" "}
            for the inspo
          </div>

          <div>
            built by{" "}
            <a
              href="https://twitter.com/philipp_parzer"
              className="text-eu-yellow underline"
            >
              @philipp_parzer
            </a>{" "}
            and friends
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
