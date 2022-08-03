import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [ipAddress, setIpAddress] = useState("");

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_TsOBcg6OXcaYOe23drEeKcotyIaL6&ipAddress=${ipAddress}`;
  const userUrl =
    "https://geo.ipify.org/api/v1?apiKey=at_TsOBcg6OXcaYOe23drEeKcotyIaL6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(userUrl);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (ipAddress === "") {
        alert("Please Input an IP Address.");
      } else {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIpAddress("");
        if (data.code === 422) {
          alert(data.messages);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{ handleSubmit, data, ipAddress, setIpAddress, setData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
