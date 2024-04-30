import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EU ACCELERATIONISM",
  description: "make europe build again",
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
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
        <video src="4.mov" className="w-full opacity-10 h-full top-0 left-0 object-cover" autoPlay loop playsInline muted></video>
        
        </div>
        <div className="px-[3vw]">
        {children}
        </div>
        <footer className="flex justify-center gap-1 text-sm pb-1 opacity-50">
          credits to {" "} <a href="https://twitter.com/levelsio/status/1785003367002956143" className="text-eu-yellow underline">@levelsio</a> {" "} for the inspo
        </footer>
      </body>
    </html>
  );
}
