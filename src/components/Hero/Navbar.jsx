import Image from "next/image";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ["Home", "About", "Projects", "Contact"];
  
  // Detectar sección activa y posición de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Detectar si hemos pasado el hero section
      const heroHeight = document.getElementById('home')?.offsetHeight || 0;
      const isScrolled = window.scrollY > heroHeight - 100;
      setScrolled(isScrolled);
      
      // Detectar sección activa
      const sections = navLinks.map(link => document.getElementById(link.toLowerCase()));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].toLowerCase());
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      {/* Navbar inicial completo (Logo, Links, Hora) */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 z-40 font-satoshi backdrop-blur-sm h-16">
        {/* Logo */}
        <div className={`transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <Image 
            src="/images/logo.svg" 
            alt="XVVAVE Logo" 
            width={160} // Equivalente a w-40 (40 * 4px)
            height={60} // Altura proporcional, ajústala según sea necesario
            priority // Hace que cargue inmediatamente
          />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-3 md:gap-1 lg:gap-3">
  {navLinks.map((text) => (
    <Link
      key={text}
      to={text.toLowerCase()}
      spy={true}
      smooth={true}
      duration={800}
      offset={text === "Projects" ? -65 : 1} // Offset -50 solo para Projects
      activeClass="active-nav-link"
      className={`relative flex items-center justify-center w-[60px] sm:w-[80px] md:w-[80px] lg:w-[100px] h-[36px] sm:h-[40px] md:h-[40px] rounded-[30px] text-[14px] sm:text-[14px] md:text-[14px] transition-all duration-150 ease-out cursor-pointer
        ${activeSection === text.toLowerCase() 
          ? "bg-[#0E1011] bg-opacity-30 text-[#1488CC]" 
          : "bg-[#0E1011] bg-opacity-[0.13] text-[#E6DADA] hover:bg-opacity-30 hover:text-[#1488CC]"}`}
      onClick={() => setActiveSection(text.toLowerCase())}
    >
      {text}
    </Link>
  ))}
</div>


        {/* Ubicación y Hora (Oculta en tablet) */}
        <div className={`hidden md:flex flex-col items-center md:text-[14px] lg:text-[16px] text-[#E6DADA] transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <span>La Plata, Buenos Aires</span>
          <span>🌐 23:45:00 GMT-3</span>
        </div>
      </nav>
    </>
  );
}