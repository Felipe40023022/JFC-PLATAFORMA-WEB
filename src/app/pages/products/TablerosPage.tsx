import { ArrowRight, Award, Download, Shield, Zap } from "lucide-react";
import logoJFC from "../../../imports/633032f0-9654-485e-b537-0d0d0b7f57f9.png";
import logoALC from "../../../../logo-1.png";
import { QuoteConfigurator } from "../../components/QuoteConfigurator";

// --- CATÁLOGO DE PRODUCTOS ---
const productosTableros = [
  {
    id: 1,
    imageSrc:
      "https://interelectricas.com.co/37314-large_default/tablero-bifasico-100a-12-circuitos-con-puerta-plastica-galvanizado-bimetalico-uso-residencial-e-industrial-tb12pg.jpg",
    nombre: "Tablero de Distribución Residencial",
    categorias: ["Distribución", "Baja Tensión"],
  },
  {
    id: 2,
    imageSrc:
      "https://soldexel.com/wp-content/uploads/tableros-electricos-de-control-trifasico-bifasico-monofasico-industrial-marca-soldexel.jpg",
    nombre: "Tablero Principal de Control",
    categorias: ["Control", "Industrial"],
  },
  {
    id: 3,
    imageSrc:
      "https://www.eabel.com/wp-content/uploads/2023/09/Eabel-Electrical-Enclosures-7.webp",
    nombre: "Panel de Control Industrial",
    categorias: ["Control", "Automatización"],
  },
  {
    id: 4,
    imageSrc:
      "https://proelectricos.com/wp-content/uploads/2015/06/productos_media_tension1_proelectricos_bogota_colombia.jpg",
    nombre: "Celda de Media Tensión",
    categorias: ["Celdas", "Subestaciones"],
  },
  {
    id: 7,
    imageSrc:
      "https://interelectricas.com.co/4921-large_default/cofre-tipo-exterior-70-x-50-x-25-calibre-18.jpg",
    nombre: "Cofre Eléctrico Metálico IP65",
    categorias: ["Cofres", "Exterior"],
  },
  {
    id: 5,
    imageSrc:
      "https://interelectricas.com.co/5400-large_default/tablero-tercol-trifasico-con-puerta-36-circuitos-225a-galvanizado-ref-trp336g.jpg",
    nombre: "Tablero Trifásico Industrial 225A",
    categorias: ["Distribución", "Industrial"],
  },
  {
    id: 6,
    imageSrc:
      "https://cdnx.jumpseller.com/e-daga/image/11638918/thumb/760/760?1672765194",
    nombre: "Cofre Eléctrico Metálico IP60",
    categorias: ["Cofres", "Exterior"],
  },
  {
    id: 8,
    imageSrc:
      "https://cdnx.jumpseller.com/e-daga/image/11635301/thumb/760/760?1672691041",
    nombre: "Cofre Metálico de Control IP66",
    categorias: ["Cofres", "Control"],
  },
  {
    id: 9,
    imageSrc:
      "https://www.lbspower-abb.com/wp-content/uploads/2024/01/producto-5-scaled.jpg",
    nombre: "Tablero de Baja Tensión ABB",
    categorias: ["Baja Tensión", "Distribución"],
  },
  {
    id: 10,
    imageSrc:
      "https://hbse.cl/assets/uploads/2016/03/Centro-de-Control-de-Motores.jpg",
    nombre: "Centro de Control de Motores (MCC)",
    categorias: ["Control", "Automatización"],
  },
  {
    id: 11,
    imageSrc:
      "https://ingecomsas.com/wp-content/uploads/2021/11/Cofre-20x20x13-Base_F.jpg",
    nombre: "Cofre Eléctrico para Intemperie",
    categorias: ["Cofres", "Media Tensión"],
  },
  {
    id: 12,
    imageSrc:
      "https://industriasrebra.com/wp-content/uploads/2015/04/tra4.jpg",
    nombre: "Tablero de Transferencia Automática",
    categorias: ["Transferencia", "Emergencia"],
  },
];

const certificadosTableros = [
  {
    numero: "3311372026",
    titulo: "Tableros de baja tensión",
    alcance: "Certificado de producto para las referencias de tableros de baja tensión indicadas en el anexo.",
    imagen: "/certificaciones/previews/3311372026.png",
    pdf: "/certificaciones/ALC-Certificado-Producto-3311372026.pdf",
  },
  {
    numero: "3311382026",
    titulo: "Transferencias automáticas",
    alcance: "Certificado de producto para tableros de transferencia automática de carga.",
    imagen: "/certificaciones/previews/3311382026.png",
    pdf: "/certificaciones/ALC-Certificado-Producto-3311382026.pdf",
  },
  {
    numero: "3321392026",
    titulo: "Encerramientos para tableros",
    alcance: "Certificado de producto para encerramientos y cofres; las referencias están en el anexo.",
    imagen: "/certificaciones/previews/3321392026.png",
    pdf: "/certificaciones/ALC-Certificado-Producto-3321392026.pdf",
  },
  {
    numero: "3321402026",
    titulo: "Cajas eléctricas",
    alcance: "Certificado de producto para cajas y productos incluidos en el anexo certificado.",
    imagen: "/certificaciones/previews/3321402026.png",
    pdf: "/certificaciones/ALC-Certificado-Producto-3321402026.pdf",
  },
];

