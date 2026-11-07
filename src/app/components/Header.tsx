import {
  ChevronDown,
  Menu,
  Search,
  X,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import logo from "../../imports/6e4ae0bb-9d4a-400c-b9f7-e5a1a06cbe81.png";
import { productosCables } from "../pages/products/RedesPage";
import { productosSuministros } from "../pages/products/SuministrosPage";
import { productosCatalogo as productosTableros } from "./TablerosSection";

const indiceProductos = [
  ...productosTableros.map((product) => ({
    id: product.id,
    name: product.nombre,
    category: product.categoria,
    reference: product.referencia,
    section: "Tableros",
    to: `/#producto-tablero-${product.id}`,
  })),
  ...productosCables.map((product) => ({
    id: product.id,
    name: product.nombre,
    category: product.categorias?.[1] ?? "Cables",
    section: "Cables",
    to: `/productos/redes#producto-cable-${product.id}`,
  })),
  ...productosSuministros.map((product) => ({
    id: product.id,
    name: product.nombre,
    category: product.categoria,
    section: "Suministros",
    to: `/productos/suministros#producto-suministro-${product.id}`,
  })),
];

function normalizarTexto(texto) {
  return texto.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

export function Header() {
  const [productosOpen, setProductosOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("Todos");
  const [showSearchCats, setShowSearchCats] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const searchResults = useMemo(() => {
    const query = normalizarTexto(searchQuery);
    if (query.length < 2) return [];
    const terms = query.split(/\s+/).filter(Boolean);
    return indiceProductos.filter((product) => {
      const matchesSection = selectedCat === "Todos" || product.section === selectedCat;
      const searchable = normalizarTexto(`${product.name} ${product.category ?? ""} ${product.reference ?? ""} ${product.section}`);
      return matchesSection && terms.every((term) => searchable.includes(term));
    }).slice(0, 8);
  }, [searchQuery, selectedCat]);

  const whatsappNumber = "573176390289";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, me interesa obtener una cotización sobre sus servicios eléctricos."
  )}`;

  const categorias = [
    { name: "Tableros", path: "/productos/tableros" },
    { name: "Ingeniería", path: "/productos/ingenieria" },
    { name: "Redes y cables", path: "/productos/redes" },
    { name: "Suministros", path: "/productos/suministros" },
    { name: "Semaforización", path: "/productos/semaforizacion" },
  ];

  const navLinks = [
    { name: "INICIO", path: "/" },
    { name: "NOSOTROS", path: "/nosotros" },
    { name: "PROYECTOS", path: "/proyectos" },
    { name: "CONTACTO", path: "/contacto" },
  ];

  const navColors = {
    "/": "bg-[#FA8200] text-white",
    "/nosotros": "bg-[#207EA8] text-white",
    "/proyectos": "bg-[#00C853] text-white",
    "/contacto": "bg-[#FFD600] text-[#0A0F3D]",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowSearchResults(false);
    setShowSearchCats(false);
  }, [location]);

  useEffect(() => {
    const closeSearchMenus = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
        setShowSearchCats(false);
      }
    };
    document.addEventListener("mousedown", closeSearchMenus);
    return () => document.removeEventListener("mousedown", closeSearchMenus);
  }, []);

  const openProductResult = (product) => {
    setSearchQuery("");
    setShowSearchResults(false);
    setShowSearchCats(false);
    navigate(product.to);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    if (searchResults[0]) openProductResult(searchResults[0]);
    else setShowSearchResults(searchQuery.trim().length >= 2);
  };

  return (
    <>
      {/* OFFSET PARA HEADER FIXED */}
      <div className="h-[96px] lg:h-[128px]" />

      <header className="fixed top-0 w-full z-50 font-sans">
        {/* MAIN BAR */}
        <div
          className={`bg-white border-b border-gray-100 transition-all duration-300 ${
            scrolled ? "py-1 shadow-md" : "py-2"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
            {/* MENU MOBILE */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#0A0F3D] hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center h-16 md:h-20 shrink-0"
            >
              <img
                src={logo}
                alt="JFC Electrical Engineering S.A.S"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
                }`}
              />
            </Link>

            {/* SEARCH DESKTOP */}
            <div
              ref={searchRef}
              className="relative hidden lg:flex flex-grow max-w-xl ml-4"
            >
              <form onSubmit={submitSearch} className="flex w-full h-10 border border-[#0A0F3D] rounded-md">
                <button
                  type="button"
                  onClick={() => { setShowSearchCats((open) => !open); setShowSearchResults(false); }}
                  aria-expanded={showSearchCats}
                  className="px-3 text-[10px] font-black uppercase border-r flex items-center gap-1"
                >
                  {selectedCat}
                  <ChevronDown className="w-3 h-3 text-[#FA8200]" />
                </button>

                <input
                  value={searchQuery}
                  onFocus={() => { setShowSearchCats(false); setShowSearchResults(searchQuery.trim().length >= 2); }}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowSearchCats(false); setShowSearchResults(e.target.value.trim().length >= 2); }}
                  placeholder="Buscar productos..."
                  aria-label="Buscar productos en todo el catálogo"
                  aria-autocomplete="list"
                  aria-expanded={showSearchResults}
                  className="flex-grow px-3 text-sm outline-none"
                />

                <button type="submit" aria-label="Buscar" className="bg-[#0A0F3D] hover:bg-[#FA8200] text-white px-4 rounded-r-md">
                  <Search className="w-4 h-4" />
                </button>
              </form>
              {showSearchCats && <div className="absolute left-0 top-full z-[70] mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">{["Todos", "Tableros", "Cables", "Suministros"].map((category) => <button key={category} type="button" onClick={() => { setSelectedCat(category); setShowSearchCats(false); setShowSearchResults(searchQuery.trim().length >= 2); }} className={`block w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-slate-50 ${selectedCat === category ? "text-[#FA8200]" : "text-[#0A0F3D]"}`}>{category}</button>)}</div>}
              {showSearchResults && searchQuery.trim().length >= 2 && <div role="listbox" className="absolute left-0 right-0 top-full z-[70] mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                {searchResults.length ? searchResults.map((product) => <button key={`${product.section}-${product.id}`} type="button" role="option" onClick={() => openProductResult(product)} className="flex w-full items-start justify-between gap-3 border-b border-slate-100 px-4 py-3 text-left last:border-0 hover:bg-slate-50">
                  <span className="min-w-0"><span className="block truncate text-sm font-bold text-[#0A0F3D]">{product.name}</span><span className="mt-1 block truncate text-[11px] text-slate-500">{product.category || product.section}{product.reference ? ` · Ref. ${product.reference}` : ""}</span></span>
                  <span className="shrink-0 rounded-full bg-[#0A0F3D]/5 px-2 py-1 text-[9px] font-black uppercase text-[#0A0F3D]">{product.section}</span>
                </button>) : <p className="px-4 py-4 text-sm text-slate-500">No encontramos coincidencias. Prueba con el nombre, referencia o tipo de producto.</p>}
              </div>}
            </div>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-[#FA8200] hover:bg-[#E67700] text-white px-4 py-2 rounded-lg text-xs font-black uppercase transition"
            >
              Cotizar ahora
            </a>
          </div>
        </div>

        {/* NAVBAR DESKTOP */}
        <nav className="hidden lg:block bg-[#0A0F3D]">
          <div className="container mx-auto px-6 flex items-center h-12">
            {/* PRODUCTOS */}
            <div
              className="h-full bg-[#FAFF00] px-8 flex items-center gap-2 font-black text-xs uppercase cursor-pointer relative text-[#0A0F3D]"
              onMouseEnter={() => setProductosOpen(true)}
              onMouseLeave={() => setProductosOpen(false)}
            >
              <Menu className="w-4 h-4" />
              PRODUCTOS
              <ChevronDown className="w-3 h-3" />

              {productosOpen && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-xl">
                  {categorias.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex justify-between px-4 py-3 text-xs font-black text-[#0A0F3D] hover:bg-[#F8FAFC] hover:text-[#FA8200]"
                    >
                      {item.name}
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* LINKS */}
            <div className="flex ml-4 h-full gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`h-full px-6 flex items-center text-[11px] font-black tracking-widest uppercase transition-all ${
                    location.pathname === link.path
                      ? navColors[link.path]
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 z-[100] lg:hidden transition ${
            mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-0 left-0 w-[80%] max-w-sm h-full bg-white shadow-xl">
            <div className="p-5 bg-[#0A0F3D] flex justify-between items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-10 brightness-0 invert"
              />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            <nav className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block font-black text-sm text-[#0A0F3D]"
                >
                  {link.name}
                </Link>
              ))}

              <hr />

              {categorias.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-sm text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
