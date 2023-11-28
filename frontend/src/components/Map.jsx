import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";

import useGeoLocation from "../hooks/useGeoLocation";


export default function Map() {
  const position = useGeoLocation();

  return (
    <MapContainer
      className="w-screen h-full fixed -z-10"
      center={position}
      zoom={13}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
