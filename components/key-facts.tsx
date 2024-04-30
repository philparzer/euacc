"use client";

import { useFormState } from "react-dom";
import AddTopicButton from "./add-topic-button";
import Topic from "./topic";
import postMoreTopic from "@/actions/post-more-topic";
import postLessTopic from "@/actions/post-less-topic";

interface KeyFactsProps {}

const initialState = {
  message: "",
  isError: false,
};

const KeyFacts = ({}: KeyFactsProps) => {
  const [moreTopicState, moreTopicFormAction] = useFormState(
    postMoreTopic,
    initialState
  );
  const [lessTopicState, lessTopicFormAction] = useFormState(
    postLessTopic,
    initialState
  );

  const getDateAndTimezone = () => {
    const date = new Date();
    const options: any = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    const dateStringWithTimeZone = new Intl.DateTimeFormat(
      "en-US",
      options
    ).format(date);
    return dateStringWithTimeZone;
  };

  const moreTopicHandler = (addition: string) => {
    const formData = new FormData();
    formData.append("topic", addition);
    formData.append("time", getDateAndTimezone());
    console.log(addition);
    moreTopicFormAction(formData);
  };

  const lessTopicHandler = (addition: string) => {
    const formData = new FormData();
    formData.append("topic", addition);
    formData.append("time", getDateAndTimezone());
    console.log(addition);
    lessTopicFormAction(formData);
  };

  return (
    <div className="max-w-[600px] items-center text-center flex flex-col gap-20 mb-40">
      <div>
        <div className="font-bold text-xl text-white">we want more</div>
        <ul className="flex justify-center items-center gap-3 mt-4 flex-wrap ">
          <Topic variant="more">frontier tech</Topic>
          <Topic variant="more">nuclear & solar</Topic>
          <Topic variant="more">R&D stimuli</Topic>
          <Topic variant="more">collaboration between states</Topic>
          <Topic variant="more">Schengen benefits</Topic>
          <Topic variant="more">power to EU</Topic>
          <Topic variant="more">incentives for EU founders</Topic>
          <Topic variant="more">freedom</Topic>
        </ul>
        <AddTopicButton handler={moreTopicHandler} />
      </div>
      <div>
        <div className="font-bold text-xl text-white">we want less</div>
        <ul className="flex justify-center gap-3 gap-y-2 mt-4 flex-wrap">
          <Topic variant="less">taxes</Topic>
          <Topic variant="less">regulation</Topic>
          <Topic variant="less">bureaucracy</Topic>
          <Topic variant="less">red tape</Topic>
          <Topic variant="less">trade barriers</Topic>
          <Topic variant="less">doomerism</Topic>
          <Topic variant="less">degrowth</Topic>
          <Topic variant="less">nationalism</Topic>
          <Topic variant="less">surveillance</Topic>
        </ul>
        <AddTopicButton handler={lessTopicHandler} />
      </div>
    </div>
  );
};

export default KeyFacts;
