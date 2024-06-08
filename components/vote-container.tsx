"use client";

import { logos } from "@/data/logos";
import LogoContainer from "./logo-container";
import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { QueryResult } from "@vercel/postgres";
import {use} from 'react';

interface VoteContainerProps {
  logoVotePromise: Promise<QueryResult>;
}


export default function VoteContainer({ logoVotePromise }: VoteContainerProps) {



  const {rows: voteData} = use(logoVotePromise);
  const [allButtonsDisabled, setAllButtonsDisabled] =
    useState(false);

  useEffect(() => {
    setAllButtonsDisabled(!!getCookie("vote"));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-20 mt-4">
        {logos.map((logo) => (
          <LogoContainer
            onSubmit={() => setAllButtonsDisabled(true)}
            disabledByParent={allButtonsDisabled}
            key={logo.name}
            votes={voteData?.find((vote) => vote.name === logo.name)?.votes}
            name={logo.name}
            imgSrc={logo.imgSrc}
            credit={{
              name: logo.creatorName,
              link: logo.creatorLink,
            }}
          />
        ))}
        <div className="flex relative flex-col items-center">
          <div className="w-[120px] flex items-center justify-center border border-dashed border-eu-yellow text-eu-yellow h-[120px] relative">
            your idea
          </div>
          <div className="w-full flex justify-center pt-4">
            <Link target="_blank" href="https://github.com/philparzer/euacc/blob/main/data/README.md">
              <Button variant="primary">Submit</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
