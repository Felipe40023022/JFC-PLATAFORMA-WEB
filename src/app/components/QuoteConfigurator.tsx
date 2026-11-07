import { useMemo, useState } from "react";
import {
  FileText,
  Plus,
  Ruler,
  ShieldAlert,
  Trash2,
  Upload,
} from "lucide-react";

type ClientData = {
  nombre: string;
  tipoDocumento: string;
  documento: string;
  empresa: string;
  nit: string;
  correo: string;
  telefono: string;
  direccion: string;
  ciudad: string;
};

type Accessory = {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
};

const formatCOP = (amount: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount || 0);

function extractRutFields(text: string) {
  const clean = text.replace(/\u00a0/g, " ");
  const nitArea = clean.match(/(?:NIT|N[I1]T|n[uú]mero de identificaci[oó]n tributaria)[\s\S]{0,100}/i)?.[0] ?? "";
  const nitMatch = nitArea.match(/\b(\d{8,10})\s*(?:[-–.]\s*(\d))?\b/);
  const companyMatch = clean.match(/(?:raz[oó]n\s+social|denominaci[oó]n)\s*[:\-\n]*\s*([A-ZÁÉÍÓÚÜÑ0-9&.,'()\- ]{4,90})/i);
  const emailMatch = clean.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  const phoneMatch = clean.match(/(?:tel[eé]fono|celular|tel\.?)[^\d]{0,20}(\+?\d[\d\s().-]{6,16})/i);
  const addressMatch = clean.match(/(?:direcci[oó]n\s+principal|direcci[oó]n)\s*[:\-\n]*\s*([^\n]{5,80})/i);
  const cityMatch = clean.match(/(?:municipio|ciudad)\s*[:\-\n]*\s*([A-ZÁÉÍÓÚÜÑ ]{3,40})/i);
  const firstName = clean.match(/primer\s+nombre\s*[:\-\n]*\s*([A-ZÁÉÍÓÚÜÑ]{2,})/i)?.[1] ?? "";
  const otherNames = clean.match(/otros\s+nombres\s*[:\-\n]*\s*([A-ZÁÉÍÓÚÜÑ ]{2,35})/i)?.[1]?.trim() ?? "";
  const firstSurname = clean.match(/primer\s+apellido\s*[:\-\n]*\s*([A-ZÁÉÍÓÚÜÑ]{2,})/i)?.[1] ?? "";
  const secondSurname = clean.match(/segundo\s+apellido\s*[:\-\n]*\s*([A-ZÁÉÍÓÚÜÑ]{2,})/i)?.[1] ?? "";
  const personalName = [firstName, otherNames, firstSurname, secondSurname].filter(Boolean).join(" ");

  return {
    nombre: personalName,
    nit: nitMatch ? `${nitMatch[1]}${nitMatch[2] ? `-${nitMatch[2]}` : ""}` : "",
    empresa: companyMatch?.[1]?.split(/\s{2,}|\b(?:C[oó]digo|Municipio|Departamento)\b/i)[0]?.trim() ?? "",
    correo: emailMatch?.[0] ?? "",
    telefono: phoneMatch?.[1]?.trim() ?? "",
    direccion: addressMatch?.[1]?.trim() ?? "",
    ciudad: cityMatch?.[1]?.trim() ?? "",
  };
}

async function extractPdfText(file: File) {
  const [pdfjs, pdfWorker] = await Promise.all([
    import("pdfjs-dist"),
    import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
  ]);
  pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker.default;
  const pdf = await pdfjs.getDocument({
    data: new Uint8Array(await file.arrayBuffer()),
  }).promise;
  const textPages: string[] = [];
  const imagePages: HTMLCanvasElement[] = [];
  const pageCount = Math.min(pdf.numPages, 3);

  for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .filter(Boolean)
      .join(" ");
    textPages.push(pageText);

    if (pageNumber <= 2) {
      const viewport = page.getViewport({ scale: 1.6 });
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const context = canvas.getContext("2d");
      if (context) {
        await page.render({ canvas, canvasContext: context, viewport }).promise;
        imagePages.push(canvas);
      }
    }
  }

  const searchableText = textPages.join("\n").trim();
  if (searchableText.length > 80) return searchableText;

  const { createWorker } = await import("tesseract.js");
  const worker = await createWorker("spa");
  try {
    const recognizedPages: string[] = [];
    for (const canvas of imagePages) {
      const result = await worker.recognize(canvas);
      recognizedPages.push(result.data.text);
    }
    return recognizedPages.join("\n");
  } finally {
    await worker.terminate();
  }
}

async function extractRutText(file: File) {
  if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
    return extractPdfText(file);
  }
  const { createWorker } = await import("tesseract.js");
  const worker = await createWorker("spa");
  try {
    const result = await worker.recognize(file);
    return result.data.text;
  } finally {
    await worker.terminate();
  }
}

export function QuoteConfigurator() {
  const [config, setConfig] = useState({
    tipo: "Tablero de distribución",
    material: "Lámina Cold Rolled",
    calibre: "Calibre 14",
    proteccion: "IP54",
    tension: "Por definir",
    corriente: "Por definir",
    fases: "Por definir",
  });
  const [dimensiones, setDimensiones] = useState("");
  const [seguridad, setSeguridad] = useState("Cierre de manija");
  const [valorTablero, setValorTablero] = useState(0);
  const [cliente, setCliente] = useState<ClientData>({
    nombre: "",
    tipoDocumento: "CC",
    documento: "",
    empresa: "",
    nit: "",
    correo: "",
    telefono: "",
    direccion: "",
    ciudad: "",
  });
  const [accesorios, setAccesorios] = useState<Accessory[]>([]);
  const [accesorioNuevo, setAccesorioNuevo] = useState({ nombre: "", cantidad: 1, precio: 0 });
  const [rutNombre, setRutNombre] = useState("");
  const [rutEstado, setRutEstado] = useState("");
  const [leyendoRut, setLeyendoRut] = useState(false);
  const [archivoAdjunto, setArchivoAdjunto] = useState("");
  const [quoteNumber] = useState(() => `JFC-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`);
  const quoteDate = useMemo(() => new Date().toLocaleDateString("es-CO"), []);

  const subtotalAccesorios = accesorios.reduce(
    (total, item) => total + item.cantidad * item.precio,
    0,
  );
  const total = valorTablero + subtotalAccesorios;

  const opciones: Record<string, string[]> = {
    tipo: [
      "Tablero de distribución",
      "Tablero de medición semidirecta",
      "Tablero de medida directa",
      "Tablero de transferencia automática",
      "Tablero de interconexión fotovoltaica",
      "Cofre de control",
      "Celda de media tensión",
    ],
    material: ["Lámina Cold Rolled", "Lámina galvanizada", "Acero inoxidable"],
    calibre: ["Calibre 14", "Calibre 16", "Calibre 12"],
    proteccion: ["IP20", "IP54", "IP65", "NEMA 4X"],
    tension: ["Por definir", "120/208 V", "120/240 V", "208/120 V", "220/127 V", "440/254 V", "Otro"],
    corriente: ["Por definir", "30 A", "60 A", "100 A", "125 A", "225 A", "Otro"],
    fases: ["Por definir", "Monofásico", "Bifásico", "Trifásico"],
  };

  const updateClient = (field: keyof ClientData, value: string) =>
    setCliente((current) => ({ ...current, [field]: value }));

  const handleRutUpload = async (file?: File) => {
    if (!file) return;
    if (file.size > 15 * 1024 * 1024) {
      setRutEstado("El archivo supera 15 MB. Selecciona un RUT más liviano.");
      return;
    }
    if (!file.type.startsWith("image/") && file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setRutEstado("Formato no compatible. Adjunta el RUT como PDF o imagen.");
      return;
    }

    setRutNombre(file.name);
    setRutEstado("Leyendo el documento en este navegador…");
    setLeyendoRut(true);
    try {
      const text = await extractRutText(file);
      const fields = extractRutFields(text);
      const found = Object.entries(fields).filter(([, value]) => value.trim().length > 0);
      if (!found.length) {
        setRutEstado("No pude reconocer los campos. Puedes completar el formulario manualmente.");
        return;
      }
      setCliente((current) => ({ ...current, ...fields }));
      setRutEstado(`Se completaron ${found.length} campo(s). Revísalos antes de generar la cotización.`);
    } catch (error) {
      console.error("No fue posible leer el RUT", error);
      setRutEstado("No pude leer este archivo. Verifica que sea legible o completa los datos manualmente.");
    } finally {
      setLeyendoRut(false);
    }
  };

  const addAccessory = () => {
    if (!accesorioNuevo.nombre.trim()) return;
    setAccesorios((current) => [
      ...current,
      { id: Date.now(), nombre: accesorioNuevo.nombre.trim(), cantidad: Math.max(1, accesorioNuevo.cantidad), precio: Math.max(0, accesorioNuevo.precio) },
    ]);
    setAccesorioNuevo({ nombre: "", cantidad: 1, precio: 0 });
  };

  const handleDrawingUpload = (file?: File) => {
    if (!file) return;
    setArchivoAdjunto(file.name);
  };

  const openPrintDialog = () => {
    if (!cliente.nombre.trim() && !cliente.empresa.trim()) {
      window.alert("Ingresa el nombre del cliente o la empresa antes de generar la cotización.");
      return;
    }
    window.print();
  };

  const inputClass = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#0A0F3D] outline-none transition focus:border-[#FA8200] focus:ring-2 focus:ring-[#FA8200]/20";

  return (
    <section className="quote-configurator py-20 bg-[#F8FAFC]">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#FA8200]">Diseño según proyecto</p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#0A0F3D] md:text-4xl">Especifica tu tablero y arma la cotización</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">Completa las características eléctricas, agrega accesorios y registra los datos del cliente. Los valores se pueden editar antes de guardar o imprimir el PDF.</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-7 flex items-start gap-4">
                <div className="rounded-2xl bg-[#FA8200]/10 p-3 text-[#FA8200]"><Ruler className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#FA8200]">Etapa 1</p>
                  <h3 className="mt-1 text-lg font-black text-[#0A0F3D]">Especificaciones de fabricación</h3>
                  <p className="mt-1 text-sm text-gray-600">Define materiales y datos eléctricos. “Por definir” queda indicado en la propuesta para revisión técnica.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {Object.entries(opciones).map(([key, values]) => (
                  <label key={key} className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">{key === "tipo" ? "Tipo de tablero" : key === "material" ? "Material del gabinete" : key === "calibre" ? "Calibre de lámina" : key === "proteccion" ? "Grado de protección" : key === "tension" ? "Tensión nominal" : key === "corriente" ? "Corriente nominal" : "Sistema de fases"}</span>
                    <select value={config[key as keyof typeof config]} onChange={(event) => setConfig((current) => ({ ...current, [key]: event.target.value }))} className={inputClass}>
                      {values.map((value) => <option key={value} value={value}>{value}</option>)}
                    </select>
                  </label>
                ))}
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">Dimensiones (alto × ancho × fondo)</span>
                  <input value={dimensiones} onChange={(event) => setDimensiones(event.target.value)} placeholder="Ej.: 120 × 80 × 40 cm" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">Tipo de cierre</span>
                  <select value={seguridad} onChange={(event) => setSeguridad(event.target.value)} className={inputClass}>
                    <option>Cierre de manija</option><option>Cierre con llave</option><option>Portacandado</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">Valor estimado del tablero (COP)</span>
                  <input type="number" min="0" step="1000" value={valorTablero || ""} onChange={(event) => setValorTablero(Number(event.target.value))} placeholder="0" className={inputClass} />
                </label>
              </div>
            </section>

            <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-2xl bg-[#FA8200]/10 p-3 text-[#FA8200]"><Plus className="h-5 w-5" /></div>
                <div><p className="text-xs font-black uppercase tracking-widest text-[#FA8200]">Etapa 2</p><h3 className="mt-1 text-lg font-black text-[#0A0F3D]">Accesorios y componentes</h3><p className="mt-1 text-sm text-gray-600">Agrega breakers, DPS, medidores, borneras u otros elementos solicitados.</p></div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
                <input value={accesorioNuevo.nombre} onChange={(event) => setAccesorioNuevo((current) => ({ ...current, nombre: event.target.value }))} placeholder="Nombre del accesorio" className={`${inputClass} sm:col-span-5`} />
                <input type="number" min="1" value={accesorioNuevo.cantidad} onChange={(event) => setAccesorioNuevo((current) => ({ ...current, cantidad: Number(event.target.value) }))} aria-label="Cantidad del accesorio" className={`${inputClass} sm:col-span-2`} />
                <input type="number" min="0" step="1000" value={accesorioNuevo.precio || ""} onChange={(event) => setAccesorioNuevo((current) => ({ ...current, precio: Number(event.target.value) }))} placeholder="Precio unitario COP" className={`${inputClass} sm:col-span-3`} />
                <button type="button" onClick={addAccessory} disabled={!accesorioNuevo.nombre.trim()} className="flex items-center justify-center gap-2 rounded-xl bg-[#0A0F3D] px-4 py-3 text-xs font-black uppercase text-white transition hover:bg-[#171e57] disabled:cursor-not-allowed disabled:opacity-40 sm:col-span-2"><Plus className="h-4 w-4" /> Añadir</button>
              </div>
              {accesorios.length > 0 && <div className="mt-5 divide-y divide-gray-100 rounded-2xl border border-gray-100">
                {accesorios.map((item) => <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 p-4 text-sm">
                  <div className="min-w-0 flex-1"><p className="font-bold text-[#0A0F3D]">{item.nombre}</p><p className="text-xs text-gray-600">{item.cantidad} × {formatCOP(item.precio)}</p></div>
                  <span className="font-bold text-[#0A0F3D]">{formatCOP(item.cantidad * item.precio)}</span>
                  <button type="button" onClick={() => setAccesorios((current) => current.filter((accessory) => accessory.id !== item.id))} aria-label={`Eliminar ${item.nombre}`} className="rounded-lg p-2 text-red-600 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                </div>)}
              </div>}
            </section>

            <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-2xl bg-[#FA8200]/10 p-3 text-[#FA8200]"><FileText className="h-5 w-5" /></div>
                <div><p className="text-xs font-black uppercase tracking-widest text-[#FA8200]">Etapa 3</p><h3 className="mt-1 text-lg font-black text-[#0A0F3D]">Datos del cliente</h3><p className="mt-1 text-sm text-gray-600">Adjunta el RUT para intentar completar automáticamente algunos campos y verifica la información reconocida.</p></div>
              </div>

              <label className="mb-5 flex cursor-pointer flex-col gap-3 rounded-2xl border-2 border-dashed border-[#0A0F3D]/20 bg-[#F8FAFC] p-5 transition hover:border-[#FA8200]/60 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-3"><Upload className="h-5 w-5 text-[#FA8200]" /><span><span className="block text-sm font-bold text-[#0A0F3D]">Cargar RUT en PDF o imagen</span><span className="block text-xs text-gray-600">El archivo se procesa localmente en este navegador; no se envía al sitio.</span></span></span>
                <span className="rounded-lg bg-white px-4 py-2 text-xs font-black uppercase text-[#0A0F3D] shadow-sm">{leyendoRut ? "Leyendo…" : "Seleccionar archivo"}</span>
                <input type="file" accept="application/pdf,image/*" className="sr-only" onChange={(event) => void handleRutUpload(event.target.files?.[0])} />
              </label>
              {(rutNombre || rutEstado) && <p className="mb-5 text-xs text-gray-700" aria-live="polite">{rutNombre && <strong>{rutNombre}. </strong>}{rutEstado}</p>}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label><span className="mb-2 block text-xs font-bold text-gray-700">Nombre de contacto</span><input value={cliente.nombre} onChange={(event) => updateClient("nombre", event.target.value)} className={inputClass} /></label>
                <label><span className="mb-2 block text-xs font-bold text-gray-700">Empresa / razón social</span><input value={cliente.empresa} onChange={(event) => updateClient("empresa", event.target.value)} className={inputClass} /></label>
                <div className="grid grid-cols-3 gap-2">
                  <label className="col-span-1"><span className="mb-2 block text-xs font-bold text-gray-700">Tipo ID</span><select value={cliente.tipoDocumento} onChange={(event) => updateClient("tipoDocumento", event.target.value)} className={inputClass}><option>CC</option><option>CE</option><option>NIT</option><option>PP</option></select></label>
                  <label className="col-span-2"><span className="mb-2 block text-xs font-bold text-gray-700">Documento</span><input value={cliente.documento} onChange={(event) => updateClient("documento", event.target.value)} className={inputClass} /></label>
                </div>
                <label><span className="mb-2 block text-xs font-bold text-gray-700">NIT y dígito de verificación</span><input value={cliente.nit} onChange={(event) => updateClient("nit", event.target.value)} className={inputClass} /></label>
                <label><span className="mb-2 block text-xs font-bold text-gray-700">Correo electrónico</span><input type="email" value={cliente.correo} onChange={(event) => updateClient("correo", event.target.value)} className={inputClass} /></label>
                <label><span className="mb-2 block text-xs font-bold text-gray-700">Teléfono</span><input value={cliente.telefono} onChange={(event) => updateClient("telefono", event.target.value)} className={inputClass} /></label>
                <label><span className="mb-2 block text-xs font-bold text-gray-700">Dirección</span><input value={cliente.direccion} onChange={(event) => updateClient("direccion", event.target.value)} className={inputClass} /></label>
                <label><span className="mb-2 block text-xs font-bold text-gray-700">Ciudad</span><input value={cliente.ciudad} onChange={(event) => updateClient("ciudad", event.target.value)} className={inputClass} /></label>
              </div>
            </section>

            <label className="flex cursor-pointer items-center gap-4 rounded-2xl bg-[#0A0F3D] p-5 text-white">
              <Upload className="h-5 w-5 shrink-0 text-[#FA8200]" />
              <span className="flex-1"><span className="block text-sm font-bold">Adjuntar diagrama unifilar</span><span className="block text-xs text-white/70">PDF, DWG o imagen para revisión técnica{archivoAdjunto ? ` · ${archivoAdjunto}` : ""}</span></span>
              <input type="file" accept=".pdf,.dwg,image/*" className="sr-only" onChange={(event) => handleDrawingUpload(event.target.files?.[0])} />
              <span className="rounded-lg border border-white/20 px-3 py-2 text-[10px] font-black uppercase">Elegir</span>
            </label>
          </div>

          <aside className="lg:sticky lg:top-32 lg:col-span-4">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl md:p-8">
              <p className="text-xs font-black uppercase tracking-widest text-[#FA8200]">Resumen</p>
              <h3 className="mb-6 mt-1 border-b border-gray-100 pb-4 text-xl font-black uppercase text-[#0A0F3D]">Cotización {quoteNumber}</h3>
              <dl className="space-y-3 text-sm">
                {Object.entries(config).map(([key, value]) => <div key={key} className="flex justify-between gap-3"><dt className="text-xs capitalize text-gray-600">{key}</dt><dd className="text-right text-xs font-bold text-[#0A0F3D]">{value || "Por definir"}</dd></div>)}
                <div className="flex justify-between gap-3"><dt className="text-xs text-gray-600">Dimensiones</dt><dd className="text-right text-xs font-bold text-[#0A0F3D]">{dimensiones || "Por definir"}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-xs text-gray-600">Cierre</dt><dd className="text-right text-xs font-bold text-[#0A0F3D]">{seguridad}</dd></div>
                <div className="flex justify-between gap-3 border-t border-gray-100 pt-3"><dt className="text-xs text-gray-600">Tablero</dt><dd className="text-xs font-bold text-[#0A0F3D]">{formatCOP(valorTablero)}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-xs text-gray-600">Accesorios ({accesorios.length})</dt><dd className="text-xs font-bold text-[#0A0F3D]">{formatCOP(subtotalAccesorios)}</dd></div>
                <div className="flex justify-between gap-3 border-t-2 border-[#0A0F3D] pt-4"><dt className="font-black uppercase text-[#0A0F3D]">Total estimado</dt><dd className="font-black text-[#0A0F3D]">{formatCOP(total)}</dd></div>
              </dl>
              <button type="button" onClick={openPrintDialog} className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#FA8200] px-5 py-4 text-xs font-black uppercase tracking-wide text-white shadow-lg transition hover:bg-[#e87500]">
                <FileText className="h-4 w-4" /> Imprimir / guardar como PDF
              </button>
              <div className="mt-4 flex gap-3 rounded-xl bg-blue-50 p-4"><ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#0A0F3D]" /><p className="text-[10px] leading-relaxed text-[#0A0F3D]">Documento de cotización comercial sujeto a revisión técnica. No es una factura electrónica ni sustituye su validación tributaria.</p></div>
            </div>
          </aside>
        </div>

        <div id="quote-print" className="hidden">
          <header className="quote-print-header"><div><h1>JFC Electrical Engineering S.A.S.</h1><p>Cotización de tablero eléctrico</p></div><div><strong>{quoteNumber}</strong><p>Fecha: {quoteDate}</p></div></header>
          <section className="quote-print-section"><h2>Datos del cliente</h2><div className="quote-print-grid">
            <p><strong>Contacto:</strong> {cliente.nombre || "—"}</p><p><strong>Empresa:</strong> {cliente.empresa || "—"}</p>
            <p><strong>Identificación:</strong> {cliente.tipoDocumento} {cliente.documento || "—"}</p><p><strong>NIT:</strong> {cliente.nit || "—"}</p>
            <p><strong>Correo:</strong> {cliente.correo || "—"}</p><p><strong>Teléfono:</strong> {cliente.telefono || "—"}</p>
            <p><strong>Dirección:</strong> {cliente.direccion || "—"}</p><p><strong>Ciudad:</strong> {cliente.ciudad || "—"}</p>
          </div></section>
          <section className="quote-print-section"><h2>Especificaciones de fabricación</h2><div className="quote-print-grid">
            <p><strong>Tipo:</strong> {config.tipo}</p><p><strong>Material:</strong> {config.material}</p>
            <p><strong>Calibre:</strong> {config.calibre}</p><p><strong>Protección:</strong> {config.proteccion}</p>
            <p><strong>Tensión:</strong> {config.tension || "Por definir"}</p><p><strong>Corriente:</strong> {config.corriente || "Por definir"}</p>
            <p><strong>Fases:</strong> {config.fases || "Por definir"}</p><p><strong>Dimensiones:</strong> {dimensiones || "Por definir"}</p>
            <p><strong>Cierre:</strong> {seguridad}</p>
          </div></section>
          <section className="quote-print-section"><h2>Detalle económico</h2><table className="quote-print-table"><thead><tr><th>Descripción</th><th>Cant.</th><th>Vr. unitario</th><th>Subtotal</th></tr></thead><tbody>
            <tr><td>{config.tipo} · {config.material} · {config.calibre} · {config.proteccion}</td><td>1</td><td>{formatCOP(valorTablero)}</td><td>{formatCOP(valorTablero)}</td></tr>
            {accesorios.map((item) => <tr key={item.id}><td>{item.nombre}</td><td>{item.cantidad}</td><td>{formatCOP(item.precio)}</td><td>{formatCOP(item.cantidad * item.precio)}</td></tr>)}
          </tbody><tfoot><tr><th colSpan={3}>Total estimado (COP)</th><th>{formatCOP(total)}</th></tr></tfoot></table></section>
          <footer className="quote-print-footer"><p>Vigencia y condiciones comerciales por confirmar con JFC.</p><p>Esta cotización no constituye factura electrónica. Los datos técnicos y valores quedan sujetos a validación del proyecto.</p></footer>
        </div>
      </div>
    </section>
  );
}
