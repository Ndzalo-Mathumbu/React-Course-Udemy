import React from "react";
void React;
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../Contexts/CitiesContext";
// import ReturnButton from "./ReturnButton";

const formatDate = function (date) {
  return new Intl.DateTimeFormat("za", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, date, emoji, id, position } = city;
  console.log(position);
  return (
    <>
      <ul>
        <li>
          <Link
            className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : ""}`}
            to={`${id}?lat=${position.lat}&lng=${position.lng}`}
          >
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
          </Link>
        </li>
      </ul>
      {/*  <ReturnButton /> */}
    </>
  );
}

export default CityItem;
