import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import React from "react";
void React;

function Logo() {
  return (
    <>
      <Link to="/">
        <img src="/traveltheworld.png" alt="Logo" className={styles.logo} />
      </Link>
    </>
  );
}

export default Logo;
