import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Noto_Sans } from "@next/font/google";

const fonts = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  return (
    <section className={fonts.className}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </section>
  );
};

export default App;
