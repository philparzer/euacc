"use client";

import joinWaitlist from "@/actions/join-waitlist";
import { useFormState, useFormStatus } from "react-dom";
import { useRef } from "react";
import Button from "./button";

const SubmitButton = ({ state }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-center">
      <div
        className={`relative flex pt-2 ${
          state.message && !state.isError
            ? "pointer-events-none opacity-50"
            : "cursor-pointer opacity-100"
        }`}
      >
        <div className={`z-10`}>
        <Button variant="secondary" ref={buttonRef} disabled={state.message && !state.isError}>Join Waitlist</Button>
          
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
    <div className="text-center flex flex-col justify-between">
      <div className="flex items-center flex-col gap-4 pb-4 text-white/80">
        Want to stay in the loop?*
      </div>

      <form className="flex flex-col gap-4 justify-between" action={formAction}>
        <div className="flex flex-col items-center h-full gap-[18px] ">
          <div className="relative">
            <input
              className="w-full text-white px-4 py-1 placeholder:text-white/50 bg-white/20"
              placeholder="name"
              required
              type="text"
              name="name"
            ></input>
          </div>
          <div className="relative text-white">
            <input
              className="w-full px-4 py-1 placeholder:text-white/50 bg-white/20"
              placeholder="email"
              required
              type="email"
              name="email"
            ></input>
          </div>
        </div>
        <div className="">
          <SubmitButton state={state} />
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
