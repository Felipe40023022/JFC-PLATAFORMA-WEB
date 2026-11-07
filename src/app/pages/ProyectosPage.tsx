import { useState } from "react";
import { ArrowUpRight, Building2, Zap } from "lucide-react";

const projects = [
  {
    id: "bosques-santa-ana",
    title: "Bosques de Sta. Ana",
    category: "Tableros de medición",
    summary:
      "Montaje de tableros para medición y distribución eléctrica en conjunto residencial.",
    icon: Building2,
    images: [
      { src: "/images/proyectos/bosques-01.jpeg", alt: "Tableros eléctricos instalados en Bosques de Sta. Ana" },
      { src: "/images/proyectos/bosques-02.jpeg", alt: "Vista general de los tableros de medición" },
      { src: "/images/proyectos/bosques-03.jpeg", alt: "Detalle de los módulos de medición" },
    ],
  },
  {
    id: "edificio-el-quirinal",
    title: "Edificio El Quirinal",
    category: "Distribución y protección",
    summary:
      "Ensamble y adecuación de tableros con interruptores y barras para distribución eléctrica.",
    icon: Zap,
    images: [
      { src: "/images/proyectos/quirinal-01.jpeg", alt: "Tablero eléctrico del Edificio El Quirinal" },
      { src: "/images/proyectos/quirinal-02.jpeg", alt: "Interruptores y medidores del tablero" },
      { src: "/images/proyectos/quirinal-03.jpeg", alt: "Detalle de interruptores de protección" },
      { src: "/images/proyectos/quirinal-04.jpeg", alt: "Vista interior y cableado del tablero" },
    ],
  },
  {
    id: "santelmo",
    title: "Santelmo",
    category: "Tableros y equipos de medición",
    summary:
      "Instalación de tableros eléctricos y equipos de medición para infraestructura residencial.",
    icon: Building2,
    images: [
      { src: "/images/proyectos/santelmo-01.jpeg", alt: "Detalle interior de tablero eléctrico en Santelmo" },
      { src: "/images/proyectos/santelmo-02.jpeg", alt: "Tablero de distribución de Santelmo" },
      { src: "/images/proyectos/santelmo-03.jpeg", alt: "Equipos de medición instalados en Santelmo" },
      { src: "/images/proyectos/santelmo-04.jpeg", alt: "Vista adicional del sistema de tableros" },
    ],
  },
];

export function ProyectosPage() {
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <style>{`
        @keyframes project-enter {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .project-enter { animation: project-enter .65s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .project-enter { animation: none; }
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#0A0F3D] pb-28 pt-40 lg:pt-44">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#FA8200 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#FA8200]">
              Portafolio de ingeniería
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              Proyectos <span className="text-[#FA8200]">realizados</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/65 md:text-lg">
              Conoce algunos de nuestros trabajos de fabricación e instalación de tableros y sistemas de distribución eléctrica.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-7 lg:grid-cols-3">
            {projects.map((project, projectIndex) => {
              const Icon = project.icon;
              const selectedImage = activeImages[project.id] ?? 0;
              const cover = project.images[selectedImage];

              return (
                <article
                  key={project.id}
                  className="project-enter group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ animationDelay: `${projectIndex * 120}ms` }}
                >
                  <div className="relative h-64 overflow-hidden bg-[#E9EDF3] sm:h-72">
                    <img
                      key={cover.src}
                      src={cover.src}
                      alt={cover.alt}
                      className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                      style={{ filter: "brightness(1.04) contrast(1.04) saturate(1.06)" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F3D]/70 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[#0A0F3D] shadow-sm">
                      Proyecto {projectIndex + 1}
                    </span>
                    <span className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                      <Icon className="h-4 w-4 text-[#FA8200]" /> {project.category}
                    </span>
                    <span className="absolute bottom-4 right-5 rounded-full bg-[#FA8200] p-3 text-white shadow-lg transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Proyecto realizado por JFC
                    </div>
                    <h2 className="text-2xl font-black uppercase leading-tight tracking-tight text-[#0A0F3D] transition-colors group-hover:text-[#FA8200]">
                      {project.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                      {project.summary}
                    </p>

                    <div className="mt-6 border-t border-gray-100 pt-5">
                      <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-[#0A0F3D]/60">
                        Galería · {project.images.length} fotos
                      </p>
                      <div className="flex gap-3">
                        {project.images.map((image, imageIndex) => (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() => setActiveImages((current) => ({ ...current, [project.id]: imageIndex }))}
                            aria-label={`Ver foto ${imageIndex + 1} de ${project.title}`}
                            aria-pressed={selectedImage === imageIndex}
                            className={`h-16 flex-1 overflow-hidden rounded-xl border-2 transition-all duration-200 hover:-translate-y-1 ${selectedImage === imageIndex ? "border-[#FA8200] shadow-md" : "border-transparent opacity-75 hover:opacity-100"}`}
                          >
                            <img src={image.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-[#0A0F3D] px-7 py-14 shadow-xl sm:px-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              ¿Tiene un proyecto <span className="text-[#FA8200]">en mente?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65">
              Nuestro equipo está listo para acompañar sus necesidades de ingeniería eléctrica.
            </p>
            <a href="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FA8200] px-7 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-[#0A0F3D]">
              Hable con nuestro equipo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
