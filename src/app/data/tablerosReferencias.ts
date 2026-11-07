export type TableroReferencia = {
  id: string;
  referencia: string;
  nombre: string;
  categoria: string;
  descripcion: string;
};

// Referencias organizadas a partir de las 50 carpetas numeradas 001–204.
// No se infieren calibres, tensiones ni marcas cuando no aparecen en el nombre.
export const tablerosReferencias: TableroReferencia[] = [
  { id: "ref-001", referencia: "001", nombre: "Tablero de medición semidirecta sin distribución", categoria: "Medición", descripcion: "Con medidor electrónico; configuración y relación de transformación por confirmar en planos." },
  { id: "ref-002", referencia: "002", nombre: "Tablero de medición semidirecta sin distribución", categoria: "Medición", descripcion: "Conjunto de medida semidirecta; especificaciones finales según diseño." },
  { id: "ref-003", referencia: "003", nombre: "Tablero eléctrico de medición semidirecta", categoria: "Medición", descripcion: "Envolvente para equipo de medida; sin sección de distribución indicada." },
  { id: "ref-004", referencia: "004", nombre: "Tablero para medición semidirecta sin distribución", categoria: "Medición", descripcion: "Configuración de medida sin distribución integrada." },
  { id: "ref-005", referencia: "005", nombre: "Tablero eléctrico de medición semidirecta", categoria: "Medición", descripcion: "Conjunto de medición; capacidad y componentes según proyecto." },
  { id: "ref-006", referencia: "006", nombre: "Tablero de medición semidirecta sin distribución — Julián Salazar", categoria: "Medición", descripcion: "Referencia de proyecto conservada para facilitar su identificación." },
  { id: "ref-007", referencia: "007", nombre: "Tablero de medición sin distribución — Electrocalculos / Ing. Sebastián", categoria: "Medición", descripcion: "Referencia de proyecto conservada; tipo de medida por validar en planos." },
  { id: "ref-050", referencia: "050", nombre: "Tablero de medición semidirecta con distribución", categoria: "Medición y distribución", descripcion: "Integra medida y distribución; corriente nominal por confirmar." },
  { id: "ref-051", referencia: "051", nombre: "Tablero de medida semidirecta con distribución", categoria: "Medición y distribución", descripcion: "Referencia de proyecto 051." },
  { id: "ref-052", referencia: "052", nombre: "Tablero de medición semidirecta con distribución", categoria: "Medición y distribución", descripcion: "Integra medida y circuitos de distribución." },
  { id: "ref-053", referencia: "053", nombre: "Tablero de medición semidirecta con distribución", categoria: "Medición y distribución", descripcion: "Referencia de proyecto 053." },
  { id: "ref-054", referencia: "054", nombre: "Tablero de medición semidirecta con distribución", categoria: "Medición y distribución", descripcion: "Referencia de proyecto 054." },
  { id: "ref-055", referencia: "055", nombre: "Cofre eléctrico de medición con distribución", categoria: "Cofres y gabinetes", descripcion: "Envolvente tipo cofre para medida y distribución." },
  { id: "ref-056", referencia: "056", nombre: "Tablero de medición semidirecta — Servicios Integrales", categoria: "Medición", descripcion: "Referencia de cliente/proyecto conservada." },
  { id: "ref-057", referencia: "057", nombre: "Tablero de medida, distribución e interconexión — Ing. Jhon Jader", categoria: "Medición y distribución", descripcion: "Conjunto integrado de medida, distribución e interconexión." },
  { id: "ref-058", referencia: "058", nombre: "Tablero de medición y distribución — Jeferson / ElectroHuila", categoria: "Medición y distribución", descripcion: "Referencia de cliente/proyecto conservada." },
  { id: "ref-059", referencia: "059", nombre: "Tablero de medida semidirecta y desconexión para sistema solar — Ecosolar", categoria: "Sistemas fotovoltaicos", descripcion: "Aplicación fotovoltaica; revisar unifilar y protecciones antes de especificar." },
  { id: "ref-060", referencia: "060", nombre: "Tablero de medición y distribución — Hotel Centro", categoria: "Medición y distribución", descripcion: "Referencia de proyecto conservada." },
  { id: "ref-061", referencia: "061", nombre: "Tablero de medición semidirecta con distribución — Javier Felipe Solano", categoria: "Medición y distribución", descripcion: "Referencia de proyecto conservada." },
  { id: "ref-062", referencia: "062", nombre: "Tablero de medición semidirecta con distribución — Francisco Martínez", categoria: "Medición y distribución", descripcion: "Referencia de proyecto conservada." },
  { id: "ref-063", referencia: "063", nombre: "Tablero de medida directa e indirecta, distribución e interconexión", categoria: "Medición y distribución", descripcion: "Configuración mixta indicada en la referencia original; validar diseño." },
  { id: "ref-064", referencia: "064", nombre: "Tablero de medición semidirecta, distribución e interconexión — Javier Felipe Solano", categoria: "Medición y distribución", descripcion: "Referencia de proyecto conservada." },
  { id: "ref-100", referencia: "100", nombre: "Tablero de distribución", categoria: "Distribución", descripcion: "Distribución de circuitos; capacidad y protecciones por definir." },
  { id: "ref-101", referencia: "101", nombre: "Tablero de distribución", categoria: "Distribución", descripcion: "Referencia de proyecto 101." },
  { id: "ref-102", referencia: "102", nombre: "Tablero de distribución", categoria: "Distribución", descripcion: "Referencia de proyecto 102." },
  { id: "ref-103", referencia: "103", nombre: "Tablero de distribución", categoria: "Distribución", descripcion: "Referencia de proyecto 103." },
  { id: "ref-104", referencia: "104-A", nombre: "Tablero de distribución", categoria: "Distribución", descripcion: "Primera carpeta identificada con la referencia 104." },
  { id: "ref-104-440", referencia: "104-B", nombre: "Tablero eléctrico de distribución, 440 V", categoria: "Distribución", descripcion: "Tensión indicada en la referencia original; corriente y nivel de cortocircuito por confirmar." },
  { id: "ref-105", referencia: "105", nombre: "Tablero eléctrico de distribución", categoria: "Distribución", descripcion: "Capacidad y protecciones por definir según carga." },
  { id: "ref-106", referencia: "106", nombre: "Gabinete industrial para alojamiento de interruptores automáticos", categoria: "Distribución", descripcion: "Envolvente para breakers industriales; dimensiones y montaje por confirmar." },
  { id: "ref-107", referencia: "107", nombre: "Tablero de distribución tipo rack", categoria: "Distribución", descripcion: "Formato rack; altura y unidades por confirmar." },
  { id: "ref-108", referencia: "108", nombre: "Tablero de distribución con DPS y analizador de redes", categoria: "Distribución", descripcion: "Incluye protección contra sobretensiones y medición de parámetros eléctricos." },
  { id: "ref-109", referencia: "109", nombre: "Tablero de distribución e interconexión", categoria: "Distribución e interconexión", descripcion: "Conjunto de distribución y punto de interconexión." },
  { id: "ref-110", referencia: "110", nombre: "Tablero eléctrico de distribución e interconexión", categoria: "Distribución e interconexión", descripcion: "Protecciones y capacidad conforme al diagrama unifilar." },
  { id: "ref-111", referencia: "111", nombre: "Tablero de distribución — Servicios Integrales", categoria: "Distribución", descripcion: "Referencia de proyecto conservada." },
  { id: "ref-112", referencia: "112", nombre: "Tablero de distribución e interconexión — Ing. José Guevara", categoria: "Distribución e interconexión", descripcion: "Referencia de proyecto conservada." },
  { id: "ref-113", referencia: "113", nombre: "Tablero de interconexión y distribución — Tecsol Colombia", categoria: "Distribución e interconexión", descripcion: "Referencia de cliente/proyecto conservada." },
  { id: "ref-114", referencia: "114", nombre: "Tablero de medida directa, distribución e interconexión", categoria: "Medición y distribución", descripcion: "Proyecto Compañía Energética Surcolombiana; conservar validación de diseño." },
  { id: "ref-115", referencia: "115", nombre: "Tablero de distribución e interconexión para sistema fotovoltaico — Solarian", categoria: "Sistemas fotovoltaicos", descripcion: "Aplicación SSFV; revisar esquema AC/DC y protecciones." },
  { id: "ref-116", referencia: "116", nombre: "Tablero general de distribución con protecciones parciales", categoria: "Distribución", descripcion: "Protección general y derivaciones parciales; datos de carga por confirmar." },
  { id: "ref-117", referencia: "117", nombre: "Tablero de distribución e interconexión — Javier Felipe Solano", categoria: "Distribución e interconexión", descripcion: "Referencia de proyecto conservada." },
  { id: "ref-118", referencia: "118", nombre: "Tablero de distribución con selector manual — Soforesta", categoria: "Distribución", descripcion: "Incluye selector manual según referencia original." },
  { id: "ref-119", referencia: "119", nombre: "Tablero principal de distribución — Parménides Pillimue / Bily", categoria: "Distribución", descripcion: "Referencia de proyecto conservada." },
  { id: "ref-120", referencia: "120", nombre: "Tablero de distribución e interconexión para sistema fotovoltaico", categoria: "Sistemas fotovoltaicos", descripcion: "Referencia de proyecto Ing. Gonzalo Pinzón; verificar unifilar." },
  { id: "ref-121", referencia: "121", nombre: "Tablero de distribución tipo combiner", categoria: "Sistemas fotovoltaicos", descripcion: "La referencia original indica “conviner”; confirmar si corresponde a caja combinadora FV." },
  { id: "ref-200", referencia: "200", nombre: "Módulo de transferencia automática red–generador", categoria: "Transferencia automática", descripcion: "Conmutación entre fuente normal y fuente de emergencia; corriente por confirmar." },
  { id: "ref-201", referencia: "201", nombre: "Módulo de transferencia automática con distribución", categoria: "Transferencia automática", descripcion: "Transferencia y circuitos de distribución integrados." },
  { id: "ref-202", referencia: "202", nombre: "Módulo de transferencia para sistema contra incendios", categoria: "Transferencia automática", descripcion: "Aplicación indicada en la referencia; confirmar requisitos del sistema de bombeo." },
  { id: "ref-203", referencia: "203", nombre: "Módulo de transferencia automática, 225 A, con controlador Imperium iPro", categoria: "Transferencia automática", descripcion: "La carpeta indica 225 A y la fotografía del controlador muestra Imperium iPro." },
  { id: "ref-204", referencia: "204", nombre: "Módulo de transferencia automática, 100 A", categoria: "Transferencia automática", descripcion: "Corriente indicada en la referencia original." },
];
