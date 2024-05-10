"use client";

import joinWaitlist from "@/actions/join-waitlist";
import { useFormState, useFormStatus } from "react-dom";
import { useRef } from "react";

const SubmitButton = ({ state }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col  items-center">
      <div
        className={`relative flex ${
          state.message && !state.isError
            ? "pointer-events-none opacity-50"
            : "cursor-pointer opacity-100"
        }`}
      >
        <div className={`z-10 `}>
          <button
            ref={buttonRef}
            className={` text-black font-var-heading font-semibold bg-white/80 hover:bg-white/100 focus:bg-white/100 text-left group text-semibold text-sm relative block whitespace-nowrap  px-3 py-2 `}
            disabled={state.message && !state.isError}
          >
            Join the Waitlist
          </button>
        </div>
      </div>
      <div className="h-10 flex"></div>
      <div
        className={`flex ${
          state.isError ? "text-white py-1 px-2 bg-red-500" : "text-white"
        }`}
      >
        {pending ? (
          <p className="animate-pulse !bg-transparent text-white">waiting...</p>
        ) : state.message ? (
          <>
            <div className="">
              {state.isError ? (
                state.message
              ) : (
                <div className="flex flex-col items-center">
                  <p>Thanks for signing up!</p>
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

const initialState = {
  message: "",
  isError: false,
};

const WaitlistForm = () => {
  const [state, formAction] = useFormState(joinWaitlist, initialState);

  return (
    <div className="my-20 text-center">
      <div className="flex items-center flex-col gap-4 pb-4">
      <a href="https://discord.com/invite/X3Hk9kSv" target="_blank"
        className={` text-black font-var-heading font-semibold bg-eu-yellow/90 hover:bg-eu-yellow/100 focus:bg-eu-yellow/100 text-left group text-semibold text-sm relative block whitespace-nowrap  px-3 py-2 `}
      >
        Join our Discord
      </a>
      <div className="flex items-center gap-2">
      <div className="h-full w-20 border-t border-white/20"></div>
      <div>or</div>
      <div className="h-full w-20 border-t border-white/20"></div>
      </div>
      </div>

      <form className="flex flex-col items-center gap-4 " action={formAction}>
        <div className="flex flex-col items-center gap-[18px]">
          <div className="relative">
            <input
              className="w-[240px] text-white px-4 py-1 placeholder:text-white/50 bg-white/20"
              placeholder="name"
              required
              type="text"
              name="name"
            ></input>
          </div>
          <div className="relative text-white">
            <input
              className="w-[240px] px-4 py-1 placeholder:text-white/50 bg-white/20"
              placeholder="email"
              required
              type="email"
              name="email"
            ></input>
          </div>
        </div>
        <div className="flex ">
          <SubmitButton state={state} />
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
