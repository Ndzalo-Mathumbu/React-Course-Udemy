import React from "react";
void React;
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = function (date) {
  return new Intl.DateTimeFormat("za", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function CityItem({ city }) {
  const { cityName, date, emoji, id, position } = city;
  console.log(position);
  return (
    <ul>
      <li>
        <Link
          className={styles.cityItem}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>{formatDate(date)}</time>
          <button className={styles.deleteBtn}>&times;</button>
        </Link>
      </li>
    </ul>
  );
}

export default CityItem;
