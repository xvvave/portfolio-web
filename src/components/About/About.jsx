import AboutContent1 from "./AboutContent1";
import AboutFoto from "./AboutFoto";
import AboutContent2 from "./AboutContent2";
import AboutVectores from "./AboutVectores";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-gradientabout bg-cover text-[#E6DADA] bg-center flex flex-col items-center pt-4">
      <div className="mt-2 w-full px-4 pt-4">
        {/* Contenedor principal con distribución horizontal */}
        <div className="flex lg:flex-row md:flex-col xs:flex-col sm:flex-col items-start w-full">
          {/* AboutContent1 a la izquierda */}
          <div className=" w-full lg:w-1/2 flex self-start">
            <AboutContent1 />
          </div>

          {/* AboutFoto a la derecha */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <AboutFoto />
          </div>
        </div>

        {/* Sección inferior */}
        <AboutContent2 />
        <AboutVectores />
      </div>
    </section>
  );
}