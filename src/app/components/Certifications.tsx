import React from "react";
import {
  Award,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Download,
  Zap,
  Box,
} from "lucide-react";
import logoALC from "../../../logo-1.png";

const certifications = [
  {
    icon: ShieldCheck,
    title: "Encerramientos",
    subtitle: "Certificado de producto No. 3321392026",
    description:
      "Cofres y encerramientos para tableros eléctricos, certificados bajo el esquema 5 RETIE.",
    imageUrl: "/certificaciones/previews/3321392026.png",
    pdfUrl: "/certificaciones/ALC-Certificado-Producto-3321392026.pdf",
    issuer: "Agencia Latinoamericana de Certificación SAS (ALC)",
    validity: "Vigencia y alcance detallados en el certificado.",
  },
  {
    icon: FileText,
    title: "Tableros de baja tensión",
    subtitle: "Certificado de producto No. 3311372026",
    description:
      "Certificación de tableros eléctricos de baja tensión para las referencias incluidas en su anexo.",
    imageUrl: "/certificaciones/previews/3311372026.png",
    pdfUrl: "/certificaciones/ALC-Certificado-Producto-3311372026.pdf",
    issuer: "Agencia Latinoamericana de Certificación SAS (ALC)",
    validity: "Vigencia y alcance detallados en el certificado.",
  },
  {
    icon: Zap,
    title: "Transferencias automáticas",
    subtitle: "Certificado de producto No. 3311382026",
    description:
      "Tableros de transferencia automática de carga, con referencias y alcance descritos en el anexo.",
    imageUrl: "/certificaciones/previews/3311382026.png",
    pdfUrl: "/certificaciones/ALC-Certificado-Producto-3311382026.pdf",
    issuer: "Agencia Latinoamericana de Certificación SAS (ALC)",
    validity: "Vigencia y alcance detallados en el certificado.",
  },
  {
    icon: Box,
    title: "Cajas eléctricas",
    subtitle: "Certificado de producto No. 3321402026",
    description:
      "Cajas y productos para instalaciones eléctricas, evaluados bajo el esquema 5 RETIE.",
    imageUrl: "/certificaciones/previews/3321402026.png",
    pdfUrl: "/certificaciones/ALC-Certificado-Producto-3321402026.pdf",
    issuer: "Agencia Latinoamericana de Certificación SAS (ALC)",
    validity: "Vigencia y alcance detallados en el certificado.",
  },
  {
    icon: Award,
    title: "Sistema de gestión de calidad",
    subtitle: "ISO 9001:2015 · Certificado No. 575929",
    description:
      "Certificación del sistema de gestión de calidad de JFC Electrical Engineerings S.A.S. para sus actividades de ingeniería eléctrica y comercialización de materiales.",
    imageUrl: "/certificaciones/previews/iso-9001-575929.png",
    pdfUrl: "/certificaciones/ALC-Certificado-ISO-9001-575929.pdf",
    issuer: "LL-C Certification",
    validity: "Vigencia indicada en el documento: 15 de abril de 2026 al 14 de abril de 2029.",
  },
];

export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#FA8200] to-transparent opacity-20" />

      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#FA8200]">
            Garantía y cumplimiento
          </h2>
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#0A0F3D] md:text-4xl">
            Calidad certificada
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
            Certificados de producto emitidos por ALC y certificación del sistema de gestión ISO 9001:2015.
          </p>
          <img
            src={logoALC}
            alt="ONAC acreditado · Agencia Latinoamericana de Certificación"
            className="mx-auto mt-7 h-auto w-[230px] max-w-full object-contain"
          />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <article
                key={cert.subtitle}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FA8200]/40 hover:shadow-xl md:p-7"
              >
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${cert.title} en PDF`}
                  className="mb-6 flex h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 md:h-[330px]"
                >
                  <img
                    src={cert.imageUrl}
                    alt={`Vista previa: ${cert.title}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </a>

                <div className="mb-5 flex items-center gap-4">
                  <div className="rounded-2xl bg-[#0A0F3D] p-3.5 shadow-lg shadow-[#0A0F3D]/10 transition-colors duration-300 group-hover:bg-[#FA8200]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-black uppercase leading-snug tracking-tight text-[#0A0F3D]">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-[#FA8200]">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-700">
                  {cert.description}
                </p>
                <p className="mb-6 text-[11px] font-semibold text-slate-500">
                  {cert.issuer}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-200 pt-5">
                  <div className="flex min-w-0 items-start gap-2 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span className="normal-case leading-snug">{cert.validity}</span>
                  </div>
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0A0F3D] px-4 py-2.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#FA8200]"
                  >
                    <Download className="h-3.5 w-3.5" /> Ver PDF
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
