"use client";

import { logos } from "@/data/logos";
import LogoContainer from "./logo-container";
import Link from "next/link";
import Button from "./button";
import { use, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { QueryResult } from "@vercel/postgres";

interface VoteContainerProps {
  logoVotePromise: Promise<QueryResult>;
}

export default function VoteContainer({
  logoVotePromise,
}: VoteContainerProps) {
  const { rows: voteData } = use(logoVotePromise);

  const [allButtonsDisabled, setAllButtonsDisabled] =
    useState(false);

  useEffect(() => {
    setAllButtonsDisabled(!!getCookie("vote"));
  }, []);

  return (
    <div>
      <div className="mt-4 flex flex-wrap justify-center gap-20 xl:justify-start">
        {logos.map((logo) => (
          <LogoContainer
            onSubmit={() => setAllButtonsDisabled(true)}
            disabledByParent={allButtonsDisabled}
            key={logo.name}
            votes={
              voteData?.find(
                (vote) => vote.name === logo.name,
              )?.votes
            }
            name={logo.name}
            imgSrc={logo.imgSrc}
            credit={{
              name: logo.creatorName,
              link: logo.creatorLink,
            }}
          />
        ))}
        <div className="relative flex flex-col items-center">
          <div className="relative flex h-[120px] w-[120px] items-center justify-center border border-dashed border-eu-yellow text-eu-yellow">
            your idea
          </div>
          <div className="flex h-12 w-full items-center justify-center pt-4">
            <Link
              target="_blank"
              href="https://github.com/philparzer/euacc/blob/main/data/README.md"
            >
              <Button variant="primary">Submit</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
