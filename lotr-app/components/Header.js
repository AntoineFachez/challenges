import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { volumes } from "@/resources/lib/data";

export default function Header() {
  const { volumeInFocusIndex } = useContext(AppContext);

  return (
    <div>
      <div>{volumes[volumeInFocusIndex].title}</div>
      {volumeInFocusIndex}
    </div>
  );
}
