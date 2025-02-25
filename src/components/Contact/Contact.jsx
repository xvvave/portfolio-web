// Contact.jsx
import ContactForm from "./ContactForm";
import SpotlightCard from "./SpotlightCard";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-gradientcontact bg-cover bg-center flex flex-col items-center justify-between relative">
      {/* Título y descripción centrados arriba */}
      <div className="w-full pt-16 flex flex-col items-center">
        <h2 className="text-[46px] font-gopher text-[#E6DADA]">Contact</h2>
        <p className="text-[#E6DADA] text-[18px] font-gopher mt-2 w-full text-center">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        </p>
      </div>

      {/* Sección principal - información de contacto y formulario */}
<div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center py-16 space-y-8 md:space-y-0 md:space-x-12">
  {/* Lado izquierdo - Información de contacto */}
  <div className="md:w-1/2 flex flex-col space-y-6">
    <div className="flex items-center space-x-4">
      <div className="w-[38px] h-[38px] bg-[#E6DADA] rounded-full flex items-center justify-center">
        <img 
          src="/images/Logos/GmailIcon.svg" 
          alt="Email" 
          className="w-5 h-5" 
        />
      </div>
      <div>
        <p className="text-[#E6DADA] text-[20px] font-gopher">Get in touch ↓</p>
        <p className="text-[#E6DADA] text-[18px] font-satoshi-bold tracking-[1%]">latta.romero@gmail.com</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="w-[38px] h-[38px] bg-[#E6DADA] rounded-full flex items-center justify-center">
        <img 
          src="/images/Logos/LinkedInIcon.svg" 
          alt="LinkedIn" 
          className="w-5 h-5" 
        />
      </div>
      <p className="text-[#E6DADA] text-[20px] font-gopher">Let's connect on LinkedIn</p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="w-[38px] h-[38px] bg-[#E6DADA] rounded-full flex items-center justify-center">
        <img 
          src="/images/Logos/DiscordIcon.svg" 
          alt="Discord" 
          className="w-5 h-5" 
        />
      </div>
      <div>
        <p className="text-[#E6DADA] text-[20px] font-gopher">Discord</p>
        <p className="text-[#E6DADA] text-[18px] font-satoshi-bold tracking-[1%]">xvvave #0000</p>
      </div>
    </div>
  </div>
        
        {/* Lado derecho - Formulario con SpotlightCard de fondo oscuro */}
        <div className="md:w-1/2">
          <SpotlightCard 
            className="rounded-[32px] shadow-xl" 
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div className="p-8">
              <h3 className="text-[#E6DADA] text-[28px] font-satoshi-regular tracking-[4%] text-center mb-6">Drop a message</h3>
              <ContactForm />
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Botón para volver arriba */}
      <div className="absolute right-8 bottom-20 w-[48px] h-[48px] bg-[#E6DADA] rounded-full flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
        ⬆
      </div>
      
      {/* Barra de copyright */}
      <div className="w-full bg-black bg-opacity-50 py-4 text-right pr-8 mt-auto">
        <p className="text-[#E6DADA] text-[16px] font-satoshi-bold tracking-[1%]">CopyRight © 2025 - Made With ♥ in Argentina</p>
      </div>
    </section>
  );
};

export default Contact;