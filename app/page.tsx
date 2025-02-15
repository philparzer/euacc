import DecentralizedAnimation from "@/components/animations/decentralized-animation";
import LeftRightAnimation from "@/components/animations/left-right-animation";
import WithEuAnimation from "@/components/animations/with-eu-animation";
import Button from "@/components/button";
import FAQBlock from "@/components/faq-block";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-[100dvh] justify-center">
      <div className="flex max-w-[1300px] flex-col items-center">
        <section className="flex flex-col items-center gap-2 text-center">
          <div className="mt-1 max-w-lg text-balance sm:mt-2">
            <p className="inline">
              European Accelerationism {"(eu/acc)"}
            </p>{" "}
            is a movement for ideas that enable rapid
            technological, and economical growth while
            keeping our values intact.
          </div>
        </section>
        <section className="flex flex-col items-center gap-2">
          <h1 className="mt-20 text-center font-arialBlack text-[12vw] leading-[1em] xl:max-w-4xl xl:text-[100px]">
            ACCELERATE EUROPE
          </h1>
        </section>

        <section className="mt-[100px] flex flex-col gap-40 xl:mt-[140px]">
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
        <section className="mt-[100px] flex max-w-lg flex-col items-center gap-2 xl:mt-[200px]">
          <div className="bg-white/10 p-5">
            <h2 className="text-lg font-bold">
              {"Author's Note"}
            </h2>
            <div>
              eu/acc has seen rapid growth since 2024, and
              naturally, several instances of {'"official"'}{" "}
              sites and accounts have appeared.
            </div>
            <div>
              This site is{" "}
              <Link
                target="_blank"
                href="https://github.com/philparzer/euacc"
                className="underline"
              >
                open-source
              </Link>{" "}
              and maintained by{" "}
              <Link
                target="_blank"
                href="https://x.com/parzerp"
                className="underline"
              >
                Philipp Parzer
              </Link>
              .
            </div>
            <div className="mt-2">
              There isn&apos;t a single official eu/acc site
              or account. The movement was initiated by a
              tweet from{" "}
              <Link
                target="_blank"
                href="https://x.com/levelsio"
                className="underline"
              >
                Pieter Levels
              </Link>{" "}
              in 2024. Following this,{" "}
              <Link
                target="_blank"
                href="https://x.com/andreasklinger"
                className="underline"
              >
                Andreas Klinger
              </Link>{" "}
              created a community on{" "}
              <Link
                target="_blank"
                href="https://discord.gg/ny9heCSt6K"
                className="underline"
              >
                Discord
              </Link>{" "}
              and launched the first website at{" "}
              <Link
                target="_blank"
                href="https://eu-acc.com"
                className="underline"
              >
                eu-acc.com
              </Link>
              . Andreas and some other community members
              also initiated the{" "}
              <Link
                target="_blank"
                href="https://eu-inc.org"
                className="underline"
              >
                EU Inc petition
              </Link>
              , which aims to establish a unified EU
              business entity, to great success. Later, a
              fellow discord community member created{" "}
              <Link
                target="_blank"
                href="https://x.com/euacchq"
                className="underline"
              >
                @euacchq
              </Link>{" "}
              which became the {"community's"} voice on X.
            </div>
            <div className="mt-2">
              I have been part of the eu/acc community since
              its inception and have maintained this website
              since 2024. Since late 2024 and early 2025,
              the community has grown and evolved into more of a political
              movement, drifting away from its eu-positive roots. Pieter
              Levels&apos; {'"official"'}{" "}
              <Link
                target="_blank"
                href="https://euacc.com"
                className="underline"
              >
                euacc.com
              </Link>{" "}
              and the X account{" "}
              <Link
                target="_blank"
                href="https://x.com/euaccofficial"
                className="underline"
              >
                @euaccofficial
              </Link>{" "}
              are not what I would consider representative
              of what eu/acc originally stood for when I
              joined. I believe incorporating political
              views and popularizing anti-EU sentiments is
              counterproductive, as the movement was
              initially about reducing bureaucracy and
              improving the EU for people of all political
              backgrounds.
            </div>
            <div>
              That being said, I&apos;m open to point this
              domain to another site if the eu/acc community
              thinks it&apos;s for the best. Please contact
              me on{" "}
              <Link
                target="_blank"
                href="https://x.com/parzerp"
                className="underline"
              >
                X
              </Link>{" "}
              for inquiries regarding this matter.
            </div>
          </div>
        </section>
        <section className="mb-[200px] mt-[200px] flex w-full max-w-lg justify-center text-center xl:mb-[40dvh]">
          <div>
            <h1 className="text-center font-arialBlack text-4xl xl:text-6xl">
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
            <Link
              target="_blank"
              href="/imprint"
              className="underline"
            >
              Imprint
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
