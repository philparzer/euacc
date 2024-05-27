import Button from "@/components/button";
import LogoContainer from "@/components/logo-container";
import WaitlistForm from "@/components/waitlist-form";
import { logos } from "@/data/logos";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex relative z-10 min-h-[100dvh] justify-center">
      <div className="max-w-[1300px] flex flex-col items-center">
      <section className="flex flex-col mt-20 text-center gap-2 items-center">
        <div className="mt-1 sm:mt-2 max-w-lg text-lg">
          <p className="inline">European Accelerationism {"(eu/acc)"}</p> is a
          movement for ideas that enable rapid technological, and economical
          growth while keeping our values intact.
        </div>
      </section>
      <section className="mt-[100px]">
        <h1 className="font-arialBlack text-[100px] leading-[1em] max-w-4xl text-center">
          ACCELERATE EUROPE
        </h1>
      </section>
      <section className="mt-[110px] max-w-4xl grid grid-cols-3 w-full gap-9">
        <div className="border border-eu-yellow border-dashed p-6 text-center flex justify-between flex-col">
          <div className="text-eu-yellow">
            our official Discord, join our meetups, discussions, and help our
            cause
          </div>
          <div>
            <Link href="https://eu-acc.com">
              <Button variant="primary">JOIN DISCORD</Button>
            </Link>
          </div>
        </div>

        <div className="border border-eu-yellow border-dashed p-6 text-center flex justify-between flex-col">
          <div>
            information about some of our goals, initiatives, and how we
            organize
            <p className="pt-3">
              created by{" "}
              <Link
                rel="noopener noreferrer"
                className="underline text-eu-yellow/90 hover:text-eu-yellow/100"
                target="_blank"
                href="https://twitter.com/andreasklinger"
              >
                @andreasklinger
              </Link>
            </p>
          </div>
          <div>
            <Link href="https://eu-acc.com">
              <Button variant="secondary">EU-ACC.COM</Button>
            </Link>
          </div>
        </div>
        <div className="border border-eu-yellow border-dashed p-6">
          <WaitlistForm />
        </div>
      </section>

      <section className=" flex flex-col 2xl:flex-row justify-between w-full mt-[300px] gap-20">
        <div className="grow max-w-md w-full">
          <h1 className="font-arialBlack text-6xl ">VOTE ON OUR LOGO</h1>
          <div className="mt-6">
            <Button variant="primary">Submit new logo</Button>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-20">
            {logos.map((logo) => <LogoContainer
            key={logo.name}
              name={logo.name}
              imgSrc={logo.imgSrc}
              credit={{
                name: logo.creatorName,
                link: logo.creatorLink,
              }}
            />)}
            <div className="flex relative flex-col items-center">
            <div className="w-[120px] flex items-center justify-center border border-dashed border-eu-yellow text-eu-yellow h-[120px] relative">
        your idea
      </div>
      <div className="w-full flex justify-center pt-4">
        <Link href="https://github.com/philparzer/euacc/blob/main/README.md">
        <Button variant="primary">Submit</Button>
        </Link>
      </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex w-full mt-[300px] mb-[40dvh]">
        <div>
          <h1 className="font-arialBlack text-6xl max-w-md">
            UPDATE THIS WEBSITE
          </h1>
          <p className="mt-6 max-w-lg ">
            Content, design, and everything else you see here is 100%
            open-source. We are open to all kinds of contributions.
          </p>
          <div className="mt-6">
            <Button variant="primary">CONTRIBUTE ON GITHUB</Button>
          </div>
        </div>
      </section>
      <footer>
        <Link href="/imprint">Imprint</Link>
      </footer>
      </div>
    </main>
  );
}
