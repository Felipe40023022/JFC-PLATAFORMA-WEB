import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function MotivationalCarousel() {
  const phrases = [
    "Construimos soluciones en ingeniería que generan confianza, seguridad y progreso.",
    "Ingeniería que conecta calidad, energía y futuro.",
    "Excelencia técnica respaldada por certificaciones RETIE y un compromiso inquebrantable.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
      setIsExiting(false);
    }, 300);
  };

  const handlePrevious = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + phrases.length) % phrases.length,
      );
      setIsExiting(false);
    }, 300);
  };

  return (
    <section className="relative bg-[#0A0F3D] py-24 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#271ED4] rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FA8200] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Icono de Comillas Decorativo */}
          <div className="flex justify-center mb-8">
            <Quote className="w-12 h-12 text-[#FA8200] opacity-50" />
          </div>

          <div className="relative h-40 md:h-32 flex items-center justify-center">
            <p
              className={`text-2xl md:text-4xl text-center text-white font-light italic leading-relaxed transition-all duration-300 ${
                isExiting
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
              }`}
            >
              "{phrases[currentIndex]}"
            </p>
          </div>

          {/* Controles de Navegación Estilizados */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={handlePrevious}
              className="group p-2 text-white/50 hover:text-[#FA8200] transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Indicadores de puntos (Dots) */}
            <div className="flex gap-3">
              {phrases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentIndex
                      ? "bg-[#FA8200] w-8 h-2"
                      : "bg-white/20 w-2 h-2 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group p-2 text-white/50 hover:text-[#FA8200] transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}