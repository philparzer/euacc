import DecentralizedAnimation from "@/components/animations/decentralized-animation";
import LeftRightAnimation from "@/components/animations/left-right-animation";
import WithEuAnimation from "@/components/animations/with-eu-animation";
import Button from "@/components/button";
import FAQBlock from "@/components/faq-block";
import {
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@/components/ui/popover";
import VoteContainer from "@/components/vote-container";
import WaitlistForm from "@/components/waitlist-form";
import { links } from "@/data/links";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const logoVotesPromise = sql`SELECT * FROM logo_votes`;

  return (
    <main className="relative z-10 flex min-h-[100dvh] justify-center">
      <div className="flex max-w-[1300px] flex-col items-center">
        <div className="flex flex-col justify-between xl:h-[90vh] xl:max-h-[900px] xl:min-h-[500px]">
          <section className="flex flex-col items-center gap-2 pt-[7vh] text-center">
            <div className="mt-1 max-w-lg sm:mt-2 xl:text-lg">
              <p className="inline">
                European Accelerationism {"(eu/acc)"}
              </p>{" "}
              is a movement for ideas that enable rapid
              technological, and economical growth while
              keeping our values intact.
            </div>
          </section>
          <section className="mt-[10vh]">
            <h1 className="text-center font-arialBlack text-[12vw] leading-[1em] xl:max-w-4xl xl:text-[100px]">
              ACCELERATE EUROPE
            </h1>
          </section>
          <section className="mt-[10vh]  grid w-full xl:max-w-4xl justify-center gap-9 xl:grid-cols-3">
            <div className="flex max-w-[340px] flex-col justify-between gap-10 border border-dashed border-eu-yellow p-6 text-center sm:max-w-none xl:gap-0">
              <div className="text-eu-yellow">
                our official Discord, join our meetups,
                discussions, and help our cause
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://discord.com/invite/ebfHJDv9cP"
                >
                  <Button variant="primary">
                    JOIN DISCORD
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex max-w-[340px] flex-col justify-between gap-10 border border-dashed border-eu-yellow p-6 text-center sm:max-w-none xl:gap-0">
              <div>
                information about some of our goals,
                initiatives, and how we organize
              </div>
              <div>
                <div className="flex justify-center">
                  <Link
                    target="_blank"
                    href="https://eu-acc.com"
                  >
                    <Button
                      className="w-full"
                      variant="secondary"
                    >
                      EU-ACC.COM
                    </Button>
                  </Link>
                </div>
                <Popover>
                  <PopoverTrigger>
                    <div className="pt-4 underline decoration-eu-yellow decoration-2 underline-offset-2">
                      Other Links and Socials
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    sideOffset={14}
                    className="flex flex-col items-center gap-3 font-semibold text-eu-blue"
                  >
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="max-w-[340px] gap-10 border border-dashed border-eu-yellow p-6 sm:max-w-none xl:gap-0">
              <WaitlistForm />
            </div>
          </section>
        </div>
        <section className="mt-[100px] flex flex-col gap-40 xl:mt-[200px]">
          <FAQBlock
            question="Left or Right?"
            answer={
              <span>
                We reject culture wars and aren’t concerned
                with polarising ideologies. We focus on
                <span className="font-bold text-white/100">
                  {" "}
                  pragmatic solutions that help every
                  European.
                </span>
              </span>
            }
            animation={<LeftRightAnimation />}
          />
          <FAQBlock
            question="Who's in charge?"
            answer={
              <span>
                We are a
                <span className="font-bold text-white/100">
                  {" "}
                  decentralized movement{" "}
                </span>
                with many different goals.
              </span>
            }
            animation={<DecentralizedAnimation />}
          />
          <FAQBlock
            question="F*ck the EU, right?"
            answer={
              <span>
                <span className="font-bold text-white/100">
                  No,{" "}
                </span>
                we work with EU policy makers, not against
                them.
              </span>
            }
            animation={<WithEuAnimation />}
          />
        </section>

        <section className="mt-[200px] flex flex-col items-center gap-20 text-center xl:items-start xl:justify-between xl:text-left xl:mt-[300px] 2xl:flex-row">
          <div className="xl:max-w-md grow">
            <h1 className="text-center font-arialBlack text-4xl xl:text-left xl:text-6xl">
              VOTE ON OUR LOGO
            </h1>
            <p className="mt-6 max-w-lg">
              Vote on your favorite one or submit your own.
            </p>
            <div className="mt-6">
              <Link
                target="_blank"
                href="https://github.com/philparzer/euacc/blob/main/data/README.md"
              >
                <Button variant="primary">
                  Submit new logo
                </Button>
              </Link>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="animate-pulse my-20">
                Loading Vote Data...
              </div>
            }
          >
            <VoteContainer
              logoVotePromise={logoVotesPromise}
            />
          </Suspense>
        </section>
        <section className="mb-[200px] mt-[200px] flex w-full justify-center text-center xl:justify-start xl:text-left xl:mb-[40dvh] xl:mt-[300px]">
          <div>
            <h1 className="xl:max-w-md text-center xl:text-left font-arialBlack text-4xl xl:text-6xl">
              UPDATE THIS WEBSITE
            </h1>
            <p className="mt-6 max-w-lg">
              Content, design, and everything else you see
              here is 100% open-source. We are open to all
              kinds of contributions.
            </p>
            <div className="mt-6">
              <Link
                target="_blank"
                href="https://github.com/philparzer/euacc"
              >
                <Button variant="primary">
                  CONTRIBUTE ON GITHUB
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <footer className="flex flex-col items-center text-center text-xs">
          <div>
            for contact information, check{" "}
            <Link href="/imprint" className="underline">
              Imprint
            </Link>
          </div>

          <div>
            *if you submit the waitlist form you agree to
            our{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
