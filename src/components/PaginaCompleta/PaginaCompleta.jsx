import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default function PaginaCompleta() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}