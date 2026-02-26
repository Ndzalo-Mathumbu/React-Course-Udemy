import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { emoji, country: newCountry } = country;
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{newCountry}</span>
    </li>
  );
}

export default CountryItem;
