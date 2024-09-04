import GlobalStyle from "../styles";
import NavBar from "../components/NavBar";
export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
