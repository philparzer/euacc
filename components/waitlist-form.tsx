"use client";

import joinWaitlist from "@/actions/join-waitlist";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div
          className={`z-10 `}
        >
          <button
            ref={buttonRef}
            className={`font-var-heading group font-bold relative block whitespace-nowrap text-black bg-eu-yellow px-3 py-2 text-sm uppercase `}
            disabled={state.message && !state.isError}
           
          >
            join waitlist
           
          </button>
        </div>
      
      </div>
      <div
        className={`mt-10 h-10 ${
          state.isError ? "text-white bg-red-500" : "text-white"
        }`}
      >
        {pending ? (
          <p className="animate-pulse text-black">waiting...</p>
        ) : state.message ? (
          <>
            <div className="">
              {state.isError ? (
                state.message
              ) : (
                <div className="flex flex-col items-center">
                  <p>Thanks for signing up.</p>
                  <p className="flex gap-2 font-semibold items-center underline-offset-2">DM us on <Link target="_blank" href="https://instagram.com/mypoca_official"><Image width={20} height={20} alt="insta" src="/links/Instagram.png"></Image></Link>or<Link target="_blank" href="https://twitter.com/mypoca_official"><Image width={16} height={16} alt="twitter" src="/links/X (Twitter).png"></Image></Link> for instant access code!</p>
                </div>
              )}
            </div>
          </>
        ) :
        null}
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
    <>
    <h2 className="mt-[100px] mb-4 text-white font-bold text-xl">Sign up to our waitlist</h2>
      <form className="flex flex-col items-center gap-4 " action={formAction}>
        <div className="flex flex-col items-center gap-[18px]">
          <div className="relative">
            
            <input
              className="w-[300px] text-black border-2 border-black px-4 py-1 placeholder:text-black focus:outline-pink"
              placeholder="name*"
              required
              type="text"
              name="name"
            ></input>
          </div>
          <div className="relative text-black">
            
            <input
              className="w-[300px] border-2 border-black px-4 py-1 placeholder:text-black focus:outline-pink"
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
    </>
  );
};

export default WaitlistForm;