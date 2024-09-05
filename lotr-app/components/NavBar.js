import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";

import { volumes } from "@/resources/lib/data";

export default function NavBar() {
  const router = useRouter();
  const [buttonData, setButtonData] = useState([]);
  // const { state, dispatch } = useContext(AppContext);
  const { volumeInFocusIndex, setVolumeInFocusIndex } = useContext(AppContext);
  // console.log(volumeInFocusIndex);

  const handleNavPage = (formattedTitle) => {
    router.push(`/volumes/${formattedTitle}`);
    setVolumeInFocusIndex(volumeInFocusIndex + 1);
  };

  useEffect(() => {
    const generatedButtonData = volumes.map((volume) => {
      const formattedTitle = volume.title.toLowerCase().replace(/ /g, "-"); // Replace spaces with hyphens
      return {
        id: formattedTitle,
        onClick: () => handleNavPage(formattedTitle),
        textContent: volume.title,
      };
    });

    setButtonData(generatedButtonData);
  }, []);
  return (
    <div style={{ margin: "5rem" }}>
      {/* <p>Current theme: {state.theme}</p> */}
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
      <button onClick={() => router.push(`/volumes`)}>back to volumes</button>
      {buttonData.map((button) => (
        <button key={button.id} onClick={button.onClick}>
          {button.textContent}
        </button>
      ))}
    </div>
  );
}
