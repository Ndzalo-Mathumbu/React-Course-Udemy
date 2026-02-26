import React from "react";
void React;
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Products from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";

const Base_URL = "http://localhost:8000";

function App() {
  const [cityData, setCityData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    const getCities = async function () {
      try {
        setIsLoading((a) => !a);
        const response = await fetch(`${Base_URL}/cities`);
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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" /* index */ element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cityData={cityData} loading={loading} />}
            />
            <Route
              path="/app/cities"
              element={<CityList cityData={cityData} loading={loading} />}
            />
            <Route path="/app/countries" element={<CountryList />} />
            <Route path="/app/form" element={<h1>My Form</h1>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
