import React from "react";
import {
  Lightbulb,
  FileText,
  Calculator,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import logoJFC from "../../../imports/633032f0-9654-485e-b537-0d0d0b7f57f9.png";

export function IngenieriaPage() {
  const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent("Hola JFC, me interesa solicitar una consultoría en ingeniería eléctrica.")}`;

  const services = [
    {
      icon: FileText,
      title: "Diseños Eléctricos M.T. y B.T.",
      description:
        "Planos y especificaciones técnicas para instalaciones de media y baja tensión según normas NTC 2050 y RETIE.",
      image:
        "https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?w=800&q=80",
      color: "#0A0F3D",
    },
    {
      icon: Calculator,
      title: "Estudios de Carga",
      description:
        "Análisis detallado de demanda energética, dimensionamiento de sistemas y estudios de cortocircuito.",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80",
      color: "#FA8200",
    },
    {
      icon: Cpu,
      title: "Automatización Industrial",
      description:
        "Diseño de sistemas de control y automatización industrial con tecnología PLC y SCADA de vanguardia.",
      image:
        "https://images.unsplash.com/photo-1645639417590-32e8778b2141?w=800&q=80",
      color: "#0A0F3D",
    },
    {
      icon: Lightbulb,
      title: "Consultoría Técnica",
      description:
        "Asesoría especializada en proyectos eléctricos de gran escala con respaldo de ingenieros certificados.",
      image:
        "https://images.unsplash.com/photo-1652565501255-1b9e7d88822f?w=800&q=80",
      color: "#FA8200",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO SECTION - Ajustada a colores JFC */}
      <section className="bg-[#0A0F3D] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FA8200]/10 skew-x-12 translate-x-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              INGENIERÍA{" "}
              <span className="text-[#FA8200]">AVANZADA</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-semibold leading-relaxed max-w-2xl mx-auto">
              Consultoría, diseño y supervisión técnica bajo los
              más altos estándares internacionales de calidad y
              seguridad.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-[#0A0F3D]">
                  Compromiso con la Excelencia Técnica
                </h2>
                <div className="h-1.5 w-20 bg-[#FA8200] rounded-full" />
                <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                  En <strong>JFC Electrical Engineering</strong>
                  , transformamos requerimientos complejos en
                  soluciones técnicas seguras, eficientes y
                  rentables, cumpliendo estrictamente con las
                  normativas <strong>RETIE</strong> y{" "}
                  <strong>NTC 2050</strong>.
                </p>
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center gap-2 text-[#FA8200] font-bold hover:gap-4 transition-all"
                >
                  HABLAR CON UN INGENIERO{" "}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="bg-gray-100 rounded-3xl p-8 border border-gray-100 shadow-inner">
                <p className="text-gray-900 italic leading-relaxed">
                  "Nuestro equipo de ingenieros certificados
                  cuenta con amplia trayectoria en proyectos
                  residenciales, comerciales e industriales a
                  nivel nacional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRID DE SERVICIOS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F3D]/90 via-transparent to-transparent opacity-60" />

                    {/* Logo JFC overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg">
                      <img
                        src={logoJFC}
                        alt="JFC"
                        className="h-6 w-auto"
                      />
                    </div>

                    {/* Icon Tag */}
                    <div
                      className="absolute top-6 left-6 p-4 rounded-2xl shadow-2xl"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="p-10">
                    <h3 className="text-2xl font-black mb-4 text-[#0A0F3D] group-hover:text-[#FA8200] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-900 leading-relaxed text-lg font-semibold">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BENEFICIOS / WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#0A0F3D] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FA8200] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              ¿Por qué confiar su ingeniería a{" "}
              <span className="text-[#FA8200]">JFC</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                "Ingenieros certificados (Matrícula Profesional vigente)",
                "Diseños optimizados para el ahorro energético",
                "Cumplimiento 100% de normativas RETIE y NTC",
                "Soporte técnico y legal durante todo el proyecto",
                "Uso de tecnología BIM y software de vanguardia",
                "Garantía de aprobación ante entes reguladores",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FA8200]/20 flex items-center justify-center group-hover:bg-[#FA8200] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#FA8200] group-hover:text-white" />
                  </div>
                  <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FA8200] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#ff9526] transition-all shadow-xl hover:-translate-y-1 inline-block"
              >
                SOLICITAR COTIZACIÓN TÉCNICA
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
