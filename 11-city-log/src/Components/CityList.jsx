import React from "react";
void React;
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList({ cityData, loading }) {
  if (loading) return <Spinner />;
  if (!cityData.length) return <Message message="No Cities added" />;
  return (
    <ul className={styles.cityList}>
      {cityData.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
