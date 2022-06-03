import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SourceSans-Regular';

  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'SourceSans-Bold';

  font-style: bold;
  font-weight: 700;
  font-display: swap;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
