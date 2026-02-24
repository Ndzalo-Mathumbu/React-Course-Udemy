import React from "react";
void React;
import { /* Link */ NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import Logo from "./Logo";

function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <Logo />
        <li className={styles.moveRigth}>
          <NavLink to="/price">Price</NavLink>
        </li>
        <li className={styles.moveRigth}>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className={styles.moveRigth}>
          <NavLink to="/login" className={styles.ctaLink}>
            Login →
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
