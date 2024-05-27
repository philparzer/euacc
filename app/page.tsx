import Button from "@/components/button";
import VoteContainer from "@/components/vote-container";
import WaitlistForm from "@/components/waitlist-form";
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
      <section className="mt-[100px] ">
        <h1 className="font-arialBlack text-[42px] xl:text-[100px] leading-[1em] xl:max-w-4xl text-center">
          ACCELERATE EUROPE
        </h1>
      </section>
      <section className="mt-[110px] max-w-4xl grid xl:grid-cols-3 w-full gap-9">
        <div className="border border-eu-yellow border-dashed gap-10 xl:gap-0 p-6 text-center flex justify-between flex-col">
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

        <div className="border border-eu-yellow border-dashed gap-10 xl:gap-0 p-6 text-center flex justify-between flex-col">
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
        <div className="border border-eu-yellow border-dashed gap-10 xl:gap-0 p-6">
          <WaitlistForm />
        </div>
      </section>

      <section className=" flex flex-col 2xl:flex-row justify-between mt-[200px] xl:mt-[300px] gap-20">
        <div className="grow max-w-md">
          <h1 className="font-arialBlack text-4xl xl:text-6xl ">VOTE ON OUR LOGO</h1>
          <p className="mt-6 max-w-lg ">
            Vote on your favorite one or submit your own.
          </p>
          <div className="mt-6">
            <Button variant="primary">Submit new logo</Button>
          </div>
        </div>
        <VoteContainer />
      </section>
      <section className=" flex w-full mt-[200px] xl:mt-[300px] mb-[200px] xl:mb-[40dvh]">
        <div>
          <h1 className="font-arialBlack text-4xl xl:text-6xl max-w-md">
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
      <footer className="flex flex-col items-center">
      <div>
        for contact information, check <Link href="/imprint" className="underline">Imprint</Link></div>
        
        <div>
        *if you submit the waitlist form you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link></div>
      </footer>
      </div>
    </main>
  );
}
