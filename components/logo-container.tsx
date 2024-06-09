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
import { PopoverContent } from "@radix-ui/react-popover";
import { Popover, PopoverTrigger } from "./ui/popover";

interface LogoContainerProps {
  name: string;
  votes: number;
  credit: {
    name: string;
    link: string;
  };
  imgSrc: string;
  onSubmit: () => void;
  disabledByParent: boolean;
}

const SubmitButton = ({
  state,
  name,
  disabledByParent,
  onSubmit,
}: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pending } = useFormStatus();
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    if (state.message && !state.isError) {
      setCookie("vote", name);
    }

    if (state.isError) {
      console.log(state.message);
    }
  }, [state.isError, state.message]);

  useEffect(() => {
    if (getCookie("vote")) {
      setHasVoted(true);
    }
  }, []);

  const isDisabled =
    hasVoted || (state.message && !state.isError);

  return (
    <div className="relative flex justify-center">
      <div
        className={`relative flex ${
          isDisabled || disabledByParent
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
        className={`absolute top-12 flex ${
          state.isError
            ? "bg-red-500 px-2 py-1 text-white"
            : "text-white"
        }`}
      >
        {pending ? (
          <p className="animate-pulse !bg-transparent text-white">
            waiting...
          </p>
        ) : state.message ||
          (isDisabled && name === getCookie("vote")) ? (
          <>
            <div className="">
              {state.isError ? (
                "Error"
              ) : (
                <div className="flex flex-col items-center text-sm">
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
  votes,
  imgSrc,
  disabledByParent,
  onSubmit,
}: LogoContainerProps) => {
  const [state, formAction] = useFormState(
    voteForLogo,
    initialState,
  );

  return (
    <div className="relative flex flex-col items-center">
      <Popover>
        <PopoverTrigger>
          <div className="absolute -right-2 top-0 z-10 bg-eu-yellow px-1.5 font-arialBlack text-sm text-black">
            i
          </div>
        </PopoverTrigger>
        <PopoverContent sideOffset={20} side="top">
          <div className="relative z-50 bg-white px-4 py-2 text-black">
            <p>
              by{" "}
              <a
                href={credit.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-eu-blue underline"
              >
                {credit.name}
              </a>
            </p>
          </div>
        </PopoverContent>
      </Popover>

      <form action={formAction}>
        <input
          className="hidden"
          name="name"
          value={name}
          readOnly
        ></input>
        <div className="relative h-[120px] w-[120px]">
          <img
            alt="logo"
            src={imgSrc}
            className="h-full w-full object-contain"
          ></img>
        </div>
        <div className="relative flex h-12 w-full items-center justify-center pt-4">
          {disabledByParent ? (
            <div
              style={{ opacity: disabledByParent ? 1 : 0 }}
              className="left-0 flex w-full items-center justify-center  font-bold text-eu-yellow transition-opacity"
            >
              {votes}
            </div>
          ) : (
            <SubmitButton
              state={state}
              name={name}
              onSubmit={onSubmit}
              disabledByParent={disabledByParent}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default LogoContainer;
