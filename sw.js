// ==========================================================================
// SERVICE WORKER - LA GUATOCA PWA
// Estrategia de caché segura, arranque sin conexión y actualización controlada
// ==========================================================================

const CACHE_NAME = 'guatoca-v1.0.0';

// Recursos críticos y assets esenciales para juego completo offline
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './cardsData.js',
  './manifest.webmanifest',
  './manifest.json',
  './icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './assets/original/Boogaloo-Regular.ttf',
  './assets/original/goose-beer.png',
  './assets/original/icon-flag-es419.png',
  './assets/original/icon-settings.png',
  './assets/original/icon-back-arrow.png',
  './assets/original/background-classic.png',
  './assets/original/background-etilico.png',
  './assets/original/background-flash.png',
  './assets/original/background-hot.png',
  './assets/original/background-pareja.png',
  './assets/original/background-xxl.png',
  './assets/original/board-classic.png',
  './assets/original/board-etilico.png',
  './assets/original/board-flash.png',
  './assets/original/board-hot.png',
  './assets/original/board-pareja.png',
  './assets/original/board-xxl.png',
  './assets/original/cards/front_dare.png',
  './assets/original/cards/back_dare.png',
  './assets/original/cards/front_drink.png',
  './assets/original/cards/back_drink.png',
  './assets/original/cards/front_event.png',
  './assets/original/cards/back_event.png',
  './assets/original/cards/front_hot.png',
  './assets/original/cards/back_hot.png',
  './assets/original/cards/front_nhie.png',
  './assets/original/cards/back_nhie.png',
  './assets/original/cards/front_truth.png',
  './assets/original/cards/back_truth.png'
];

// 1. INSTALACIÓN: Pre-cachear el App Shell y recursos esenciales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Usamos cache.addAll con tolerancia a fallos individuales
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn(`[SW] No se pudo pre-cachear: ${url}`, err);
          })
        )
      );
    }).then(() => {
      // No forzamos skipWaiting de inmediato para evitar romper partidas en curso
      console.log('[SW] App Shell pre-cacheado con éxito en', CACHE_NAME);
    })
  );
});

// 2. ACTIVACIÓN: Limpieza de versiones obsoletas de caché
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('guatoca-') && name !== CACHE_NAME)
          .map((name) => {
            console.log(`[SW] Eliminando caché obsoleta: ${name}`);
            return caches.delete(name);
          })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 3. ESTRATEGIA DE INTERCEPCIÓN (FETCH):
// - Navegación (HTML): Network-First con fallback a caché (siempre la versión más reciente online, pero funciona offline).
// - Estilos y Scripts: Stale-While-Revalidate (carga instantánea + actualización en segundo plano).
// - Imágenes y Fuentes: Cache-First con fallback a red (ahorro de ancho de banda y carga ultra rápida).
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Ignoramos solicitudes no GET (POST, PUT, etc.) o esquemas no HTTP/HTTPS
  if (request.method !== 'GET' || !request.url.startsWith('http')) {
    return;
  }

  const url = new URL(request.url);

  // Navegación (HTML principal)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          return caches.match('./index.html');
        })
    );
    return;
  }

  // Scripts y Estilos (Stale-While-Revalidate)
  if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        }).catch(() => {
          // Si la red falla, no hacemos nada (el cache ya respondió si existía)
        });

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Imágenes, Fuentes y otros estáticos (Cache-First)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return networkResponse;
      }).catch((err) => {
        console.warn(`[SW] Recurso no disponible offline: ${request.url}`);
        return new Response('', { status: 408, statusText: 'Offline' });
      });
    })
  );
});

// 4. MENSAJERÍA: Soporte para skipWaiting manual
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
