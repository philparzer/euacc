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
