import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

// --- COMPONENTE: TARJETA DE SEDE ---
const BranchCard = ({ city, address, phone, color }) => (
  <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
    <div
      className="p-3 rounded-xl shrink-0 transition-transform group-hover:scale-110"
      style={{ backgroundColor: `${color}15` }}
    >
      <MapPin className="w-6 h-6" style={{ color: color }} />
    </div>
    <div>
      <h3 className="text-[#0A0F3D] font-black uppercase text-xs tracking-widest mb-1">
        {city}
      </h3>
      <p className="text-gray-900 text-sm font-medium mb-1">
        {address}
      </p>
      <p className="text-gray-700 text-[11px] uppercase tracking-tight">
        {phone}
      </p>
    </div>
  </div>
);

export function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola JFC, mi nombre es ${formData.nombre}. Mi correo es ${formData.email} y mi teléfono ${formData.telefono}. Mensaje: ${formData.mensaje}`;
    const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0A0F3D] pt-40 lg:pt-44 pb-20 relative overflow-hidden">
        {" "}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-[#FA8200]" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Canal Directo
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            Conecte con{" "}
            <span className="text-[#FA8200]">Expertos</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
            Estamos listos para asesorarle en sus proyectos de
            ingeniería eléctrica y civil a nivel nacional.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* INFO SIDEBAR (4 COLUMNS) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-[10px] font-black text-[#FA8200] uppercase tracking-[0.4em] mb-4 text-center lg:text-left">
                  Información Corporativa
                </h2>
                <h3 className="text-3xl font-black text-[#0A0F3D] uppercase tracking-tighter mb-8 text-center lg:text-left">
                  Nuestras Sedes
                </h3>

                <div className="space-y-4">
                  <BranchCard
                    city="Sede Principal Neiva"
                    address="Cra. 5 #4-62 Centro"
                    phone="+57 317 639 0289"
                    color="#0A0F3D"
                  />
                  <BranchCard
                    city="Sede Bogotá DC"
                    address="Calle 70C N. 105A - 69"
                    phone="+57 310 802 3277"
                    color="#FA8200"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl text-[#0A0F3D]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest">
                      Email Comercial
                    </p>
                    <p className="text-sm font-bold text-[#0A0F3D]">
                      ventas@jfcelectrical.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl text-[#FA8200]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest">
                      Horario de Atención
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Lunes - Viernes: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM CONTAINER (7 COLUMNS) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50">
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-3xl font-black text-[#0A0F3D] uppercase tracking-tighter mb-2">
                    Solicitud de Cotización
                  </h3>
                  <p className="text-gray-700 text-sm font-light">
                    Complete el formulario y un ingeniero se
                    pondrá en contacto.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#0A0F3D] uppercase tracking-widest ml-1">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[#0A0F3D] transition-all"
                      placeholder="Ej: Juan Pérez"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nombre: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#0A0F3D] uppercase tracking-widest ml-1">
                      Correo Corporativo
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[#0A0F3D] transition-all"
                      placeholder="juan@empresa.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-[#0A0F3D] uppercase tracking-widest ml-1">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[#0A0F3D] transition-all"
                      placeholder="+57 300 000 0000"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          telefono: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-[#0A0F3D] uppercase tracking-widest ml-1">
                      Descripción del Requerimiento
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[#0A0F3D] transition-all resize-none"
                      placeholder="Describa brevemente su proyecto o material solicitado..."
                      value={formData.mensaje}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mensaje: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="md:col-span-2 bg-[#FA8200] hover:bg-[#0A0F3D] text-white font-black uppercase text-[10px] tracking-[0.2em] py-5 rounded-2xl shadow-lg shadow-[#FA8200]/20 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Consulta Técnica
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION (DARK) */}
      <section className="bg-[#0A0F3D] py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                <iframe
                  title="Google Maps JFC Neiva"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.623456!2d-75.289123!3d2.934567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTYnMDUuNCJOIDc1wrAxNyczMC44Ilc!5e0!3m2!1ses!2sco!4v123456789"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
                {/* Overlay flotante sobre el mapa */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0A0F3D]/80 backdrop-blur-md p-6 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 text-white">
              <ShieldCheck className="w-6 h-6 text-[#FA8200]" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">
                  Ubicación Estratégica
                </p>
                <p className="text-sm font-light opacity-80">
                  Cra. 5 #4-62 Centro, Neiva - Huila
                </p>
              </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h4 className="text-[#FA8200] font-black text-xs uppercase tracking-[0.3em]">
                Certificación RETIE
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                Liderazgo en el{" "}
                <span className="text-[#FA8200]">Huila</span>
              </h2>
              <p className="text-white/60 font-light text-lg leading-relaxed">
                Como importadores directos y proveedores
                certificados, garantizamos que cada componente
                eléctrico cumple con las normativas vigentes en
                Colombia. Visite nuestro centro de distribución
                en Neiva.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                  <p className="text-white font-bold text-xl mb-1">
                    RETIE
                  </p>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest font-black">
                    Material Certificado
                  </p>
                </div>
                <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                  <p className="text-white font-bold text-xl mb-1">
                    Huila
                  </p>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest font-black">
                    Sede Principal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}