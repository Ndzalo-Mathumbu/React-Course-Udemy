import { createContext, useState, useEffect, useContext } from "react";
import { BASE_URL } from "../help";

export const CitiesContext = createContext();

const CitiesProvider = function ({ children }) {
  const [cityData, setCityData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const getCities = async function () {
      try {
        setIsLoading((a) => !a);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCityData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading((a) => !a);
      }
    };
    getCities();
  }, []);

  const getCity = async function (id) {
    try {
      setIsLoading((a) => !a);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      if (!response.ok) {
        throw new Error(`City not found (${response.status})`);
      }
      const data = await response.json();
      setCurrentCity(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading((a) => !a);
    }
  };
  return (
    <CitiesContext.Provider
      value={{
        cityData: cityData,
        loading: loading,
        currentCity: currentCity,
        getCity: getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = function () {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "CitiesContext was used in a wrong place (outside the CitiesProvider)",
    );
  return context;
};

export { CitiesProvider, useCities };
