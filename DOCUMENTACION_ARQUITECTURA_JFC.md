# DOCUMENTO DE ARQUITECTURA DE SOFTWARE (SAD)
## JFC ELECTRICAL ENGINEERING S.A.S
### Sistema Web Corporativo

---

**Versión:** 1.0  
**Fecha:** Abril 2026  
**Proyecto:** Sitio Web Corporativo JFC Electrical Engineering  
**Autor:** Equipo de Desarrollo  
**Estado:** Implementado

---

## TABLA DE CONTENIDOS

1. [Introducción](#1-introducción)
2. [Alcance del Sistema](#2-alcance-del-sistema)
3. [Arquitectura General](#3-arquitectura-general)
4. [Tecnologías Utilizadas](#4-tecnologías-utilizadas)
5. [Estructura del Proyecto](#5-estructura-del-proyecto)
6. [Componentes Principales](#6-componentes-principales)
7. [Navegación y Rutas](#7-navegación-y-rutas)
8. [Integraciones Externas](#8-integraciones-externas)
9. [Diseño y Estilos](#9-diseño-y-estilos)
10. [Seguridad](#10-seguridad)
11. [Optimización y Performance](#11-optimización-y-performance)
12. [Deployment](#12-deployment)
13. [Mantenimiento](#13-mantenimiento)

---

## 1. INTRODUCCIÓN

### 1.1 Propósito del Documento
Este documento describe la arquitectura del sistema web corporativo de JFC Electrical Engineering S.A.S., una aplicación web moderna desarrollada para presentar los servicios, productos y certificaciones de la empresa en el sector eléctrico e ingeniería civil.

### 1.2 Contexto del Negocio
JFC Electrical Engineering S.A.S. es una empresa especializada en:
- Fabricación de tableros eléctricos certificados
- Suministros eléctricos industriales
- Servicios de ingeniería eléctrica
- Instalación de redes eléctricas
- Sistemas de semaforización

### 1.3 Objetivos del Sistema
- Presentar portafolio de productos y servicios
- Facilitar contacto directo con clientes (WhatsApp)
- Mostrar certificaciones RETIE
- Generar confianza mediante diseño profesional
- Optimizar para electricistas (alta legibilidad)

---

## 2. ALCANCE DEL SISTEMA

### 2.1 Funcionalidades Principales

#### Módulo de Productos
- **Tableros Eléctricos**: Catálogo certificado con configurador técnico
- **Suministros**: 32+ productos con filtrado por categorías
- **Redes y Cables**: Productos con imágenes duales (hover effect)
- **Ingeniería**: Servicios de diseño y consultoría
- **Semaforización**: Soluciones de control de tráfico

#### Módulo Institucional
- Página About (Misión, Visión, Valores)
- Portafolio de Proyectos
- Certificaciones RETIE
- Información de Contacto

#### Funcionalidades Transversales
- Cotización vía WhatsApp (todos los productos)
- Buscador global de productos
- Carousel de imágenes corporativas
- Redes sociales flotantes
- Formulario de contacto

### 2.2 Usuarios Objetivo
- **Primarios**: Electricistas, ingenieros eléctricos, contratistas
- **Secundarios**: Empresas constructoras, entidades públicas
- **Terciarios**: Distribuidores, proveedores

---

## 3. ARQUITECTURA GENERAL

### 3.1 Tipo de Arquitectura
**Single Page Application (SPA)** con enrutamiento del lado del cliente.

### 3.2 Patrón Arquitectónico
**Component-Based Architecture** utilizando React 18.3.1

```
┌─────────────────────────────────────────┐
│         NAVEGADOR (Cliente)             │
│  ┌───────────────────────────────────┐  │
│  │      React Application            │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │   React Router (v7.13)      │  │  │
│  │  │  - Client-side routing      │  │  │
│  │  └─────────────────────────────┘  │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │   Component Tree            │  │  │
│  │  │  - RootLayout               │  │  │
│  │  │    ├─ Header                │  │  │
│  │  │    ├─ Page Components       │  │  │
│  │  │    └─ Footer                │  │  │
│  │  └─────────────────────────────┘  │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │   State Management          │  │  │
│  │  │  - React Hooks (useState)   │  │  │
│  │  │  - Local component state    │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      SERVICIOS EXTERNOS                 │
│  ┌──────────────┐  ┌─────────────────┐  │
│  │   WhatsApp   │  │    Unsplash     │  │
│  │  (573176...)  │  │  (imágenes)     │  │
│  └──────────────┘  └─────────────────┘  │
└─────────────────────────────────────────┘
```

### 3.3 Flujo de Datos

```
Usuario → Navegador → React Router → Componente
                                         ↓
                              Estado Local (useState)
                                         ↓
                              Renderizado (Virtual DOM)
                                         ↓
                              Actualización UI Real
```

---

## 4. TECNOLOGÍAS UTILIZADAS

### 4.1 Stack Tecnológico Principal

| Categoría | Tecnología | Versión | Propósito |
|-----------|------------|---------|-----------|
| **Framework** | React | 18.3.1 | Construcción de UI |
| **Lenguaje** | TypeScript/JavaScript | ES2020+ | Lógica de aplicación |
| **Routing** | React Router | 7.13.0 | Navegación SPA |
| **Estilos** | Tailwind CSS | 4.1.12 | Framework CSS utility-first |
| **Build Tool** | Vite | 6.3.5 | Bundler y dev server |
| **Iconos** | Lucide React | 0.487.0 | Sistema de iconografía |

### 4.2 Librerías de UI/UX

| Librería | Uso |
|----------|-----|
| **react-slick** | Carousels de imágenes |
| **motion** (Framer Motion) | Animaciones y transiciones |
| **@radix-ui/** | Componentes accesibles (dialogs, menus, etc.) |
| **recharts** | Gráficos (si se requieren) |
| **react-hook-form** | Manejo de formularios |

### 4.3 Integración de Servicios

```javascript
// WhatsApp Business API
const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(mensaje)}`;

// Unsplash (imágenes profesionales)
// Se utilizan URLs directas de la API de Unsplash
```

---

## 5. ESTRUCTURA DEL PROYECTO

### 5.1 Árbol de Directorios

```
/workspaces/default/code/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── figma/          # Componentes de Figma
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── ui/             # Componentes base Radix UI
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   └── ... (40+ componentes)
│   │   │   ├── Certifications.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── IndustrialCarousel.tsx
│   │   │   ├── SocialMediaButtons.tsx
│   │   │   └── TablerosSection.tsx
│   │   │
│   │   ├── layouts/            # Layouts de página
│   │   │   └── RootLayout.tsx
│   │   │
│   │   ├── pages/              # Páginas principales
│   │   │   ├── products/       # Páginas de productos
│   │   │   │   ├── IngenieriaPage.tsx
│   │   │   │   ├── RedesPage.tsx
│   │   │   │   ├── SemaforizacionPage.tsx
│   │   │   │   ├── SuministrosPage.tsx
│   │   │   │   └── TablerosPage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ContactoPage.tsx
│   │   │   ├── HomePage.tsx
│   │   │   ├── NotFoundPage.tsx
│   │   │   └── ProyectosPage.tsx
│   │   │
│   │   ├── App.tsx             # Componente raíz
│   │   └── routes.tsx          # Configuración de rutas
│   │
│   ├── imports/                # Assets importados
│   │   ├── pasted_text/       # Archivos temporales
│   │   ├── *.jpg              # Imágenes de productos
│   │   ├── *.png              # Logos y certificados
│   │   └── *.svg              # Vectores
│   │
│   └── styles/                 # Estilos globales
│       ├── fonts.css          # Tipografías
│       └── theme.css          # Tokens de diseño
│
├── package.json               # Dependencias del proyecto
├── vite.config.ts            # Configuración Vite
├── tsconfig.json             # Configuración TypeScript
└── tailwind.config.js        # Configuración Tailwind (v4)
```

### 5.2 Convenciones de Nomenclatura

- **Componentes**: PascalCase (`Header.tsx`, `TablerosPage.tsx`)
- **Utilities**: camelCase (`formatPrice.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`WHATSAPP_NUMBER`)
- **CSS Classes**: kebab-case con Tailwind utilities

---

## 6. COMPONENTES PRINCIPALES

### 6.1 Header (src/app/components/Header.tsx)

**Responsabilidades:**
- Navegación principal del sitio
- Buscador de productos con categorías
- Botón CTA de cotización (WhatsApp)
- Menú móvil responsivo
- Dropdown de productos

**Estado Interno:**
```typescript
const [productosOpen, setProductosOpen] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
const [selectedCat, setSelectedCat] = useState("Todas");
const [scrolled, setScrolled] = useState(false);
```

**Características:**
- Fixed position con shadow en scroll
- Sticky behavior
- Enlaces activos según ruta actual
- Altura adaptativa: `h-14 md:h-20`

### 6.2 Footer (src/app/components/Footer.tsx)

**Responsabilidades:**
- Información corporativa
- Enlaces a secciones principales
- Datos de contacto
- Redes sociales
- Copyright

**Secciones:**
1. Logo y descripción
2. Enlaces rápidos
3. Productos
4. Contacto
5. Bar legal

### 6.3 RootLayout (src/app/layouts/RootLayout.tsx)

**Estructura:**
```tsx
<RootLayout>
  <Header />
  <main>
    <Outlet /> {/* Contenido dinámico según ruta */}
  </main>
  <Footer />
  <SocialMediaButtons /> {/* Botón flotante WhatsApp */}
</RootLayout>
```

### 6.4 Páginas de Productos

#### TablerosPage
- **Catálogo**: 12 productos
- **Configurador**: Especificaciones técnicas interactivas
- **Certificaciones**: 2 certificados descargables
- **Filtros**: Por tipo de tablero

**Datos del Configurador:**
```typescript
{
  tipo: "Tablero de Distribución" | "Cofre de Control" | ...,
  material: "Lámina Cold Rolled" | "Lámina Galvanizada" | ...,
  calibre: "Calibre 14 (RETIE)" | "Calibre 16" | ...,
  proteccion: "IP20" | "IP54" | "IP65" | "NEMA 4X"
}
```

#### SuministrosPage
- **Productos**: 32 items
- **Categorías**: 8 (Breakers, Conductores, Canalizaciones, etc.)
- **Filtrado**: Dinámico con useState
- **Grid**: Responsive (1 col móvil, 3 cols desktop)

#### RedesPage
- **Productos**: 8 cables y conductores
- **Hover Effect**: Dual image (imagen principal + hover)
- **WhatsApp**: Integración directa en cada card

### 6.5 Componentes Reutilizables

#### ProductCard (Variantes por página)
```tsx
// TablerosPage
const ProductCard = ({ imageSrc, nombre, categorias }) => {
  const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(`Hola, me gustaría cotizar: ${nombre}`)}`;
  // Render con botón naranja
};

// SuministrosPage
const ProductCard = ({ imageSrc, nombre, categoria }) => {
  // Similar estructura con overlay del logo
};
```

#### InfoCard
```tsx
const InfoCard = ({ icon: Icon, title, description, color }) => (
  <div>
    <Icon color={color} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
```

---

## 7. NAVEGACIÓN Y RUTAS

### 7.1 Configuración de Rutas (src/app/routes.tsx)

```typescript
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'nosotros', Component: AboutPage },
      {
        path: 'productos',
        Component: ProductsLayout,
        children: [
          { path: 'tableros', Component: TablerosPage },
          { path: 'ingenieria', Component: IngenieriaPage },
          { path: 'redes', Component: RedesPage },
          { path: 'suministros', Component: SuministrosPage },
          { path: 'semaforizacion', Component: SemaforizacionPage },
        ],
      },
      { path: 'proyectos', Component: ProyectosPage },
      { path: 'contacto', Component: ContactoPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
```

### 7.2 Mapa de Navegación

```
/ (HomePage)
├── /nosotros (AboutPage)
├── /productos
│   ├── /productos/tableros
│   ├── /productos/ingenieria
│   ├── /productos/redes
│   ├── /productos/suministros
│   └── /productos/semaforizacion
├── /proyectos (ProyectosPage)
└── /contacto (ContactoPage)
```

### 7.3 Navegación Activa

```typescript
const location = useLocation();
const isActive = (path: string) => location.pathname === path;
```

---

## 8. INTEGRACIONES EXTERNAS

### 8.1 WhatsApp Business API

**Endpoint**: `https://wa.me/573176390289`

**Implementación:**
```typescript
// Cotización de producto
const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(
  `Hola, me gustaría cotizar: ${nombreProducto}`
)}`;

// Formulario de contacto
const message = `Hola JFC, mi nombre es ${formData.nombre}. 
Mi correo es ${formData.email} y mi teléfono ${formData.telefono}. 
Mensaje: ${formData.mensaje}`;

const whatsappUrl = `https://wa.me/573176390289?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, "_blank");
```

**Uso:**
- Botón header: "COTIZAR AHORA"
- Botones de producto: "Cotizar ahora"
- Configurador técnico: "Enviar para Asesoría"
- Formulario contacto: Submit
- Botón flotante: SocialMediaButtons

### 8.2 Unsplash API

**Uso**: Imágenes profesionales de proyectos e ingeniería

```typescript
const images = [
  "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80",
  // ... más URLs
];
```

### 8.3 Redes Sociales

**Configuración:**
```typescript
const socialLinks = {
  whatsapp: "https://wa.me/573176390289",
  instagram: "#",  // Pendiente URL real
  facebook: "#",   // Pendiente URL real
};
```

---

## 9. DISEÑO Y ESTILOS

### 9.1 Sistema de Colores

**Paleta Corporativa:**
```css
/* Azul Corporativo (Navy) */
#0A0F3D  → bg-[#0A0F3D]  text-[#0A0F3D]

/* Naranja Acento (CTA) */
#FA8200  → bg-[#FA8200]  text-[#FA8200]
#ff9526  → bg-[#ff9526]  (hover state)

/* Grises para Textos (Optimizado Electricistas) */
text-gray-700  → Labels y categorías
text-gray-800  → Texto secundario
text-gray-900  → Texto principal
```

**Justificación**: Colores oscuros y negrilla para máxima legibilidad en entornos industriales.

### 9.2 Tipografía

```css
/* Headings */
font-black uppercase tracking-tighter

/* Body */
font-semibold leading-relaxed  /* Antes: font-light */

/* Labels */
font-black uppercase tracking-widest text-[10px]
```

**Cambio de Diseño:**
- **Antes**: `font-light` (difícil de leer)
- **Ahora**: `font-semibold` (óptimo para electricistas)

### 9.3 Espaciado y Layout

```css
/* Padding Top Páginas */
pt-40 lg:pt-44  → Hero sections (para evitar overlap con header)

/* Containers */
container mx-auto px-6 max-w-7xl

/* Grids Responsivos */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  /* Productos */
grid-cols-1 lg:grid-cols-2                /* About, Certificados */
```

### 9.4 Componentes de Estilo

**Botón Primario (CTA):**
```jsx
className="bg-[#FA8200] hover:bg-[#ff9526] text-white py-4 px-8 rounded-xl 
           font-black text-xs uppercase tracking-widest transition-all 
           shadow-lg hover:-translate-y-1"
```

**Card de Producto:**
```jsx
className="bg-white rounded-2xl overflow-hidden border border-gray-100 
           shadow-sm hover:shadow-xl transition-all duration-500 group"
```

---

## 10. SEGURIDAD

### 10.1 Protección XSS

**Estrategia:**
- React sanitiza automáticamente el contenido renderizado
- `encodeURIComponent()` para URLs de WhatsApp
- No se usa `dangerouslySetInnerHTML`

### 10.2 Validación de Formularios

```typescript
// ContactoPage - Validación básica
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validaciones implícitas con HTML5
  // required, type="email", pattern, etc.
  
  // Construcción segura del mensaje
  const message = `Hola JFC, mi nombre es ${formData.nombre}...`;
  const safeUrl = encodeURIComponent(message);
};
```

### 10.3 Navegación Segura

```typescript
// Links externos con seguridad
<a 
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"  // Previene window.opener exploit
>
```

### 10.4 Assets y Recursos

- Imágenes locales en `/src/imports/`
- CDN de Unsplash (HTTPS)
- No hay carga de scripts externos no autorizados

---

## 11. OPTIMIZACIÓN Y PERFORMANCE

### 11.1 Optimizaciones de React

**Code Splitting:**
```typescript
// React Router realiza code splitting automático por rutas
const router = createBrowserRouter([...]); // Lazy loading implícito
```

**Memoización:**
```typescript
// Uso estratégico de React.memo para componentes pesados
export const ProductCard = React.memo(({ imageSrc, nombre }) => {
  // ...
});
```

### 11.2 Optimización de Imágenes

**Estrategia:**
1. Imágenes locales en formato `.jpg` y `.png`
2. Unsplash con parámetros de optimización:
   ```
   ?w=800&q=80  → Ancho 800px, Calidad 80%
   ```
3. Lazy loading nativo:
   ```jsx
   <img loading="lazy" alt="..." />
   ```

### 11.3 Bundle Optimization

**Vite Configuration:**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router'],
          'ui': ['lucide-react', '@radix-ui/...']
        }
      }
    }
  }
});
```

### 11.4 Performance Metrics

**Objetivos:**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1

---

## 12. DEPLOYMENT

### 12.1 Build Process

```bash
# Instalación de dependencias
pnpm install

# Build de producción
pnpm build

# Output
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images]
└── [otros assets]
```

### 12.2 Configuración de Hosting

**Recomendaciones:**

1. **Vercel** (Recomendado)
   ```json
   {
     "buildCommand": "pnpm build",
     "outputDirectory": "dist",
     "framework": "vite"
   }
   ```

2. **Netlify**
   ```toml
   [build]
     command = "pnpm build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Apache/Nginx** (Servidor propio)
   ```apache
   # .htaccess
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### 12.3 Variables de Entorno

```bash
# .env.production
VITE_WHATSAPP_NUMBER=573176390289
VITE_API_URL=https://jfcelectrical.com.co
```

### 12.4 CI/CD Pipeline (Ejemplo)

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 13. MANTENIMIENTO

### 13.1 Actualización de Contenidos

#### Agregar Nuevo Producto

**Archivo**: `src/app/pages/products/[Categoria]Page.tsx`

```typescript
// 1. Agregar al array de productos
const productosTableros = [
  // ... productos existentes
  {
    id: 13,  // Siguiente ID disponible
    imageSrc: "https://...",
    nombre: "Nuevo Tablero Industrial",
    categorias: ["Industrial", "Alta Tensión"],
  },
];

// 2. El componente se actualiza automáticamente
```

#### Modificar Información de Contacto

**Archivos a actualizar:**
1. `src/app/components/Header.tsx` → Constante `whatsappNumber`
2. `src/app/components/Footer.tsx` → Datos de contacto
3. `src/app/pages/ContactoPage.tsx` → Sedes y teléfonos

#### Actualizar Certificaciones

**Archivo**: `src/app/components/Certifications.tsx`

```typescript
const certifications = [
  {
    icon: ShieldCheck,
    title: "Nueva Certificación",
    subtitle: "Resolución No. XXXXX",
    description: "Descripción...",
    imageUrl: "/imports/certificado-nuevo.jpg",
    pdfUrl: "https://jfcelectrical.com.co/cert.pdf",
  },
];
```

### 13.2 Actualización de Dependencias

```bash
# Verificar versiones desactualizadas
pnpm outdated

# Actualizar dependencias menores
pnpm update

# Actualizar dependencias mayores (con precaución)
pnpm upgrade-interactive --latest
```

**Dependencias Críticas:**
- `react` y `react-dom`: Mantener en v18.x
- `react-router`: v7.x (breaking changes entre versiones)
- `tailwindcss`: v4.x (sintaxis nueva)

### 13.3 Testing y QA

**Checklist de Testing Manual:**

- [ ] Navegación entre todas las páginas
- [ ] Botones de WhatsApp funcionan correctamente
- [ ] Filtros de productos operan sin errores
- [ ] Formulario de contacto envía datos
- [ ] Responsive en móvil, tablet, desktop
- [ ] Imágenes cargan correctamente
- [ ] No hay errores en consola del navegador
- [ ] Links de redes sociales apuntan correctamente
- [ ] Certificados son descargables

**Navegadores Soportados:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 13.4 Monitoreo y Analytics

**Recomendaciones:**

1. **Google Analytics 4**
   ```html
   <!-- Agregar en index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

2. **Métricas a Monitorear:**
   - Páginas más visitadas
   - Tasa de clics en botones de WhatsApp
   - Tiempo promedio en sitio
   - Tasa de rebote
   - Conversiones (clics en "Cotizar")

3. **Error Tracking** (Opcional)
   - Sentry para captura de errores JavaScript
   - LogRocket para session replay

### 13.5 Backup y Versionado

**Sistema de Control de Versiones:**
```bash
# Git Flow
main        → Producción estable
develop     → Desarrollo activo
feature/*   → Nuevas funcionalidades
hotfix/*    → Correcciones urgentes
```

**Respaldos:**
- Código: GitHub/GitLab (repositorio remoto)
- Assets: `/src/imports/` committeado en Git
- Configuración: `.env` (NO commitear, mantener copia segura)

---

## ANEXOS

### A. Glosario de Términos

| Término | Definición |
|---------|------------|
| **SPA** | Single Page Application - Aplicación de una sola página |
| **CTA** | Call to Action - Llamado a la acción |
| **RETIE** | Reglamento Técnico de Instalaciones Eléctricas (Colombia) |
| **IP Rating** | Ingress Protection - Nivel de protección contra polvo/agua |
| **NEMA** | National Electrical Manufacturers Association |
| **NTC 2050** | Norma Técnica Colombiana para instalaciones eléctricas |

### B. Contactos del Proyecto

**Empresa:**
- **Nombre**: JFC Electrical Engineering S.A.S.
- **NIT**: 900987359-2
- **WhatsApp**: +57 317 639 0289
- **Sitio Web**: jfcelectrical.com.co

**Soporte Técnico:**
- **Desarrollador**: Equipo de Desarrollo JFC
- **Tipo de Soporte**: Mantenimiento correctivo y evolutivo

### C. Referencias Técnicas

**Documentación Oficial:**
- React 18: https://react.dev/
- React Router v7: https://reactrouter.com/
- Tailwind CSS v4: https://tailwindcss.com/
- Vite: https://vitejs.dev/
- Lucide Icons: https://lucide.dev/

**Recursos Adicionales:**
- RETIE: https://www.minenergia.gov.co/retie
- WhatsApp Business API: https://developers.facebook.com/docs/whatsapp/

---

## CONTROL DE CAMBIOS

| Versión | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | Abril 2026 | Equipo Dev | Documento inicial completo |

---

**FIN DEL DOCUMENTO**

---

*Este documento es propiedad de JFC Electrical Engineering S.A.S. y contiene información confidencial sobre la arquitectura del sistema. Su distribución está restringida al personal autorizado.*
