import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../../imports/633032f0-9654-485e-b537-0d0d0b7f57f9.png";

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://facebook.com/jfcelectrical",
      label: "Facebook",
    },
    {
      icon: Instagram,
      url: "https://instagram.com/jfcelectrical",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/jfcelectrical",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#0A0F3D] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* COLUMNA 1 */}
          <div>
            <img
              src={logo}
              alt="JFC Electrical Engineering S.A.S"
              className="h-24 md:h-28 w-auto object-contain mb-6 brightness-0 invert"
            />

            <p className="text-gray-300 leading-relaxed">
              Comprometidos con la excelencia energética y
              soluciones de ingeniería integral.
            </p>
          </div>

          {/* COLUMNA 2 */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FA8200] uppercase tracking-wider">
              Nuestras Sedes
            </h3>

            <div className="space-y-6">
              {/* SEDE NEIVA */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#207EA8] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-bold text-white">
                    Sede Neiva (Huila)
                  </p>
                  <p className="text-sm text-gray-400">
                    Cra. 5 #4-62 Centro
                  </p>

                  {/* NIT PERFECTAMENTE ALINEADO */}
                  <div className="flex items-start gap-3 pt-2">
                    <Building2 className="w-5 h-5 text-[#FA8200] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">
                        NIT
                      </p>
                      <p className="text-white font-medium">
                        900.967.959-2
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEDE BOGOTÁ */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#207EA8] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">
                    Sede Bogotá D.C.
                  </p>
                  <p className="text-sm text-gray-400">
                    Calle 70C N. 105A - 69
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA 3 */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FA8200] uppercase tracking-wider">
              Contacto Directo
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#207EA8] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">
                    Líneas Celulares
                  </p>
                  <p className="text-white hover:text-[#FA8200] transition-colors">
                    +57 317 639 0289
                  </p>
                  <p className="text-white hover:text-[#FA8200] transition-colors">
                    +57 310 579 9657
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Mail className="w-5 h-5 text-[#207EA8]" />
                <a
                  href="mailto:ventas@jfcelectrical.com"
                  className="text-white hover:text-[#FA8200] font-medium transition-all"
                >
                  ventas@jfcelectrical.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold">
              JFC ELECTRICAL ENGINEERING S.A.S.
            </span>{" "}
            — Todos los derechos reservados.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-[#FA8200] p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}