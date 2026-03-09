import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../Contexts/CitiesContext";
import ChangeCenter from "./ChangeCenter";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const [position, setPosition] = useState([
    -26.761642845161678, 27.840019839424443,
  ]);

  const { cityData } = useCities();
  const navigate = useNavigate();
  const {
    isLoading: isLoadingPosition,
    position: geoPosition,
    getPosition,
  } = useGeolocation();
  const { mapLat: lat, mapLng: lng } = useUrlPosition();

  //Sync URL -> map position
  useEffect(() => {
    if (!lat || !lng) return;

    const newLat = Number(lat);
    const newLng = Number(lng);

    if (Number.isNaN(newLat) || Number.isNaN(newLng)) return;

    setPosition([newLat, newLng]);
  }, [lat, lng]);

  // Sync geolocation -> map position
  useEffect(() => {
    if (!geoPosition) return;
    if (geoPosition.lat == null || geoPosition.lng == null) return;

    setPosition([geoPosition.lat, geoPosition.lng]);
  }, [geoPosition]);

  return (
    <div
      className={
        styles.mapContainer
      } /* onClick={() => navigate("/app/form")} */
    >
      {!geoPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading plz wait..." : "Use your position"}
        </Button>
      )}
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
        <DetectClick />
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

const DetectClick = function () {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      ///
      navigate(`/app/form?lat=${e.latlng.lat}&lng${e.latlng.lng}`);
    },
  });
};

export default Map;
