import React, { useState } from "react";

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
  // Initial Provider State
  const [first, setfirst] = useState("second");
  const state = {};

  // Reducer Function
  // const  = (state, action) => {

  // };

  return (
    <AppContext.Provider value={{ state: state, first, setfirst }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
