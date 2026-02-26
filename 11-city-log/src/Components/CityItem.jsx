import React from "react";
void React;
import styles from "./CityItem.module.css";

const formatDate = function (date) {
  return new Intl.DateTimeFormat("za", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function CityItem({ city }) {
  const { cityName, date, emoji } = city;
  return (
    <ul>
      <li className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </li>
    </ul>
  );
}

export default CityItem;
