import React from "react";
void React;
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("/app/form")}>
      <h1>Map</h1>
      <h2>
        Position: {lat},{lng}
      </h2>
    </div>
  );
}

export default Map;
