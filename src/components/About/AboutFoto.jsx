import TiltedCard from "./TiltedCard";

export default function AboutFoto() {
  return (
    <div className="mt-8 px-4 w-full flex justify-center">
      <TiltedCard
        imageSrc="/images/AboutFoto.png"
        altText="Foto personal"
        captionText="Lautaro Romero Temperini"
        // Use responsive classes instead of fixed dimensions
        className="w-full max-w-[630px] 2xl:max-w-[630px] xl:max-w-[580px] lg:max-w-[500px] md:max-w-[450px] sm:max-w-[400px] max-sm:max-w-[320px]"
        aspectRatio={630/360} // Width/height ratio of original image
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
