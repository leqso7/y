const CACHE_NAME = 'group-generator-v1';
const urlsToCache = [
  './',
  './index.html',
  './request.html',
  './manifest.json',
  './icons/s.png',
  './screenshots/pc.png',
  './screenshots/mob.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
