import React from "react";
void React;
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";

function CityList({ cityData, loading }) {
  if (loading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cityData.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
