import KeyFacts from "@/components/key-facts";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <main className="flex relative z-10 min-h-[100dvh] flex-col items-center justify-center">
      <section className="flex flex-col mt-20 text-center  max-w-[600px] gap-2 items-center">
        
        <div className="mt-1 sm:mt-2 max-w-[400px]">
          <h1 className="inline">European Accelerationism {"(eu/acc)"}</h1> is a movement for ideas that enable rapid
          technological, and economical growth while keeping our values intact.
        </div>
      </section>
      <section className="mt-10">
      <WaitlistForm />
      </section>
    </main>
  );
}
