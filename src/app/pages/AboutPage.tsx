import React from "react";
import {
  Target,
  Eye,
  Users,
  Award,
  ShieldCheck,
  Zap,
  ChevronRight,
} from "lucide-react";

// --- COMPONENTE: TARJETA DE VALORES ---
const ValueCard = ({
  icon: Icon,
  title,
  description,
  color,
}) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group text-center relative overflow-hidden">
    <div
      className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500"
      style={{ backgroundColor: color }}
    >
      <Icon className="w-10 h-10 text-white" />
    </div>
    <h3 className="text-[#0A0F3D] font-black text-xl uppercase tracking-tighter mb-4">
      {title}
    </h3>
    <p className="text-gray-800 font-semibold leading-relaxed text-sm">
      {description}
    </p>
    <div className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
      <Icon className="w-24 h-24 text-[#0A0F3D]" />
    </div>
  </div>
);

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO SECTION PREMIUM */}
      <section className="bg-[#0A0F3D] pt-40 lg:pt-44 pb-20 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FA8200] opacity-10 skew-x-12 translate-x-20" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-[#FA8200]" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Trayectoria & Confianza
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            Nuestra{" "}
            <span className="text-[#FA8200]">Esencia</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-semibold leading-relaxed">
            Un grupo empresarial donde la ingeniería eléctrica y
            civil convergen para materializar proyectos de alto
            impacto nacional.
          </p>
        </div>
      </section>

      {/* 2. MISIÓN Y VISIÓN - DISEÑO ENCAPSULADO */}
      <section className="py-24 -mt-12 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-50 relative overflow-hidden group">
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-[#0A0F3D] p-5 rounded-2xl shadow-lg shadow-[#0A0F3D]/20 transition-transform group-hover:scale-110">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black text-[#0A0F3D] uppercase tracking-tighter italic">
                  Misión
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-900 leading-relaxed text-lg font-semibold">
                  Somos un grupo empresarial conformado por{" "}
                  <strong className="text-[#0A0F3D] font-bold">
                    ingenieros electricistas y civiles altamente
                    calificados
                  </strong>
                  , especializados en servicios integrales para
                  los sectores industrial, residencial y de
                  construcción.
                </p>
                <p className="text-gray-800 leading-relaxed font-semibold">
                  Trabajamos como aliados estratégicos,
                  identificando necesidades para ofrecer
                  soluciones{" "}
                  <span className="text-[#FA8200] font-bold">
                    seguras, rentables y confiables
                  </span>
                  , bajo estándares internacionales de calidad.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-[#FA8200] font-black text-[10px] uppercase tracking-widest">
                Compromiso JFC{" "}
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Visión */}
            <div className="bg-[#0A0F3D] rounded-[3rem] p-12 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12">
                <Zap className="w-20 h-20 text-white opacity-5" />
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-[#FA8200] p-5 rounded-2xl shadow-lg shadow-[#FA8200]/20 transition-transform group-hover:scale-110">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
                  Visión
                </h2>
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-white/80 leading-relaxed text-lg font-semibold">
                  Consolidarnos como{" "}
                  <strong className="text-white font-bold">
                    líderes nacionales
                  </strong>{" "}
                  en la comercialización de productos y
                  servicios de ingeniería, destacándonos por la
                  innovación tecnológica y excelencia
                  empresarial.
                </p>
                <p className="text-white/60 leading-relaxed font-semibold">
                  Proyectamos un crecimiento sólido basado en el
                  respaldo de compañías globales líderes en{" "}
                  <span className="text-[#FA8200] font-bold">
                    tecnologías de punta
                  </span>{" "}
                  para la gestión eficiente de la energía.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-white/40 font-black text-[10px] uppercase tracking-widest">
                Hacia el Futuro{" "}
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALORES CORPORATIVOS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-[#FA8200] uppercase tracking-[0.4em] mb-4">
              Principios Rectores
            </h2>
            <h3 className="text-5xl font-black text-[#0A0F3D] uppercase tracking-tighter">
              Nuestros Valores
            </h3>
            <div className="w-20 h-1.5 bg-[#FA8200] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ValueCard
              icon={Award}
              title="Calidad"
              description="Ejecutamos cada proyecto bajo los más estrictos estándares técnicos para garantizar seguridad y durabilidad."
              color="#0A0F3D"
            />
            <ValueCard
              icon={Users}
              title="Compromiso"
              description="No somos solo proveedores; nos integramos como aliados estratégicos para el éxito de nuestros clientes."
              color="#FA8200"
            />
            <ValueCard
              icon={Target}
              title="Excelencia"
              description="Buscamos la optimización constante a través de la innovación y soluciones de ingeniería avanzada."
              color="#0A0F3D"
            />
          </div>
        </div>
      </section>
      {/* 5. SECCIÓN EXTRA: CIFRAS / LOGROS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#0A0F3D] rounded-[4rem] p-12 flex flex-wrap justify-around items-center gap-12 text-center">
            <div>
              <div className="text-[#FA8200] text-5xl font-black mb-2 tracking-tighter">
                100%
              </div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                Cumplimiento
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div>
              <div className="text-[#FA8200] text-5xl font-black mb-2 tracking-tighter">
                +100
              </div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                Aliados Técnicos
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div>
              <div className="text-[#FA8200] text-5xl font-black mb-2 tracking-tighter">
                24/7
              </div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                Respaldo Técnico
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}