import {
  MessageCircle,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Send,
} from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const whatsappNumber = "573176390289";

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/tu_perfil",
      color: "hover:text-[#E1306C]",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/tu_pagina",
      color: "hover:text-[#1877F2]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/company/tu_empresa",
      color: "hover:text-[#0A66C2]",
    },
  ];

  const handleSendMessage = () => {
    const text =
      message ||
      "Hola, me interesa obtener más información sobre sus servicios";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-85 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#0A0F3D] p-5 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                    <MessageCircle className="w-7 h-7 text-[#FA8200]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0A0F3D] rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    JFC Electrical
                  </h3>
                  <p className="text-xs text-gray-300">
                    Respuesta inmediata
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 bg-gray-50">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
              <p className="text-sm text-gray-800 font-medium mb-1">
                👋 ¡Hola!
              </p>
              <p className="text-sm text-gray-600">
                Bienvenido a JFC Electrical Engineering. ¿Cómo
                podemos asesorarte hoy?
              </p>

              {/* Redes Sociales Integradas */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold self-center">
                  Síguenos:
                </p>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-gray-400 transition-colors ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              <textarea
                placeholder="Escribe tu consulta..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FA8200] focus:border-transparent resize-none text-sm"
                rows={3}
              />
            </div>

            <button
              onClick={handleSendMessage}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 rounded-xl mt-3 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-200 active:scale-95"
            >
              <Send className="w-4 h-4" />
              Enviar a WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Button con Notificación */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 z-[51]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA8200] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-[#FA8200] border-2 border-white"></span>
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? "bg-gray-800" : "bg-[#25D366]"} text-white w-16 h-16 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all hover:scale-110 active:scale-90`}
        >
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <MessageCircle className="w-8 h-8" />
          )}
        </button>
      </div>
    </>
  );
}