import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
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
      <Component {...pageProps} />
    </section>
  );
};

export default App;
