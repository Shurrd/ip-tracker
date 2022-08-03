import { useMap } from "react-leaflet";

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
};

export default ChangeMapView;
