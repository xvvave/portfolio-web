export default function AboutContent1() {
    return (
      <div className="w-full text-center">
        {/* Subtítulo con Gopher */}
        <h1 className="w-full px-4 text-[30px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[40px] font-gopher text-[#0E1011]">
        <br />{" "}¿Te imaginas darle vida <br />{" "}
        a tu idea junto a las últimas<br />{" "}
        tendencias del diseño digital?<br />
        </h1>
  
        {/* Párrafo con Satoshi (Regular) */}
        <p className="w-full ml-2 px-2 mt-2 leading-[25px] tracking-[0.01em] font-satoshi-regular text-[#0E1011]">
        {" "}Soy un diseñador multimedia con un espíritu inquieto e innovador con una trayectoria que combina pasión por la creación y visión hacia el futuro.<br />{" "}
          En cada proyecto, me esfuerzo no solo en ayudar a empresas de diversos sectores a destacarse construyendo marcas coherentes y destacables, sino también en contar historias únicas y memorables.<br />{" "}
          Me mantengo en movimiento con la finalidad de mejorar cada día para entregar soluciones creativas adaptadas a las necesidades del cliente.<br />{" "}
          ¿Conoces algún proyecto o marca que necesite una transformación visual?<br />{" "}
          Estoy aquí listo para crear algo increíble juntos!.
        </p>
      </div>
    );
  }