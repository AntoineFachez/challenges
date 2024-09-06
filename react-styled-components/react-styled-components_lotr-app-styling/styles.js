import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google"; // Make sure you import from the correct package

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

 body {
    font-family: ${lora.style.fontFamily}, serif;
    
  }
`;
