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
- **`manifest.webmanifest` y Meta Tags PWA**: Permite instalar el juego en la pantalla de inicio de teléfonos móviles (Android e iOS) a pantalla completa con icono oficial y color de tema `#22123b`.
- **Open Graph y SEO**: Título, descripción e imagen preparados para mostrar previsualizaciones enriquecidas al compartir el enlace por WhatsApp, Telegram, Discord, etc.
