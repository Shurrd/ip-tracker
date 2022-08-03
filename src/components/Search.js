import React from "react";
import { useGlobalContext } from "../utils/Context";

const Search = () => {
  const { handleSubmit, ipAddress, setIpAddress } = useGlobalContext();
  return (
    <div className="flex">
      <div className="mt-5 xl:w-[30vw] w-[70vw] h-12">
        <form className="h-full" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setIpAddress(e.target.value)}
            value={ipAddress}
            className="w-full h-full outline-none pl-4 text-sm rounded-r-none rounded-lg"
            placeholder="Search for any IP Address or Domain"
          />
        </form>
      </div>
      <div
        className="bg-black mt-5 flex justify-center items-center w-16 rounded-l-none rounded-lg cursor-pointer"
        onClick={handleSubmit}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
};

export default Search;
