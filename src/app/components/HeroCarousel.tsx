import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function HeroCarousel() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1776251896448-a5eb8ae25e35?w=1920&q=80",
      title: "Ingeniería Eléctrica de Clase Mundial",
      description:
        "Soluciones integrales en media y baja tensión bajo los más estrictos estándares RETIE y NTC 2050",
      cta: "Conocer Más",
      link: "/nosotros",
    },
    {
      image:
        "https://images.unsplash.com/photo-1773952136583-5175e906267c?w=1920&q=80",
      title: "Tableros y Celdas Eléctricas",
      description:
        "Fabricación de tableros de transferencia automática, celdas de automatización y control industrial",
      cta: "Ver Tableros",
      link: "/productos/tableros",
    },
    {
      image:
        "https://images.unsplash.com/photo-1758429295457-ba071dfb22eb?w=1920&q=80",
      title: "Redes de Distribución Eléctrica",
      description:
        "Instalación y mantenimiento de redes de distribución con tecnología de punta",
      cta: "Ver Servicios",
      link: "/productos/redes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1775714351784-51e93e4c12a7?w=1920&q=80",
      title: "Suministro de Cables y Materiales",
      description:
        "Equipos certificados de alta calidad para proyectos eléctricos de cualquier escala",
      cta: "Ver Catálogo",
      link: "/productos/suministros",
    },
    {
      image:
        "https://images.unsplash.com/photo-1775519519950-9c48495b5488?w=1920&q=80",
      title: "Ingeniería y Consultoría Técnica",
      description:
        "Diseño, supervisión y asesoría especializada en proyectos de media y baja tensión",
      cta: "Más Información",
      link: "/productos/ingenieria",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[70vh] min-h-[420px] md:h-[600px] flex items-center overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

          {/* Content */}
          <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center z-10">
            <div className="max-w-xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>

              <p className="text-base sm:text-lg md:text-2xl mb-6 opacity-95">
                {slide.description}
              </p>

              <Link
                to={slide.link}
                className="inline-block bg-[#FA8200] hover:bg-[#E67700] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg transition-colors"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows (ocultos en móvil) */}
      <button
        onClick={() =>
          setCurrentIndex(
            (prev) =>
              (prev - 1 + slides.length) % slides.length,
          )
        }
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full transition z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1) % slides.length)
        }
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full transition z-20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all rounded-full ${
              index === currentIndex
                ? "bg-[#FA8200] w-10 h-2"
                : "bg-white/60 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}