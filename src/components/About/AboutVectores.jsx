"use client";
import { useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

export default function AboutVectores() {
  const technologies = [
    { name: "Ableton", icon: "/images/Logos/AbletonLogo.svg" },
    { name: "After Effects", icon: "/images/Logos/AfterEffectsLogo.svg" },
    { name: "Blender", icon: "/images/Logos/BlenderLogo.svg" },
    { name: "C#", icon: "/images/Logos/CSharpLogo.svg" },
    { name: "CSS", icon: "/images/Logos/CssLogo.svg" },
    { name: "Figma", icon: "/images/Logos/FigmaLogo.svg" },
    { name: "Framer", icon: "/images/Logos/FramerLogo.svg" },
    { name: "GitHub", icon: "/images/Logos/GithubLogo.svg" },
    { name: "HTML", icon: "/images/Logos/HtmlLogo.svg" },
    { name: "Illustrator", icon: "/images/Logos/IlustratorLogo.svg" },
    { name: "JavaScript", icon: "/images/Logos/JavascriptLogo.svg" },
    { name: "Max", icon: "/images/Logos/MaxLogo.svg" },
    { name: "Next.js", icon: "/images/Logos/NextLogo.svg" },
    { name: "p5.js", icon: "/images/Logos/P5Logo.svg" },
    { name: "Photoshop", icon: "/images/Logos/PhotoshopLogo.svg" },
    { name: "Premiere", icon: "/images/Logos/PremiereLogo.svg" },
    { name: "Processing", icon: "/images/Logos/ProcessingLogo.svg" },
    { name: "React", icon: "/images/Logos/ReactLogo.svg" },
    { name: "Resolume", icon: "/images/Logos/ResolumeLogo.svg" },
    { name: "Tailwind", icon: "/images/Logos/TailwindLogo.svg" },
    { name: "Three.js", icon: "/images/Logos/ThreeLogo.svg" },
    { name: "TouchDesigner", icon: "/images/Logos/TouchLogo.svg" },
    { name: "Unity", icon: "/images/Logos/UnityLogo.svg" },
    { name: "Unreal Engine", icon: "/images/Logos/UnrealLogo.svg" },
    { name: "VS Code", icon: "/images/Logos/VSCLogo.svg" },
  ];
  
  // Aquí puedes ajustar la velocidad del carrusel (menor número = más rápido)
  const animationDuration = 30; // Cambiado de 60 a 30 segundos para duplicar la velocidad
  
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef);
  
  // Duplicamos solo una vez para crear el efecto infinito
  const carouselItems = [...technologies, ...technologies];
  
  const handleMouseEnter = () => {
    controls.stop();
  };
  
  const handleMouseLeave = () => {
    if (isInView) {
      controls.start({
        x: "-50%",
        transition: {
          duration: animationDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  };
  
  // Iniciar la animación cuando el componente está en vista
  if (isInView) {
    controls.start({
      x: "-50%",
      transition: {
        duration: animationDuration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  }

  return (
    <div className="w-full bg-transparent relative mt-4 py-4 overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex space-x-8 w-max"
        animate={controls}
        initial={{ x: 0 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {carouselItems.map((tech, index) => (
          <div key={index} className="text-center relative flex flex-col items-center group">
            <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
            <span className="absolute top-[-16px] bg-black text-[#E6DADA] text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}