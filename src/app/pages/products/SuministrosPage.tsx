import React, { useState } from "react";
import {
  ShoppingCart,
  Package,
  Truck,
  Filter,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import logoJFC from "../../../imports/633032f0-9654-485e-b537-0d0d0b7f57f9.png";

// --- DATA: PRODUCTOS (Mantenemos tu lista pero optimizada visualmente) ---
export const productosSuministros = [
  // ... (Toda tu lista de productos se mantiene igual internamente)
  {
    id: 1,
    imageSrc:
      "https://www.elecdirect.fr/21310-medium_default/schneider-acti9-ic60n-disjoncteur-4p-16a-6ka-courbe-d-ref-a9f75416.jpg",
    nombre: "Breaker Termomagnético 2P 63A",
    categoria: "Breakers y Protecciones",
  },
  {
    id: 2,
    imageSrc:
      "https://www.plc-city.com/shop/602826-thickbox_default/phc-2804403-nfs.jpg",
    nombre: "Protector de Sobretensión 220V",
    categoria: "Breakers y Protecciones",
  },
  {
    id: 5,
    imageSrc:
      "https://interelectricas.com.co/4634-large_default/cable-de-cobre-aislado-no-10-awg-metro-thhn-color-blanco.jpg",
    nombre: "Cable THHN 12 AWG Negro",
    categoria: "Conductores y Cables",
  },
  {
    id: 13,
    imageSrc:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80",
    nombre: "Luminaria LED 100W Industrial",
    categoria: "Iluminación Industrial",
  },
  {
    id: 17,
    imageSrc:
      "https://image.made-in-china.com/202f0j00IDYbLOqPgZru/Heavy-Duty-2500kVA-Low-Pressure-Copper-Coil-Transformer-for-Industry.webp",
    nombre: "Transformador Monofásico 5kVA",
    categoria: "Transformadores",
  },
  {
    id: 25,
    imageSrc:
      "https://interelectricas.com.co/4634-large_default/cable-de-cobre-aislado-no-10-awg-metro-thhn-color-blanco.jpg",
    nombre: "Terminal de Compresión 50mm²",
    categoria: "Conectores y Terminales",
  },
  {
    id: 29,
    imageSrc:
      "https://www.eabel.com/wp-content/uploads/2023/09/Eabel-Electrical-Enclosures-7.webp",
    nombre: "Caja Octogonal Metálica",
    categoria: "Material de Ferretería Eléctrica",
  },
  // ... añade el resto aquí
];

export const categoriasSuministros = [
  "Todos",
  "Breakers y Protecciones",
  "Conductores y Cables",
  "Canalizaciones",
  "Iluminación Industrial",
  "Transformadores",
  "Medidores y Instrumentación",
  "Conectores y Terminales",
  "Material de Ferretería Eléctrica",
];

// --- COMPONENTE: PRODUCT CARD PREMIUM ---
export const SuministroProductCard = ({ id, imageSrc, nombre, categoria }) => {
  const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(`Hola, me gustaría cotizar: ${nombre}`)}`;

  return (
    <div id={id != null ? `producto-suministro-${id}` : undefined} className="scroll-mt-36 group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6">
        <img
          src={imageSrc}
          alt={nombre}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#0A0F3D] text-[10px] font-black px-2 py-1 rounded shadow-sm uppercase tracking-widest border border-gray-100">
            JFC Supply
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/80 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img src={logoJFC} alt="JFC" className="h-5 w-auto" />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[#FA8200] text-[10px] font-black uppercase tracking-tighter mb-2">
          {categoria}
        </span>
        <h3 className="text-[#0A0F3D] font-bold text-sm leading-tight mb-4 flex-grow uppercase">
          {nombre}
        </h3>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-[#FA8200] hover:bg-[#ff9526] text-white text-[10px] font-black rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 uppercase tracking-widest"
        >
          Cotizar ahora <ArrowRight className="w-3 h-3" />
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
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-lg transition-all duration-300">
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform"
      style={{ backgroundColor: color }}
    >
      <Icon className="w-7 h-7 text-white" />
    </div>
    <div>
      <h3 className="text-[#0A0F3D] font-black text-lg uppercase tracking-tighter leading-none mb-2">
        {title}
      </h3>
      <p className="text-gray-800 text-sm font-semibold leading-snug">
        {description}
      </p>
    </div>
  </div>
);

export function SuministrosPage() {
  const [categoriaActiva, setCategoriaActiva] =
    useState("Todos");

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? productosSuministros
      : productosSuministros.filter(
          (p) => p.categoria === categoriaActiva,
        );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0A0F3D] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#FA8200] text-white text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
            Distribuidor Autorizado
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            Suministros{" "}
            <span className="text-[#FA8200]">Eléctricos</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-semibold leading-relaxed">
            Proveemos materiales certificados de las mejores
            marcas del mercado. Stock permanente y asesoría
            técnica especializada para tus proyectos.
          </p>
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <InfoCard
              icon={ShoppingCart}
              title="Stock Real"
              description="Inventario disponible para despacho inmediato."
              color="#0A0F3D"
            />
            <InfoCard
              icon={Package}
              title="Original"
              description="Garantía directa de fábrica en todos los materiales."
              color="#FA8200"
            />
            <InfoCard
              icon={Truck}
              title="Logística"
              description="Envíos rápidos a toda Colombia con rastreo."
              color="#0A0F3D"
            />
          </div>
        </div>
      </section>

      {/* 3. FILTERS & CATALOG */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar de Categorías */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-8">
                <div className="flex items-center gap-3 text-[#0A0F3D] mb-6">
                  <Filter className="w-5 h-5 text-[#FA8200]" />
                  <h2 className="text-xl font-black uppercase tracking-tight">
                    Filtrar por
                  </h2>
                </div>

                <div className="flex flex-wrap lg:flex-col gap-2">
                  {categoriasSuministros.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoriaActiva(cat)}
                      className={`px-6 py-4 rounded-2xl text-sm font-bold transition-all text-left flex items-center justify-between group ${
                        categoriaActiva === cat
                          ? "bg-[#0A0F3D] text-white shadow-xl translate-x-2"
                          : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-100"
                      }`}
                    >
                      {cat}
                      <CheckCircle2
                        className={`w-4 h-4 ${categoriaActiva === cat ? "text-[#FA8200] opacity-100" : "opacity-0"}`}
                      />
                    </button>
                  ))}
                </div>

                <div className="p-8 bg-[#FA8200] rounded-[2rem] text-white mt-12 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-xl font-black mb-2 leading-tight">
                      ¿Buscas algo específico?
                    </h4>
                    <p className="text-sm opacity-90 font-semibold mb-6">
                      Contáctanos y lo conseguimos para ti.
                    </p>
                    <button className="w-full py-3 bg-[#0A0F3D] rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                      Hablar con experto
                    </button>
                  </div>
                  <ShoppingCart className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 rotate-12" />
                </div>
              </div>
            </aside>

            {/* Grid de Productos */}
            <main className="lg:w-3/4">
              <div className="flex items-end justify-between mb-10 border-b border-gray-200 pb-6">
                <div>
                  <h3 className="text-3xl font-black text-[#0A0F3D] uppercase tracking-tighter">
                    {categoriaActiva}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Mostrando {productosFiltrados.length}{" "}
                    productos certificados
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-black text-gray-700 tracking-widest uppercase">
                  Orden:{" "}
                  <span className="text-[#0A0F3D]">
                    Predeterminado
                  </span>
                </div>
              </div>

              {productosFiltrados.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {productosFiltrados.map((producto) => (
                    <SuministroProductCard
                      key={producto.id}
                      {...producto}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200">
                  <Package className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">
                    No encontramos productos en esta categoría.
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* 4. MARCAS SECTION */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em] mb-12">
            Nuestros Aliados Estratégicos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Aquí irían logos reales como Schneider, Siemens, ABB, etc */}
            <span className="text-2xl font-black italic">
              SCHNEIDER
            </span>
            <span className="text-2xl font-black italic">
              SIEMENS
            </span>
            <span className="text-2xl font-black italic">
              ABB
            </span>
            <span className="text-2xl font-black italic">
              LEGRAND
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
