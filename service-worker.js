'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v9';

// Ficheros para añadir a la caché.
const FILES_TO_CACHE = [
  '/offline.html',
  '/index.html',
  '/assets/images/bueno_muerto.png',
  '/assets/images/spaceship_game_128.png',
  '/assets/images/game_over.png',
  '/assets/images/malo_muerto.png',
  '/assets/images/ufo_128.png',
  '/assets/images/jefe_muerto.png',
  '/assets/images/jefe.png',
  '/assets/images/missile_32.png',
  '/assets/images/shot2.png',
  '/assets/images/icons/favicon.png',
  '/scripts/Game.js',
  '/scripts/main.js',
  '/scripts/classes/Character.js',
  '/scripts/classes/Boss.js',
  '/scripts/classes/Entity.js',
  '/scripts/classes/Opponent.js',
  '/scripts/classes/Player.js',
  '/scripts/classes/Shot.js',
  '/styles/game.css',
  '/files_pwa/install.js'
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  // CODELAB: Add fetch event handler here.
  // if (evt.request.mode !== 'navigate') {
  //   // Not a page navigation, bail.
  //   console.log("Fetch no navigate");
  //   return;
  // }
  console.log('[ServiceWorker] Fetch', evt.request.url);
  evt.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
              console.log("RESP", response);
              return response || fetch(evt.request);
            });
      })
  );
});