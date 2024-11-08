import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Exo } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
const exo = Exo({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${exo.className} min-h-screen`}
      style={{
        backgroundImage: "url(/assets/images/background/background.jpg)",
        backgroundRepeat: "repeat",
        backgroundSize: "initial",
        backgroundPosition: "center",
        backgroundOrigin: "content-box",
      }}
    >
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
