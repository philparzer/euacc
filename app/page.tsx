import KeyFacts from "@/components/key-facts";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <main className="flex relative z-10 min-h-[100dvh] pt-[100px] flex-col items-center justify-center">
      <section className="flex flex-col text-center  max-w-[600px] gap-2 items-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          <span className="leading-[1.4em]">
          Let&apos;s make <span className="underline underline-offset-2 decoration-eu-yellow decoration-5 ">Europe</span>{" "}
          <span className="bg-eu-yellow rounded-md px-1 text-black whitespace-nowrap">
            the center of the world
          </span>
          {" "}again
          </span>
        </h1>
        <p className="mt-1 sm:mt-2 text-lg sm:text-xl">
          EU/Accelerationism is a movement for centrist ideas that enable rapid
          technological, and economical growth while keeping our values intact.
        </p>
      </section>
      <WaitlistForm />
      <KeyFacts />
    </main>
  );
}
