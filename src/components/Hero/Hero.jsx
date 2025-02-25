import Head from "next/head";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <> <Head>
      <link rel="preload" href="/fonts/Roc-Grotesk-Wide-Medium.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Gopher-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Satoshi-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Satoshi-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Satoshi-Black.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Satoshi-BoldItalic.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
      </Head>
      
      <section id="home" className="w-full min-h-screen bg-hero-gradient bg-cover bg-center">

        {/* Navbar */}
        <Navbar />

        {/* Sección izquierda: Título y botón CTA */}
        <HeroContent />

        {/* Sección derecha: Gráfico y partículas */}

      </section>
    </>
  );    
}


