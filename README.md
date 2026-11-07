# JFC Electrical Engineering S.A.S.

Sitio web corporativo de JFC Electrical Engineering S.A.S.

## Cómo arrancar el proyecto

### 1. Instala Node.js

Instala Node.js 20 o una versión superior desde [nodejs.org](https://nodejs.org/). Para comprobar que quedó instalado, abre una terminal y ejecuta:

```bash
node --version
npm --version
```

### 2. Abre la carpeta del proyecto

En Visual Studio Code, selecciona **Archivo > Abrir carpeta** y abre la carpeta raíz del proyecto, donde está este `README.md`.

### 3. Abre la terminal

En Visual Studio Code, selecciona **Terminal > Nueva terminal**. Confirma que la terminal esté ubicada en la carpeta del proyecto, junto a `package.json`.

### 4. Instala las dependencias

La primera vez, ejecuta:

```bash npm install
```

Espera a que termine antes de continuar.

### 5. Arranca el sitio

Ejecuta:

```bash npm run dev
```

La terminal mostrará una dirección local, normalmente `http://localhost:5173/`. Ábrela en tu navegador para ver el sitio. Deja la terminal abierta mientras lo usas.

### 6. Detén el sitio

Cuando termines, vuelve a la terminal y presiona **Ctrl + C**.

La próxima vez que quieras arrancarlo, abre la carpeta, ejecuta `npm run dev` y entra a la dirección que muestre la terminal. No hace falta reinstalar las dependencias, salvo que hayan cambiado.

## Comprobar la versión de producción

Para generar una compilación de producción, ejecuta:

```bash
npm run build
```

Los archivos generados quedan en la carpeta `dist/`.
