import { useMap } from "react-leaflet";
/* import { useCities } from "../Contexts/CitiesContext"; */

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default ChangeCenter;
