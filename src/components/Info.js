import React from "react";
import { useGlobalContext } from "../utils/Context";

const Info = () => {
  const { data } = useGlobalContext();

  const styleTitle = "text-gray-400 font-semibold text-sm text-center";
  const styleName = "font-bold text-xl flex xl:text-start text-center";
  const divContainer =
    "flex flex-col xl:items-start gap-4 xl:border-r xl:pr-5 xl:border-gray-200";
  const parent =
    "bg-white xl:h-52 flex xl:flex-row flex-col xl:gap-16 gap-4 py-7 xl:justify-start items-center xl:pl-14 mt-[2rem] mb-[-4rem] rounded-3xl z-50 w-[80vw]";

  return (
    <div className={parent}>
      <div className={divContainer}>
        <p className={styleTitle}>IP ADDRESS</p>
        <p className={styleName}>{data?.ip}</p>
      </div>
      <div className={divContainer}>
        <p className={styleTitle}>LOCATION</p>
        <p className={styleName}>
          {data?.location?.city}, {data?.location?.region}
        </p>
      </div>
      <div className={divContainer}>
        <p className={styleTitle}>TIMEZONE</p>
        <p className={styleName}>UTC{data?.location?.timezone}</p>
      </div>
      <div className={divContainer}>
        <p className={styleTitle}>ISP</p>
        <p className={styleName}>{data?.isp}</p>
      </div>
    </div>
  );
};

export default Info;
