"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import { useEffect, useRef, useState } from "react";
import voteForLogo from "@/actions/vote-logo";
import { getCookie, setCookie } from "cookies-next";

interface LogoContainerProps {
  name: string;
  credit: {
    name: string;
    link: string;
  };
  imgSrc: string;
  onSubmit: () => void;
  disabledByParent: boolean;
}

const SubmitButton = ({ state, name, disabledByParent, onSubmit }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pending } = useFormStatus();
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {

    if (state.message && ! state.isError) {
      setCookie('vote', name);
    }

    if (state.isError) {
      console.log(state.message);
    }

    
  }, [state.isError, state.message]);

  useEffect(() => {
    if (getCookie("vote")) {
      
      setHasVoted(true);
    }
  
  }, [])


  const isDisabled = (state.message && !state.isError) || hasVoted

  return (
    <div  className="flex justify-center relative">
      <div
        className={`relative flex ${
          isDisabled
            ? "pointer-events-none opacity-50"
            : "cursor-pointer opacity-100"
        }`}
      >
        <div className={`z-10`}>
          <Button
            variant="secondary"
            ref={buttonRef}
            disabled={isDisabled}
            onClick={onSubmit}
          >
            Vote
          </Button>
        </div>
      </div>
      <div
        className={`flex absolute top-12 ${
          state.isError
            ? "text-white py-1 px-2 bg-red-500"
            : "text-white"
        }`}
      >
        {pending ? (
          <p className="animate-pulse !bg-transparent text-white">
            waiting...
          </p>
        ) : state.message || isDisabled && name === getCookie("vote") ? (
          <>
            <div className="">
              {state.isError ? (
                "Error"
              ) : (
                <div className="flex flex-col items-center">
                  <p>Your Vote</p>
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

const LogoContainer = ({
  name,
  credit,
  imgSrc,
  disabledByParent,
  onSubmit,
}: LogoContainerProps) => {
  const [state, formAction] = useFormState(
    voteForLogo,
    initialState
  );


  return (
    <form
      className="flex relative flex-col items-center"
      action={formAction}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className=" px-1.5 font-arialBlack text-sm z-10 absolute -right-2 top-0 bg-eu-yellow text-black">
              i
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="p-4">
              <p>
                by{" "}
                <a
                  href={credit.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-eu-yellow underline"
                >
                  {credit.name}
                </a>
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <input className="hidden" name="name" value={name} readOnly></input>
      <div className="w-[120px] h-[120px] relative">
        <img
          alt="logo"
          src={imgSrc}
          className="w-full h-full object-contain"
        ></img>
      </div>
      <div className="w-full flex justify-center pt-4">
        <SubmitButton state={state} name={name} onSubmit={onSubmit} />
      </div>
    </form>
  );
};

export default LogoContainer;
