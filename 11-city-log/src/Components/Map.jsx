import React from "react";
void React;
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../Contexts/CitiesContext";
import ChangeCenter from "./ChangeCenter";

function Map() {
  const [position, setPosition] = useState([
    -26.761642845161678, 27.840019839424443,
  ]);

  const { cityData } = useCities();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const lat = searchParams?.get("lat");
  const lng = searchParams?.get("lng");

  //Sync URL -> map position
  useEffect(() => {
    if (!lat || !lng) return;

    const newLat = Number(lat);
    const newLng = Number(lng);

    if (Number.isNaN(newLat) || Number.isNaN(newLng)) return;

    setPosition([newLat, newLng]);
  }, [lat, lng]);

  return (
    <div className={styles.mapContainer} onClick={() => navigate("/app/form")}>
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={position} />

        {/*Render markers from cities */}
        {cityData.map((city) => {
          return (
            <Marker
              key={city?.id}
              position={[city.position?.lat, city.position?.lng]}
            >
              <Popup>
                <span>{city?.emoji}</span> {city?.cityName} was fun 🤩.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
