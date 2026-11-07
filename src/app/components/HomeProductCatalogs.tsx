import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Filter, Search, X } from "lucide-react";
import { Link } from "react-router";
import { CableProductCard, productosCables } from "../pages/products/RedesPage";
import { productosSuministros, SuministroProductCard } from "../pages/products/SuministrosPage";
import { productosCatalogo as productosTableros } from "./TablerosSection";
import logoJFC from "../../imports/633032f0-9654-485e-b537-0d0d0b7f57f9.png";

const todosLosProductos = [
  ...productosTableros.map((producto) => ({ ...producto, tipo: "tablero" })),
  ...productosCables.map((producto) => ({ ...producto, tipo: "cable" })),
  ...productosSuministros.map((producto) => ({ ...producto, tipo: "suministro" })),
];

const gruposFiltro = ["Tableros", "Cables", "Suministros"];

function grupoDeProducto(producto) {
  return producto.tipo === "tablero" ? "Tableros" : producto.tipo === "cable" ? "Cables" : "Suministros";
}

function categoriasDeProducto(producto) {
  if (producto.tipo === "cable") return [producto.categorias?.[1] ?? "Otros cables"];
  const categoria = producto.categoria;
  return categoria ? [categoria] : [];
}

const categoriasPorGrupo = Object.fromEntries(gruposFiltro.map((grupo) => [
  grupo,
  [...new Set(todosLosProductos.filter((producto) => grupoDeProducto(producto) === grupo).flatMap(categoriasDeProducto))].sort((a, b) => a.localeCompare(b, "es")),
]));
const categoriasFiltro = gruposFiltro.flatMap((grupo) => categoriasPorGrupo[grupo]);

function TableroCard({ producto }) {
  const whatsapp = `https://wa.me/573176390289?text=${encodeURIComponent(`Hola, me gustaría cotizar: ${producto.nombre}`)}`;
  return (
    <article id={`producto-tablero-${producto.id}`} className="scroll-mt-36 group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-slate-50 p-5">
        <img src={producto.imageSrc} alt={producto.nombre} loading="lazy" decoding="async" className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
        <img src={logoJFC} alt="JFC" className="absolute right-3 top-3 h-5 w-auto opacity-60" />
        {"referencia" in producto && <span className="absolute bottom-3 left-3 rounded bg-white/95 px-2 py-1 text-[9px] font-bold text-slate-600">Imagen referencial</span>}
      </div>
      <div className="p-5">
        <p className="mb-2 text-[10px] font-black uppercase tracking-wider text-[#FA8200]">{producto.categoria}</p>
        <h3 className="min-h-10 text-sm font-bold uppercase leading-snug text-[#0A0F3D]">{producto.nombre}</h3>
        {"referencia" in producto && <p className="mt-2 text-xs font-bold text-[#0A0F3D]">Ref. JFC: {producto.referencia}</p>}
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FA8200] py-2.5 text-xs font-bold text-white transition hover:bg-[#ff9526]">Cotizar ahora <ArrowRight className="h-4 w-4" /></a>
      </div>
    </article>
  );
}

