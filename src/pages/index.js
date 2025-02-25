import dynamic from "next/dynamic";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import PaginaCompleta from "../components/PaginaCompleta/PaginaCompleta";

const Projects = dynamic(() => import("../components/Projects/Projects"), { ssr: false });

export default function Home() {
  return (
    <main>
       <Hero />
      <About />
      <Projects /> {/* Se carga solo cuando el usuario baja */}
      <Contact /> {/* Se carga cuando el usuario baja */}
    </main>
  );
}
