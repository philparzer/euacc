import { ReactNode } from "react";

interface TopicProps {
    variant: "more" | "less";
    children: ReactNode;
}

const Topic = ({variant, children}: TopicProps) => {
    return (
        <div className={` ${variant === 'more' ? 'border-white border-dashed border px-2 py-1 rounded-md ' : ' px-1 line-through decoration-red-500'}`}>{children}</div>
    );
}

export default Topic;