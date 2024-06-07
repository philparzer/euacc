import Link from "next/link";

interface NewsBannerProps {
  message: string;
  link: string;
}

const NewsBanner = ({ message, link }: NewsBannerProps) => {
  return (
    <div className="fixed rounded-b-xl flex text-sm py-2 text-center z-50 underline-offset-2 items-center w-full justify-center bg-white text-black underline">
      <Link href={link} target="_blank" rel="noopener noreferrer">{message}</Link>
    </div>
  );
};

export default NewsBanner;
