import React from "react";
import "./App.css";

const App = () => {
  const styleTitle = "text-gray-400 font-semibold text-xl";
  const styleName = "font-bold text-3xl";

  return (
    <section className="wrapper w-full flex items-center flex-col">
      <div className=" h-full flex flex-col items-center pt-10 ">
        <div>
          <p className="lg:text-5xl text-4xl text-white">IP Address Tracker</p>
        </div>
        <div className="flex">
          <div className="mt-8 xl:w-[30vw] w-[75vw] h-16">
            <form className="h-full ">
              <input
                type="text"
                className="w-full h-full outline-none pl-6 text-xl rounded-r-none rounded-lg"
                placeholder="Search for any IP Address or Domain"
              />
            </form>
          </div>
          <div className="bg-black mt-8 flex justify-center items-center w-16 rounded-l-none rounded-lg cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white xl:h-52 border flex xl:flex-row flex-col xl:gap-16 gap-4 py-7 xl:justify-start items-center pl-14 xl:mb-[-4rem] mt-[3rem] rounded-3xl z-50 w-[80vw]">
        <div className="flex flex-col xl:items-start items-center gap-4 xl:border-r-2 xl:border-gray-200 pr-8">
          <p className={styleTitle}>IP ADDRESS</p>
          <p className={styleName}>102.89.38.54</p>
        </div>
        <div className="flex flex-col xl:items-start items-center gap-4 xl:border-r-2 xl:border-gray-200 pr-8">
          <p className={styleTitle}>LOCATION</p>
          <p className={styleName}>Lagos, Lagos State</p>
        </div>
        <div className="flex flex-col xl:items-start items-center gap-4 xl:border-r-2 xl:border-gray-200 pr-8">
          <p className={styleTitle}>TIMEZONE</p>
          <p className={styleName}>UTC+01:00</p>
        </div>
        <div className="flex flex-col xl:items-start items-center gap-4">
          <p className={styleTitle}>ISP</p>
          <p className={styleName}>MTN Nigeria</p>
        </div>
      </div>
    </section>
  );
};

export default App;
