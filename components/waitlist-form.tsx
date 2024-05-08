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
            className={`font-var-heading group font-bold relative block whitespace-nowrap text-black bg-eu-yellow px-3 py-2 `}
            disabled={state.message && !state.isError}
          >
            join waitlist
          </button>
        </div>
      </div>
      <div className="h-10 flex"></div>
      <div
        className={`flex ${
          state.isError
            ? "text-white py-1 rounded-md px-2 bg-red-500"
            : "text-white"
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
    <div className="mb-20 text-center">
      <h2 className="mt-[100px] mb-4 text-white font-bold text-3xl">
        Join Us
      </h2>
      <form className="flex flex-col items-center gap-4 " action={formAction}>
        <div className="flex flex-col items-center gap-[18px]">
          <div className="relative">
            <input
              className="w-[300px] text-black px-4 py-1 placeholder:text-black focus:outline-pink"
              placeholder="name*"
              required
              type="text"
              name="name"
            ></input>
          </div>
          <div className="relative text-black">
            <input
              className="w-[300px] px-4 py-1 placeholder:text-black focus:outline-pink"
              placeholder="email*"
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
