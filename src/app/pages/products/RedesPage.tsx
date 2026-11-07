import React from "react";
import {
  Network,
  Cable,
  Zap,
  MessageCircle,
} from "lucide-react";
import logoJFC from "../../../imports/633032f0-9654-485e-b537-0d0d0b7f57f9.png";

// --- MOCK DATA ---
export const productosCables = [
  {
    id: 1,
    imageSrc: [
      "https://dielco.co/hubfs/showcase/cables/img/Cables-Dielco-El-cable-encauchetado-3x6.jpg?width=468&height=468&format=webp",
      "https://www.electrovera.com/wp-content/uploads/2021/10/CABLE_ENCAUCHETADO_MULTIFLEX_3X18_NEXANS_ELECTROVERA.png",
    ],
    nombre: "Cable Encauchetado 3×18",
    categorias: [
      "Alambres y Cables",
      "Cables en Cobre Encauchetados",
    ],
  },
  {
    id: 2,
    imageSrc: [
      "https://ei.com.co/wp-content/uploads/2020/11/cable-aluminio-serie-8000.jpg",
      "https://interelectricas.com.co/3282-large_default/cable-de-aluminio-aislado-no-1-0-awg-serie-8000-thhn.jpg",
    ],
    nombre: "CABLE ALUMINIO SERIE 8000 # 1/0",
    categorias: [
      "Alambres y Cables",
      "Cable de Aluminio Serie 8000",
    ],
  },
  {
    id: 3,
    imageSrc: [
      "https://ineldec.com/wp-content/uploads/2021/09/Cable-ACSR-2-0-AWG-Aluminio-Quail-.jpg",
      "https://interelectricas.com.co/3362-large_default/cable-de-aluminio-desnudo-no-2-0-acsr-metro.jpg",
    ],
    nombre: "CABLE ACSR # 2/0",
    categorias: ["Alambres y Cables", "Cable de Aluminio ACSR"],
  },
  {
    id: 4,
    imageSrc: [
      "https://interelectricas.com.co/4634-large_default/cable-de-cobre-aislado-no-10-awg-metro-thhn-color-blanco.jpg",
      "https://interelectricas.com.co/4635-large_default/cable-de-cobre-aislado-no-10-awg-metro-thhn-color-blanco.jpg",
    ],
    nombre: "Cable de cobre aislado #10",
    categorias: ["Alambres y Cables", "Cables de Cobre"],
  },
  {
    id: 5,
    imageSrc: [
      "https://interelectricas.com.co/39910-large_default/cable-de-cobre-aislado-no-2-metro-thhn-color-negro-.jpg",
      "https://interelectricas.com.co/3372-large_default/cable-de-cobre-aislado-no-2-metro-thhn-color-negro-.jpg",
    ],
    nombre: "Cable de Cobre Aislado THHN # 2/0",
    categorias: ["Alambres y Cables", "Cables de Cobre"],
  },
  {
    id: 6,
    imageSrc: [
      "https://dycdistricolsas.com/wp-content/uploads/2022/09/CABLE-MULTIPLEX-3X21-0-NEUTRO-AISLADO-3.jpg",
      "https://dycdistricolsas.com/wp-content/uploads/2022/09/CABLE-MULTIPLEX-3X21-0-NEUTRO-AISLADO-2-1.jpg",
    ],
    nombre: "Cable Aluminio Cuádruplex 3×2/0+1/0",
    categorias: [
      "Alambres y Cables",
      "Cables Multiplex en Aluminio",
    ],
  },
  {
  id: 7,
  imageSrc: [
    "https://dycdistricolsas.com/wp-content/uploads/2022/09/CABLES-DE-MEDIA-TENSION-XLPE-CU-AL_0001_CABLE-DE-COBRE-XLPE-4-0-15KV-P-CINTA.jpg",
    "https://dycdistricolsas.com/wp-content/uploads/2022/09/iStock-1325381409-400x266.jpg"
  ],
  nombre: "CABLE DE Cu XLPE # 4/0 P/CINTA 15KV",
  categorias: [
    "Alambres y Cables",
    "Cable de Media Tension XLPE",
  ],
},
 {
  id: 8,
  imageSrc: [
    "https://interelectricas.com.co/39910-large_default/cable-de-cobre-aislado-no-2-metro-thhn-color-negro-.jpg",
    "https://dycdistricolsas.com/wp-content/uploads/2022/09/CHW25-CABLE-THHN-2-0-METRO.png"
  ],
  nombre: "Cable de Cobre Aislado THHN # 2",
  categorias: ["Cables de Cobre", "Todos"],
}];

// --- PRODUCT CARD ---
export const CableProductCard = ({ id, imageSrc, nombre, categorias }) => {
  const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(
    `Hola, me gustaría cotizar el producto: ${nombre}`,
  )}`;

  const images = Array.isArray(imageSrc)
    ? imageSrc
    : [imageSrc];

  return (
    <div id={id != null ? `producto-cable-${id}` : undefined} className="scroll-mt-36 flex flex-col bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <div className="w-full h-56 flex items-center justify-center overflow-hidden bg-gray-50 relative">
        {/* Imagen principal */}
        <img
          src={images[0]}
          alt={nombre}
          className={`object-contain max-h-full max-w-full p-6 absolute transition-all duration-500
            ${images.length > 1 ? "group-hover:opacity-0 scale-105" : ""}
          `}
        />

        {/* Imagen hover */}
        {images[1] && (
          <img
            src={images[1]}
            alt={nombre}
            className="object-contain max-h-full max-w-full p-6 absolute opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-105 transition-all duration-500"
          />
        )}

        {/* Logo */}
        <div className="absolute top-3 right-3">
          <img
            src={logoJFC}
            alt="JFC"
            className="h-5 w-auto opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-sm font-bold text-[#0A0F3D] leading-tight mb-2 line-clamp-2 min-h-[40px]">
          {nombre}
        </h3>
        <p className="text-[10px] uppercase tracking-wider text-gray-700 font-bold mb-4">
          {categorias[1] || categorias[0]}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full flex items-center justify-center gap-2 bg-[#FA8200] hover:bg-[#ff9526] text-white py-2.5 rounded-xl text-xs font-bold transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          COTIZAR
        </a>
      </div>
    </div>
  );
};

// --- INFO CARD ---
const InfoCard = ({
  icon: Icon,
  title,
  description,
  colorClass,
}) => (
  <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
    <div
      className={`${colorClass} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
    >
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-lg font-black mb-3 text-[#0A0F3D]">
      {title}
    </h3>
    <p className="text-sm text-gray-800 leading-relaxed">
      {description}
    </p>
  </div>
);

// --- PAGE ---
export function RedesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* HERO */}
      <section className="bg-[#0A0F3D] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#FA8200]/10 skew-x-12 translate-x-10" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            REDES Y{" "}
            <span className="text-[#FA8200]">CABLES</span>
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Soluciones integrales en distribución eléctrica y
            cableado estructurado con certificación RETIE.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            icon={Network}
            title="Redes Eléctricas"
            description="Diseño y construcción de redes de baja y media tensión."
            colorClass="bg-[#0A0F3D]"
          />
          <InfoCard
            icon={Cable}
            title="Cableado Estructurado"
            description="Infraestructura certificada para voz y datos."
            colorClass="bg-[#FA8200]"
          />
          <InfoCard
            icon={Zap}
            title="Media Tensión"
            description="Subestaciones y montajes eléctricos especializados."
            colorClass="bg-[#0A0F3D]"
          />
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productosCables.map((p) => (
              <CableProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
