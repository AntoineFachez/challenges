import { useContext } from "react";
import AppContextProvider, { AppContext } from "@/context/AppContext";

import GlobalStyle from "../styles";
import NavBar from "../components/NavBar";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <AppContextProvider>
        <GlobalStyle />
        <NavBar />
        <Header />
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}
