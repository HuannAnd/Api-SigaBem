import { useEffect, useState } from "react";

export default function useGeoLocation() {
  const [position, setPosition] = useState([0, 0]);

  function success(pos) {
    const { latitude, longitude } = pos.coords;

    setPosition([latitude, longitude]);
  }

  function error(errorOutput) {
    console.error(`Error: ${errorOutput.code} ${errorOutput.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return position;
}