// --- COMPONENTE: PRODUCT CARD ---
const ProductCard = ({ imageSrc, nombre, categorias }) => {
  const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(`Hola, me gustaría cotizar: ${nombre}`)}`;

  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100">
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <img
          src={imageSrc}
          alt={nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F3D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
          <img src={logoJFC} alt="JFC" className="h-5 w-auto" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {categorias.map((cat, i) => (
            <span
              key={i}
              className="text-[10px] font-black uppercase tracking-widest text-[#FA8200] bg-[#FA8200]/10 px-2 py-1 rounded-md"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-[#0A0F3D] leading-tight mb-4 group-hover:text-[#FA8200] transition-colors uppercase">
          {nombre}
        </h3>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#FA8200] hover:bg-[#ff9526] text-white font-bold text-xs py-3 rounded-xl transition-all uppercase tracking-widest"
        >
          COTIZAR AHORA <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

// --- COMPONENTE: INFO CARD ---
const InfoCard = ({
  icon: Icon,
  title,
  description,
  color,
}) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-[#FA8200]/30 transition-colors group text-center">
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:rotate-12 duration-300 shadow-xl"
      style={{ backgroundColor: color }}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-black mb-3 text-[#0A0F3D] uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-gray-800 font-semibold leading-relaxed">
      {description}
    </p>
  </div>
);

export function TablerosPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0A0F3D] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-[#FA8200] rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full opacity-20" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            TABLEROS{" "}
            <span className="text-[#FA8200]">CERTIFICADOS</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-semibold">
            Fabricación de alto nivel bajo normativa{" "}
            <strong>RETIE</strong>. Ingeniería de precisión para
            el sector industrial y residencial.
          </p>
        </div>
      </section>

      {/* 2. VENTAJAS */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              icon={Shield}
              title="Norma RETIE"
              description="Cumplimiento total de seguridad nacional."
              color="#0A0F3D"
            />
            <InfoCard
              icon={Award}
              title="Calidad JFC"
              description="Componentes de marcas líderes mundiales."
              color="#FA8200"
            />
            <InfoCard
              icon={Zap}
              title="Alto Desempeño"
              description="Garantía de continuidad operativa."
              color="#0A0F3D"
            />
          </div>
        </div>
      </section>

      {/* 3. CERTIFICACIONES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="rounded-[2rem] border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg sm:p-10 md:p-12">
            <div className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-28 w-44 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <img src={logoALC} alt="ONAC acreditado · Agencia Latinoamericana de Certificación SAS" className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#FA8200]">Agencia Latinoamericana de Certificación SAS</p>
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#0A0F3D] md:text-3xl">Certificados de producto para tableros</h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
                  Consulta los certificados ALC aplicables a tableros de baja tensión, transferencias automáticas, encerramientos y cajas. Cada documento incluye su alcance y referencias en el anexo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {certificadosTableros.map((certificado) => (
                <article key={certificado.numero} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <a href={certificado.pdf} target="_blank" rel="noreferrer" aria-label={`Abrir certificado ${certificado.numero}`} className="block aspect-[3/4] overflow-hidden bg-gray-100">
                    <img src={certificado.imagen} alt={`Vista previa del certificado ALC ${certificado.numero}: ${certificado.titulo}`} className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  </a>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#FA8200]">ALC · Certificado {certificado.numero}</p>
                    <h3 className="mt-2 text-base font-black leading-snug text-[#0A0F3D]">{certificado.titulo}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">{certificado.alcance}</p>
                    <a href={certificado.pdf} target="_blank" rel="noreferrer" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A0F3D] px-4 py-3 text-[10px] font-black uppercase tracking-wider text-white transition-colors hover:bg-[#FA8200]">
                      <Download className="h-4 w-4" /> Ver certificado PDF
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONFIGURADOR TÉCNICO INTERACTIVO */}
      <QuoteConfigurator />

      {/* 5. CATÁLOGO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-black text-[#0A0F3D] uppercase tracking-tight mb-12">
            Catálogo Especializado
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productosTableros.map((producto) => (
              <ProductCard key={producto.id} {...producto} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
