var cacheName = 'campways-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/multiFloor.html',
  '/sameFloor.html',
  '/navEnd.html',
  '/vip.html',
  '/building_resized.jpg',
  '/caed.jpg',
  '/ccp.png',
  '/chemlab.jpg',
  '/downArrow.png',
  '/favicon_pwa.png',
  '/favicon.png',
  '/library.png',
  '/oldSeminar.jpg',
  '/red.jpg',
  '/rotatedevice.gif',
  '/trial6.png',
  'css/materialize.min.css',
  'css/style.css',
  'faculty/director.png',
  'faculty/hod_eee.jpg',
  'faculty/hod_ise.jpg',
  'faculty/hod_mech.jpg',
  'faculty/president.jpg',
  'faculty/principal.png',
  'js/init.js',
  'js/main.js',
  'js/materialize.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});