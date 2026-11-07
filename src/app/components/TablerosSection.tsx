import React, { useState } from "react";
import {
  Filter,
  ArrowRight,
  CheckCircle2,
  Zap,
  Search,
} from "lucide-react";

import logoTableros from "../../imports/633032f0-9654-485e-b537-0d0d0b7f57f9.png";
import { tablerosReferencias } from "../data/tablerosReferencias";

/* =========================
   CATEGORÍAS
========================= */
const categorias = [
  "Todos",
  "Breakers y Protecciones",
  "Conductores y Cables",
  "Canalizaciones",
  "Iluminación Industrial",
  "Transformadores",
  "Medidores y Instrumentación",
  "Conectores y Terminales",
  "Material de Ferretería Eléctrica",
  "Medición",
  "Medición y distribución",
  "Distribución",
  "Distribución e interconexión",
  "Transferencia automática",
  "Sistemas fotovoltaicos",
  "Cofres y gabinetes",
];

/* =========================
   PRODUCTOS
========================= */
const productosTableros = [
  {
    id: 1,
    imageSrc:
      "https://interelectricas.com.co/37314-large_default/tablero-bifasico-100a-12-circuitos-con-puerta-plastica-galvanizado-bimetalico-uso-residencial-e-industrial-tb12pg.jpg",
    nombre: "Tablero de Distribución Residencial",
    categoria: "Breakers y Protecciones",
  },
  {
    id: 2,
    imageSrc:
      "https://soldexel.com/wp-content/uploads/tableros-electricos-de-control-trifasico-bifasico-monofasico-industrial-marca-soldexel.jpg",
    nombre: "Tablero Principal de Control",
    categoria: "Canalizaciones",
  },
  {
    id: 3,
    imageSrc:
      "https://www.eabel.com/wp-content/uploads/2023/09/Eabel-Electrical-Enclosures-7.webp",
    nombre: "Panel de Control Industrial",
    categoria: "Medidores y Instrumentación",
  },
  {
    id: 4,
    imageSrc:
      "https://proelectricos.com/wp-content/uploads/2015/06/productos_media_tension1_proelectricos_bogota_colombia.jpg",
    nombre: "Celda de Media Tensión",
    categoria: "Transformadores",
  },
];

export const productosCatalogo = [
  ...productosTableros,
  ...tablerosReferencias.map((producto) => {
    const imagenRepresentativa =
      producto.categoria === "Transferencia automática"
        ? productosTableros[3].imageSrc
        : producto.categoria === "Cofres y gabinetes"
          ? productosTableros[2].imageSrc
          : productosTableros[0].imageSrc;

    return {
      ...producto,
      id: producto.id,
      imageSrc: imagenRepresentativa,
    };
  }),
];

/* =========================
   COMPONENTE
========================= */
export function TablerosSection() {
  const [categoriaActiva, setCategoriaActiva] =
    useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productosCatalogo.filter((producto) => {
    const coincideCategoria =
      categoriaActiva === "Todos" || producto.categoria === categoriaActiva;
    const texto = `${producto.nombre} ${producto.categoria} ${"referencia" in producto ? producto.referencia : ""}`.toLowerCase();
    return coincideCategoria && texto.includes(busqueda.trim().toLowerCase());
  });

  return (
    <section id="tableros" className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ================= SIDEBAR ================= */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-[#FA8200]" />
                <h2 className="text-xl font-black text-[#0A0F3D] uppercase">
                  Filtrar por
                </h2>
              </div>

              <div className="flex flex-col gap-2">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaActiva(cat)}
                    className={`px-5 py-3 rounded-xl text-xs font-black transition-all text-left flex items-center justify-between ${
                      categoriaActiva === cat
                        ? "bg-[#0A0F3D] text-white shadow-lg translate-x-1"
                        : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-100"
                    }`}
                  >
                    {cat}
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        categoriaActiva === cat
                          ? "text-[#FA8200]"
                          : "opacity-0"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* BANNER */}
              <div className="p-8 bg-[#FA8200] rounded-[2.5rem] text-white relative overflow-hidden shadow-xl">
                <h4 className="text-xl font-black mb-2">
                  ¿Buscas algo específico?
                </h4>
                <p className="text-xs opacity-90 mb-6">
                  Contáctanos y lo conseguimos para ti.
                </p>
                <button className="w-full py-3 bg-[#0A0F3D] rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition">
                  Hablar con experto
                </button>
                <Zap className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10" />
              </div>
            </div>
          </aside>

          {/* ================= GRID ================= */}
          <main className="lg:w-3/4">
            <div className="mb-10 border-b border-gray-200 pb-6">
              <h3 className="text-4xl font-black text-[#0A0F3D] uppercase">
                {categoriaActiva}
              </h3>
              <p className="text-gray-700 text-sm">
                Mostrando {productosFiltrados.length} productos
              </p>
              <label className="mt-5 flex max-w-xl items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 focus-within:border-[#FA8200] focus-within:ring-2 focus-within:ring-[#FA8200]/20">
                <Search className="h-4 w-4 shrink-0 text-gray-500" aria-hidden="true" />
                <input
                  value={busqueda}
                  onChange={(event) => setBusqueda(event.target.value)}
                  placeholder="Buscar tablero por nombre o referencia (ej. 203)"
                  className="w-full text-sm text-[#0A0F3D] outline-none placeholder:text-gray-500"
                  aria-label="Buscar tableros por nombre o referencia"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {productosFiltrados.map((producto) => {
                const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(`Hola, me gustaría cotizar: ${producto.nombre}`)}`;
                return (
                  <div
                    key={producto.id}
                    className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                  >
                    <div className="relative aspect-square bg-[#F8FAFC] rounded-2xl overflow-hidden mb-4 flex items-center justify-center p-6">
                      {/* LOGO HOVER */}
                      <img
                        src={logoTableros}
                        alt="JFC"
                        className="absolute top-3 right-3 h-6 w-auto opacity-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply"
                      />

                      <img
                        src={producto.imageSrc}
                        alt={producto.nombre}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      {"referencia" in producto && (
                        <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2 py-1 text-[9px] font-bold text-gray-600 shadow-sm">
                          Imagen referencial
                        </span>
                      )}
                    </div>

                    <span className="text-[#FA8200] text-[9px] font-black uppercase tracking-widest">
                      {producto.categoria}
                    </span>

                    <h4 className="text-[#0A0F3D] font-bold text-sm h-10 my-3 uppercase line-clamp-2">
                      {producto.nombre}
                    </h4>

                    {"referencia" in producto && (
                      <div className="mb-3 space-y-1">
                        <p className="text-xs font-bold text-[#0A0F3D]">Ref. JFC: {producto.referencia}</p>
                        <p className="min-h-10 text-xs leading-relaxed text-gray-600">{producto.descripcion}</p>
                      </div>
                    )}

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#FA8200] text-white text-[10px] font-black rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#ff9526] transition-colors"
                    >
                      Cotizar ahora{" "}
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
