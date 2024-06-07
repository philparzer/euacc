import Button from "@/components/button";
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

export default async function Home() {
  const { rows } = await sql`SELECT * FROM logo_votes`;

  return (
    <main className="flex relative z-10 min-h-[100dvh] justify-center">
      <div className="max-w-[1300px] flex flex-col items-center">
        <section className="flex flex-col mt-20 text-center gap-2 items-center">
          <div className="mt-1 sm:mt-2 max-w-lg xl:text-lg">
            <p className="inline">
              European Accelerationism {"(eu/acc)"}
            </p>{" "}
            is a movement for ideas that enable rapid
            technological, and economical growth while
            keeping our values intact.
          </div>
        </section>
        <section className="mt-[100px] ">
          <h1 className="font-arialBlack text-[12vw] xl:text-[100px] leading-[1em] xl:max-w-4xl text-center">
            ACCELERATE EUROPE
          </h1>
        </section>
        <section className="mt-[110px] max-w-4xl grid xl:grid-cols-3 w-full gap-9 justify-center">
          <div className="border  max-w-[340px] sm:max-w-none border-eu-yellow border-dashed gap-10 xl:gap-0 p-6 text-center flex justify-between flex-col">
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

          <div className="border max-w-[340px] sm:max-w-none border-eu-yellow border-dashed gap-10 xl:gap-0 p-6 text-center flex justify-between flex-col">
            <div>
              information about some of our goals,
              initiatives, and how we organize
            </div>
            <div>
              <div>
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
                  className="flex flex-col gap-3 items-center font-semibold text-eu-blue"
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
          <div className="border  max-w-[340px] sm:max-w-none border-eu-yellow border-dashed gap-10 xl:gap-0 p-6">
            <WaitlistForm />
          </div>
        </section>

        <section className=" flex flex-col 2xl:flex-row text-center sm:text-left items-center sm:items-start sm:justify-between mt-[200px] xl:mt-[300px] gap-20">
          <div className="grow max-w-md">
            <h1 className="font-arialBlack text-4xl xl:text-6xl text-center sm:text-left">
              VOTE ON OUR LOGO
            </h1>
            <p className="mt-6 max-w-lg ">
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
          <VoteContainer voteData={rows} />
        </section>
        <section className=" flex w-full justify-center text-center sm:justify-start sm:text-left mt-[200px] xl:mt-[300px] mb-[200px] xl:mb-[40dvh]">
          <div>
            <h1 className="font-arialBlack text-4xl xl:text-6xl max-w-md">
              UPDATE THIS WEBSITE
            </h1>
            <p className="mt-6 max-w-lg ">
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
