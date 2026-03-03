import { createContext, useState, useEffect, useContext } from "react";
import { BASE_URL } from "../help";

export const CitiesContext = createContext();

const CitiesProvider = function ({ children }) {
  const [cityData, setCityData] = useState([]);
  const [loading, setIsLoading] = useState(false);
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
  return (
    <CitiesContext.Provider
      value={{
        cityData: cityData,
        loading: loading,
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
