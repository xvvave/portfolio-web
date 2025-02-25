import { useEffect } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let snapTimeout;

    const handleScroll = () => {
      document.documentElement.classList.add("no-snap"); // Desactiva scroll-snap
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        document.documentElement.classList.remove("no-snap"); // Reactiva scroll-snap
      }, 1000); // Ajusta el delay según tu animación
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(snapTimeout);
    };
  }, []);

  return <Component {...pageProps} />;
}
