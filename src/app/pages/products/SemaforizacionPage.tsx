import {
  TrafficCone,
  Settings,
  Wrench,
  ArrowRight,
} from "lucide-react";

export function SemaforizacionPage() {
  const whatsappNumber = "573176390289";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, necesito información y cotización sobre sistemas de semaforización.")}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SECTION HERO - Adaptada a los colores de JFC */}
      <section className="relative bg-[#0A0F3D] py-20 text-white overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FA8200]/10 skew-x-12 translate-x-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              SEMAFORIZACIÓN{" "}
              <span className="text-[#FA8200]">
                INTELIGENTE
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed font-semibold">
              Diseño, instalación y mantenimiento de sistemas
              avanzados de control de tráfico con tecnología de
              última generación para ciudades más seguras.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION SERVICIOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Instalación */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-[#FA8200]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrafficCone className="w-10 h-10 text-[#FA8200]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0A0F3D]">
                Instalación
              </h3>
              <p className="text-gray-900">
                Montaje de estructuras, ópticas LED y cableado
                de sistemas semafóricos completos.
              </p>
            </div>

            {/* Programación */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-[#0A0F3D]/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-10 h-10 text-[#0A0F3D]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0A0F3D]">
                Programación
              </h3>
              <p className="text-gray-900">
                Configuración avanzada de ciclos, tiempos y
                prioridades en controladores inteligentes.
              </p>
            </div>

            {/* Mantenimiento */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-[#FA8200]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-10 h-10 text-[#FA8200]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0A0F3D]">
                Mantenimiento
              </h3>
              <p className="text-gray-900">
                Servicio técnico especializado preventivo y
                correctivo para garantizar la operatividad 24/7.
              </p>
            </div>
          </div>

          {/* CUADRO DETALLE TÉCNICO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
            <div className="p-10 lg:p-16">
              <h2 className="text-3xl font-black text-[#0A0F3D] mb-6">
                Soluciones con Certificación y Calidad
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                En <strong>JFC Electrical Engineering</strong>{" "}
                integramos componentes bajo normativas
                internacionales y nacionales, asegurando que
                cada intersección sea eficiente y segura tanto
                para conductores como para peatones.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Semáforos vehiculares de alto impacto LED",
                  "Módulos peatonales con segunderos dinámicos",
                  "Controladores programables con conexión GPRS/Ethernet",
                  "Sistemas de respaldo de energía y protección eléctrica",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 font-medium text-[#0A0F3D]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FA8200]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Botón de acción coherente con el Header */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FA8200] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#ff9526] transition-all shadow-lg hover:-translate-y-1 active:scale-95"
              >
                SOLICITAR ESTUDIO TÉCNICO
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="h-full min-h-[400px] bg-[url('https://static.wixstatic.com/media/dc1bd0_aa4fe269e1704726933acb02f3508a62~mv2.jpg/v1/fill/w_415,h_415,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/dc1bd0_aa4fe269e1704726933acb02f3508a62~mv2.jpg')] bg-cover bg-center">
              {/* Espacio para imagen de proyecto de semaforización */}
              <div className="w-full h-full bg-[#0A0F3D]/20 backdrop-brightness-75" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
