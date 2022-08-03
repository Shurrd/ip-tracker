import React from "react";
import Info from "./Info";
import Search from "./Search";

const Header = () => {
  return (
    <section className="wrapper w-full flex items-center flex-col">
      <section className=" h-full flex flex-col items-center pt-5 ">
        <div>
          <p className="lg:text-3xl text-2xl text-white">IP Address Tracker</p>
        </div>
        <Search />
        <Info />
      </section>
    </section>
  );
};

export default Header;
