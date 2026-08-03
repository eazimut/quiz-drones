// Service Worker — Quiz Drones AESA
// Cache-first para funcionar offline. Sube el número de versión al cambiar archivos.
const VERSION = 'quiz-drones-v1';
const ASSETS = [
  './',
  './index.html',
  './preguntas.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy)).catch(() => {});
      return resp;
    }).catch(() => cached))
  );
});
