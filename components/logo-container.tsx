import Button from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";

interface LogoContainerProps {
  variant: "upload" | "vote";
  credit?: {
    name: string;
    link: string;
  };
  imgSrc?: string;
}

interface VoteContainerProps extends LogoContainerProps {
  variant: "vote";
  credit: {
    name: string;
    link: string;
  };
  imgSrc: string;
}

interface UploadContainerProps extends LogoContainerProps {
  variant: "upload";
  credit?: never;
  imgSrc?: never;
}

const LogoContainer = ({
  credit,
  imgSrc,
  variant,
}: VoteContainerProps | UploadContainerProps) => {
  return (
    <div className="flex relative flex-col items-center">
      {variant === "vote" && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger title="more information">
              <div className=" px-2 font-arialBlack text-sm z-10 absolute -right-2 top-0 bg-eu-yellow text-black">
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
      )}
      <div className="w-[120px] h-[120px] relative">
        {variant === "vote" ? (
          <img
            alt="logo"
            src={imgSrc}
            className="w-full h-full object-contain"
          ></img>
        ) : (
          <div className="w-full flex text-lg items-center justify-center text-eu-yellow h-full border border-dashed border-eu-yellow">
            your idea
          </div>
        )}
      </div>
      <div className="w-full flex justify-center pt-4">
        <Button variant={variant === "vote" ? "secondary" : "primary"}>{variant === "vote" ? "Vote" : "Submit"}</Button>
      </div>
    </div>
  );
};

export default LogoContainer;
