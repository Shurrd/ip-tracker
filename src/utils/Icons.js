import L from "leaflet";

const iconPerson = L.Icon.extend({
  options: {
    iconUrl: require("../images/icon-location.svg"),
    iconRetinaUrl: require("../images/icon-location.svg"),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: "leaflet-div-icon",
  },
});

export { iconPerson };
