import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const initialState = [
  { id: 1, name: "Living Room", isTurnedOn: false },
  { id: 2, name: "Kitchen", isTurnedOn: false },
  { id: 3, name: "Bedroom", isTurnedOn: false },
  { id: 4, name: "Room", isTurnedOn: false },
  { id: 5, name: "Bathroom", isTurnedOn: false },
  { id: 6, name: "Office", isTurnedOn: false },
  { id: 7, name: "Garage", isTurnedOn: false },
  { id: 8, name: "Basement", isTurnedOn: false },
];
export default function App({ Component, pageProps }) {
  const [lightsState, setLightsState] = useState(initialState);
  const [counterRunningLights, setCounterRunningLights] = useState(0);
  const [isDimmed, setIsDimmed] = useState(false);

  function handleToggle(id) {
    setLightsState((prevLightsState) =>
      prevLightsState.map((light) =>
        light.id === id ? { ...light, isTurnedOn: !light.isTurnedOn } : light
      )
    );
  }

  const turnAllLightsOn = () => {
    console.log("turnAllLightsOn", lightsState);
    setLightsState((prevLightsState) =>
      prevLightsState.map((light) => ({ ...light, isTurnedOn: true }))
    );
    setIsDimmed(false);
  };
  const turnAllLightsOff = () => {
    setLightsState((prevLightsState) =>
      prevLightsState.map((light) => ({ ...light, isTurnedOn: false }))
    );
    setIsDimmed(true);
  };
  useEffect(() => {
    const countRunningLights = () => {
      const counter = lightsState.filter((light) => light.isTurnedOn);
      console.log(counter);

      setCounterRunningLights(counter.length);
      return;
    };
    countRunningLights();
    return () => {};
  }, [lightsState, initialState]);
  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        isDimmed={isDimmed}
        handleToggle={handleToggle}
        counterRunningLights={counterRunningLights}
        lightsState={lightsState}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </Layout>
  );
}
