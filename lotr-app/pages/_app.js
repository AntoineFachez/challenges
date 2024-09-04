import AppContextProvider from "@/context/AppContext";
import GlobalStyle from "../styles";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <GlobalStyle />
        <NavBar />
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}
