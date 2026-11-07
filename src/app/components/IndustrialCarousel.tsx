import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function IndustrialCarousel() {
  const images = [
    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80",
    "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=1920&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee67d81b61e1?w=1920&q=80",
    "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=1920&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0A0F3D]">
          Proyectos de Energía Industrial
        </h2>
        <p className="text-center text-gray-900 mb-12 max-w-2xl mx-auto text-lg">
          Experiencia comprobada en instalaciones eléctricas de
          alta complejidad y cumplimiento RETIE.
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
            <img
              src={images[currentIndex]}
              alt={`Proyecto Industrial ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F3D]/60 to-transparent" />
          </div>

          {/* Botones de navegación con el azul de tu marca */}
          <button
            onClick={goToPrevious}
            className="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-white hover:bg-[#FA8200] hover:text-white p-4 rounded-full transition-all shadow-xl z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-[#271ED4] hover:text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-white hover:bg-[#FA8200] hover:text-white p-4 rounded-full transition-all shadow-xl z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-[#271ED4] hover:text-white" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#FA8200] w-10"
                    : "bg-gray-300 hover:bg-gray-400 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}