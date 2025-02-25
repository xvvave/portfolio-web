import TiltedCard from "./TiltedCard";

export default function AboutFoto() {
  return (
    <div className="mt-8 px-4 w-full flex justify-center">
      <TiltedCard
        imageSrc="/images/AboutFoto.png" // Ruta de la imagen
        altText="Foto personal"
        captionText="Lautaro Romero Temperini"
        containerHeight="360px"
        containerWidth="630px"
        imageHeight="360px"
        imageWidth="630px"
        rotateAmplitude={18}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={false}
        overlayContent={
          <p className="text-[#E6DADA]a font-semibold px-4 py-2 rounded-md">
          </p>
        }
      />
    </div>
  );
}
