import { Link } from "react-scroll";

export default function HeroContent() {
  return (
    <section className="relative w-full h-screen flex flex-col items-start justify-center px-12">
      
      {/* Nombre y descripción */}
      <div>
        <h1 className="text-[46px] xs:text-[24px] sm:text-[28px] md:text-[36px] lg:text-[46px] text-[#E6DADA] font-roc leading-tight">
          Lautaro Romero Temperini
        </h1>
        <p className="text-[18px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#E6DADA] font-roc mt-4">
          Hey! I'm Lautaro, a 27 years old Argentinian new media designer.
        </p>
      </div>

      {/* Call to Action Button */}
      <nav className="mt-6">
        <Link
          to="projects" // ID de la sección destino
          smooth={true} // Hace el scroll animado
          duration={800} // Controla la velocidad del scroll
          offset={-65} // Ajusta la posición para que no quede cortado
          className="group flex justify-center items-center 
                     relative overflow-visible
                     w-[250px] h-[50px] text-[16px]
                     xs:w-[125px] xs:h-[25px] xs:text-[8px] 
                     sm:w-[150px] sm:h-[30px] sm:text-[10px] 
                     md:w-[220px] md:h-[45px] md:text-[14px] 
                     lg:w-[250px] lg:h-[50px] lg:text-[16px]
                     font-satoshi font-bold text-[#0E1011] 
                     bg-gradient-to-r from-[#E6DADA] via-[#E6DADA] to-[#FF9068] 
                     rounded-[30px] focus:outline-none cursor-pointer"
        >
          <span>SEE MY PROJECTS →</span>

          {/* Efecto hover ajustado */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {/* Primer círculo */}
            <div className="w-[110%] h-[106%] shadow-lg shadow-[#2B32B2] 
                          bg-transparent rounded-[30px] absolute 
                          scale-0 group-hover:scale-100 opacity-70 
                          transition-transform duration-0 ease-out" />
                          
            {/* Segundo círculo */}
            <div className="w-[102%] h-[104%] shadow-lg shadow-[#FF9068] 
                          bg-transparent rounded-[30px] absolute 
                          scale-0 group-hover:scale-100 opacity-60 
                          transition-transform duration-0 ease-out" />
          </div>
        </Link>
      </nav>

    </section>
  );
}
