import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import LocationIcon from "./images/icon-location.svg";
import L from "leaflet";

const App = () => {
  const styleTitle = "text-gray-400 font-semibold text-sm";
  const styleName = "font-bold text-xl";
  const divContainer =
    "flex flex-col xl:items-start items-center gap-4 xl:border-r xl:border-gray-200 pr-8";

  const [data, setData] = useState({});
  const [ipAddress, setIpAddress] = useState("");

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_Ix3Hrk6iQnlTw4uS0NWbu0wq7e0aC&ipAddress=${ipAddress}`;

  let icon = L.icon({
    iconUrl: LocationIcon,
    iconRetinaUrl: LocationIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [38, 55],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (ipAddress === "") {
        alert("Input correct IPv4 or IPv6 address.");
      } else {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        if (data.code === 422) {
          alert(data.messages);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="wrapper w-full flex items-center flex-col">
      <section className=" h-full flex flex-col items-center pt-5 ">
        <div>
          <p className="lg:text-3xl text-2xl text-white">IP Address Tracker</p>
        </div>
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
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white xl:h-52 border flex xl:flex-row flex-col xl:gap-16 gap-4 py-7 xl:justify-start items-center pl-14 mt-[2rem] mb-[-4rem] rounded-3xl z-50 w-[80vw]">
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
            <p className={styleName}>{data?.location?.timezone}</p>
          </div>
          <div className="flex flex-col xl:items-start items-center gap-4 pr-8">
            <p className={styleTitle}>ISP</p>
            <p className={styleName}>{data?.isp}</p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="">
          <MapContainer
            center={[51, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            dragging={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51, -0.09]} icon={icon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </section>
  );
};

export default App;
