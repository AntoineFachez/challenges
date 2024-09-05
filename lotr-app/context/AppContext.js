import React, { useReducer, useState } from "react";

export const AppContext = React.createContext();

const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};
const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [volumeInFocusIndex, setVolumeInFocusIndex] = useState(0);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        volumeInFocusIndex,
        setVolumeInFocusIndex,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
