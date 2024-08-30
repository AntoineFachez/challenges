import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./App.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      getISSCoords(URL);
    }, 5000);
    return () => {
      clearInterval(intervalId); // Clear the interval on unmount
    };
  }, []);

  async function getISSCoords(urlToFetch) {
    const respose = await fetch(urlToFetch);
    const data = await respose.json();

    const { longitude, latitude } = data;

    setCoords({
      longitude: longitude,
      latitude: latitude,
    });
  }
  console.log(coords);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => getISSCoords(URL)}
      />
    </main>
  );
}
