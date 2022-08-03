import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import ChangeMapView from "../utils/ChangeMapView";
import { useGlobalContext } from "../utils/Context";
import LocationIcon from "../images/icon-location.svg";

const Map = () => {
  const { data } = useGlobalContext();
  let icon = L.icon({
    iconUrl: LocationIcon,
    iconRetinaUrl: LocationIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [38, 55],
  });

  const lat = data?.location?.lat;
  const lng = data?.location?.lng;

  const position = [lat ? lat : "", lng ? lng : ""];
  return (
    <section>
      <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <ChangeMapView coords={position} />
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
