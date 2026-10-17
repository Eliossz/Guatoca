# La Guatoca Web · Despliegue en GitHub Pages

Esta carpeta contiene la aplicación web completa de **La Guatoca**, configurada y lista para funcionar en **GitHub Pages**.

---

## 🚀 Opciones para subir a GitHub Pages

Tienes dos formas muy sencillas de desplegar la web según cómo prefieras gestionar tu repositorio:

### Opción 1: Subir todo este repositorio y desplegar con GitHub Actions (Recomendado)
Ya hemos añadido el workflow `.github/workflows/deploy-guatoca.yml`.

1. Sube los cambios a tu repositorio en GitHub (rama `main` o `master`).
2. En GitHub, entra en tu repositorio y ve a:
   👉 **Settings** (Configuración) ➔ **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment** ➔ **Source**, selecciona:
   👉 **GitHub Actions**.
4. ¡Listo! La acción desplegará automáticamente la carpeta `web-app/` y te dará la URL pública (ejemplo: `https://tu-usuario.github.io/tu-repo/`).

---

### Opción 2: Crear un repositorio exclusivo para la web
Si quieres tener un repositorio separado (por ejemplo llamado `guatoca-game` o `guatoca`):

1. Crea un nuevo repositorio en GitHub.
2. Copia todo el contenido de esta carpeta `web-app/` a la raíz de ese nuevo repositorio:
   - `index.html`
   - `style.css`
   - `app.js`
   - `cardsData.js`
   - `icon.png`
   - `manifest.webmanifest`
   - `.nojekyll`
   - `404.html`
   - Carpeta `assets/`
3. Sube los archivos a GitHub.
4. En GitHub, ve a **Settings** ➔ **Pages**.
5. En **Source**, selecciona **Deploy from a branch**, elige la rama `main` (o `master`) y carpeta `/ (root)`. Guarda.

---

## 🛠️ Configuraciones especiales aplicadas

- **Rutas Relativas (`./`)**: Todos los enlaces a CSS, JavaScript, imágenes y fuentes utilizan rutas relativas, por lo que la web funciona tanto en la raíz de un dominio como en subdirectorios de GitHub Pages (`usuario.github.io/nombre-repo/`).
- **`.nojekyll`**: Evita que el procesador Jekyll de GitHub Pages ignore carpetas o modifique rutas.
- **`404.html`**: Redirección automática al juego en caso de acceder a una subruta no existente.
- **Progressive Web App (PWA) Completa**:
  - `manifest.webmanifest` & `manifest.json`: Configurados con `name: "La Guatoca"`, `short_name: "Guatoca"`, `display: "standalone"`, `orientation: "portrait"` y paleta oficial (`#300759` y `#22123b`).
  - `sw.js` (Service Worker): Pre-cachea 43 recursos críticos permitiendo jugar 100% offline tras la primera carga, con estrategia Stale-While-Revalidate para actualizaciones y Network-First para HTML.
  - Iconos de alta resolución generados desde el recurso original: 192x192, 512x512, adaptativos maskables para Android, Apple Touch Icon (180x180) y favicon (32x32).
  - Botón visible «Instalar Guatoca» con animación sutil y detección automática de soporte del navegador.
  - Aviso de invitación visual al entrar («¡Llévate Guatoca contigo! 🎲») con retardo no intrusivo y política de posposición en `localStorage`.
  - Modal interactivo con guía paso a paso para iOS Safari, Android y Escritorio.
  - Detección de modo `standalone` con soporte de márgenes seguros (`safe-area-inset`) para iPhone.
- **Open Graph y SEO**: Título, descripción e imagen preparados para mostrar previsualizaciones enriquecidas al compartir el enlace por WhatsApp, Telegram, Discord, etc.