export function HomeProductCatalogs() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expandedGroups, setExpandedGroups] = useState([]);
  const [search, setSearch] = useState("");
  const [searchDraft, setSearchDraft] = useState("");
  const categoryCounts = Object.fromEntries(categoriasFiltro.map((item) => [item, todosLosProductos.filter((producto) => categoriasDeProducto(producto).includes(item)).length]));
  const filtered = useMemo(() => todosLosProductos.filter((producto) => {
    const productCategory = producto.categoria ?? producto.categorias?.[1] ?? producto.categorias?.[0] ?? "";
    const productCategories = categoriasDeProducto(producto);
    const matchesCategory = !selectedCategory || productCategories.includes(selectedCategory);
    const text = `${producto.nombre} ${productCategory} ${producto.referencia ?? ""}`.toLowerCase();
    return matchesCategory && text.includes(search.trim().toLowerCase());
  }), [selectedCategory, search]);
  const sectionsToShow = gruposFiltro;
  const toggleExpandedGroup = (group) => setExpandedGroups((current) => current.includes(group) ? current.filter((item) => item !== group) : [...current, group]);

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#FA8200]">Catálogo JFC</p>
            <h2 className="text-3xl font-black uppercase text-[#0A0F3D] md:text-4xl">Todos los productos</h2>
            <p className="mt-1 text-sm text-slate-600">Mostrando {filtered.length} productos</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <aside className="lg:w-1/4 lg:shrink-0">
            <div className="mb-5 flex items-center gap-3 text-[#0A0F3D]"><Filter className="h-5 w-5 text-[#FA8200]" /><h3 className="text-xl font-black uppercase">Filtrar por</h3></div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button type="button" onClick={() => setSelectedCategory("")} className={`flex w-full items-center justify-between border-b border-slate-100 px-4 py-3.5 text-left text-sm font-bold transition hover:bg-slate-50 ${!selectedCategory ? "text-[#0A0F3D]" : "text-slate-600"}`}>
                <span>Todos los productos</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">{todosLosProductos.length}</span>
              </button>
              {gruposFiltro.map((group) => {
                const children = categoriasPorGrupo[group];
                const expanded = expandedGroups.includes(group);
                const groupCount = todosLosProductos.filter((producto) => grupoDeProducto(producto) === group).length;
                return <div key={group} className="border-b border-slate-100 last:border-0">
                  <button type="button" onClick={() => toggleExpandedGroup(group)} aria-expanded={expanded} className="flex w-full items-center justify-between gap-2 px-4 py-3.5 text-left text-sm font-bold text-slate-800 transition hover:bg-slate-50">
                    <span className="flex min-w-0 items-center gap-3"><span>{group}</span><span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">{groupCount}</span></span>
                    <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {expanded && <div className="space-y-1 bg-slate-50 px-4 pb-3 pl-6">{children.map((item) => <button key={item} type="button" onClick={() => setSelectedCategory(item)} aria-pressed={selectedCategory === item} className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium transition ${selectedCategory === item ? "bg-[#0A0F3D] text-white" : "text-slate-700 hover:bg-white"}`}><span>{item}</span><span className={`text-[10px] ${selectedCategory === item ? "text-white/80" : "text-slate-500"}`}>{categoryCounts[item]}</span></button>)}</div>}
                </div>;
              })}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">Haz clic en una sección para ver sus subdivisiones y filtrar el catálogo.</p>
          </aside>

          <main className="min-w-0 flex-1">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 focus-within:border-[#FA8200] focus-within:ring-2 focus-within:ring-[#FA8200]/20"><Search className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" /><input value={searchDraft} onChange={(event) => { const value = event.target.value; setSearchDraft(value); setSearch(value); }} placeholder="Nombre, referencia o categoría" className="w-full text-sm text-[#0A0F3D] outline-none placeholder:text-slate-500" aria-label="Buscar en todos los productos" />{searchDraft && <button type="button" onClick={() => { setSearchDraft(""); setSearch(""); }} aria-label="Limpiar búsqueda" className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-[#0A0F3D]"><X className="h-4 w-4" /></button>}</label>
              <p className="shrink-0 text-sm font-semibold text-slate-600"><span className="font-black text-[#0A0F3D]">{filtered.length}</span> resultados</p>
            </div>
            {filtered.length ? <div className="space-y-12">{sectionsToShow.map((section) => {
              const sectionProducts = filtered.filter((producto) => grupoDeProducto(producto) === section);
              if (!sectionProducts.length) return null;
              return <section key={section}>
                <div className="mb-5 flex items-center gap-3 border-b border-slate-200 pb-3"><h3 className="text-xl font-black uppercase text-[#0A0F3D]">{section}</h3><span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600">{sectionProducts.length}</span></div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">{sectionProducts.map((producto) => {
                  if (producto.tipo === "cable") return <CableProductCard key={`cable-${producto.id}`} {...producto} />;
                  if (producto.tipo === "suministro") return <SuministroProductCard key={`suministro-${producto.id}`} {...producto} />;
                  return <TableroCard key={`tablero-${producto.id}`} producto={producto} />;
                })}</div>
              </section>;
            })}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center text-sm text-slate-600">No encontramos productos con ese filtro. Prueba otra categoría o búsqueda.</div>}
          </main>
        </div>
      </div>
    </section>
  );
}
