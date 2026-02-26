import React from "react";
void React;
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cityData, loading }) {
  if (loading) return <Spinner />;
  if (!cityData.length) return <Message message="No Countries added" />;

  const countries = cityData.reduce((accumArray, curCity) => {
    if (!accumArray.map((el) => el.country).includes(curCity.country))
      return [
        ...accumArray,
        { country: curCity.country, emoji: curCity.emoji },
      ];
    else return accumArray;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
}

export default CountryList;
