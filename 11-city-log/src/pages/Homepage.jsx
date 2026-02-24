import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import React from "react";
void React;
import NavigationBar from "../Components/NavigationBar";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <NavigationBar />
      <section>
        <h1>
          From country to country.
          <br />
          CityLog logs every city you’ve explored. Capture your travel memories
          and showcase your journey across the globe.
        </h1>
        <h2 className={styles.lastText}>
          A global map that records every city you explored. Keep your travel
          memories alive and share your journey across the world.
        </h2>
        <Link to="/app" className="cta">
          Start Journey
        </Link>
      </section>
    </main>
  );
}
