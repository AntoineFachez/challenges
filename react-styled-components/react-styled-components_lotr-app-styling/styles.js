import { createGlobalStyle } from "styled-components";
<<<<<<< HEAD
import { Lora } from "@next/font/google"; // Make sure you import from the correct package

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
=======

>>>>>>> 2fc40a602a7ca12dd1b4e2b39b627f88e8a925b5
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

<<<<<<< HEAD
 body {
    font-family: ${lora.style.fontFamily}, serif;
    
=======
  body {
    font-family: system-ui;
>>>>>>> 2fc40a602a7ca12dd1b4e2b39b627f88e8a925b5
  }
`;
