import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Products from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";

function App() {
  return (
    <>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" /* index */ element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/price" element={<Pricing />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="/app/cities" />} />
              <Route path="/app/cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="/app/countries" element={<CountryList />} />
              <Route path="/app/form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </>
  );
}
export default App;
