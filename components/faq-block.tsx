import { ReactNode } from "react";

interface FAQBlockProps {
  question: string;
  answer: ReactNode;
  animation?: ReactNode;
}

const FAQBlock = ({question, answer, animation}: FAQBlockProps) => {
  return (
    <div className="flex flex-col items-center text-center overflow-hidden">
      <h3 className="opacity-30 font-arialBlack leading-[1em] mb-2 xl:mb-4 uppercase text-[32px] xl:text-[48px]">{question}</h3>
      <div className="text-center max-w-[530px]">
        {answer}
      </div>
      <div className="mt-14 w-[80%] xl:w-[50%]">
        {animation}
      </div>
    </div>
  );
};

export default FAQBlock;
