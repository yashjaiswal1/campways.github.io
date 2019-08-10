var cacheName = 'campways-v2';
var filesToCache = [
  '/',
  'index.html',
  'building_resized.jpg',
  'caed.jpg',
  'ccp.png',
  'chemlab.jpg',
  'downArrow.png',
  'favicon_pwa.png',
  'favicon.png',
  'library.png',
  'multiFloor.html',
  'navEnd.html',
  'oldSeminar.jpg',
  'red.jpg',
  'rotatedevice.gif',
  'sameFloor.html',
  'trial6.png',
  'vip.html',
  'maps.html',
  'qr.html',
  'off_network.png',
  'manifest.json',
  'css/materialize.css',
  'css/materialize.min.css',
  'css/style.css',
  'faculty/director.png',
  'faculty/hod_eee.jpg',
  'faculty/hod_ise.jpg',
  'faculty/hod_mech.jpg',
  'faculty/president.jpg',
  'faculty/principal.png',
  'js/materialize.js',
  'js/materialize.min.js',
  'js/init.js',
  'js/main.js',
  'maps/CCPLAB_CAED.png',
  'maps/CCPLAB_LIB.png',
  'maps/chem_caed.png',
  'maps/chem_ccp.png',
  'maps/CHEM_LAB.png',
  'maps/CHEM_LIB1.png',
  'maps/CHEM_Oldseminar.png',
  'maps/FLOOR_I.png',
  'maps/FLOOR_II.png',
  'maps/GROUND_FLOOR.png',
  'maps/LIB_CAED.png',
  'maps/LIB_CHEM.png',
  'maps/nav_director.png',
  'maps/nav_ECE_hod.png',
  'maps/NAV_EEE_HOD (2).png',
  'maps/nav_EEE_hod.png',
  'maps/nav_hod.png',
  'maps/nav_ISE_hod.png',
  'maps/nav_me_hod - Copy.png',
  'maps/nav_me_hod.png',
  'maps/nav_president.png',
  'maps/nav_principal_pntr.png',
  'maps/NAV_PRINCIPAL.png',
  'maps/nav.png',
  'maps/OldSeminar.png',
  'maps/rec_EEE_hod.png',
  'maps/rec_MECH_hod.png',
  'maps/to_CAED.png',
  'maps/to_CCPLAB.png',
  'maps/to_LIB.png',
  'offline/off_maps.html',
  'offline/off_vip.html',
  'offline/offline.html'
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