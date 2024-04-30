"use client";

import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface AddTopicButtonProps {
  handler: (addition: string) => void;
}

const AddTopicButton = ({ handler }: AddTopicButtonProps) => {
  const [inputShown, setInputShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [inputVal, setInputVal] = useState("");

  const handleClickOutside = () => {
    // Your custom logic here
    setInputShown(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="mt-5">
      {inputShown ? (
        <div
          ref={ref}
          className="relative flex flex-wrap gap-2 items-center justify-center"
        >
          <input
            onChange={(e) => setInputVal(e.target.value)}
            autoFocus
            value={inputVal}
            className="text-white bg-transparent px-2  py-0.5 border border-eu-yellow rounded-md"
          ></input>
          <p className="absolute -bottom-8 text-xs w-full text-center">
            you can add an item, we will save it in our database and take a look
          </p>
          <button
            disabled={!inputVal}
            onClick={() => {
              handler(inputVal);
              setInputShown(false);
            }}
            className="text-eu-yellow px-2  py-0.5 border border-eu-yellow rounded-md"
          >
            add+
          </button>
        </div>
      ) : (
        <button
          onClick={() => setInputShown(true)}
          className="text-eu-yellow px-2  py-0.5 border border-eu-yellow rounded-md"
        >
          add+
        </button>
      )}
    </div>
  );
};

export default AddTopicButton;
