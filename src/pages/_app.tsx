import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Exo } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const exo = Exo({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={exo.className}
      style={{
        backgroundImage: "url(/assets/images/background/background.jpg)",
        backgroundRepeat: "repeat",
        backgroundSize: "initial",
        backgroundPosition: "center",
        backgroundOrigin: "content-box",
      }}
    >
      <Component {...pageProps} />;
    </div>
  );
}
