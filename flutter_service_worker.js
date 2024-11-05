'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "43e819a5a3da292706369522c169d7bf",
"version.json": "f3eaeba5f6994766d5781dbe45b0436b",
"index.html": "72c3a96550f09013ef7fa68af46f6163",
"/": "72c3a96550f09013ef7fa68af46f6163",
"main.dart.js": "a092134f87c8a6c9081ffe8917bbde21",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c528f99a0076f503d29c31898e8122cb",
"assets/AssetManifest.json": "6b867acf8f9267bebde92c914ae8cac2",
"assets/NOTICES": "bfcf15bf12bfbbfafee2a4a293962402",
"assets/FontManifest.json": "167654d2d89b21ad094e1aab619b6f6f",
"assets/AssetManifest.bin.json": "3c07cd620c869e9c2545d45d7907d24a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693e604e99304a1d198d7ec8dd880b99",
"assets/fonts/MaterialIcons-Regular.otf": "d9b89054f47852048bbbed6db21de09a",
"assets/assets/images/car2.png": "b4bec351509a787195435a0c5be49bf8",
"assets/assets/images/car3.png": "09115dbffbb74e2ca3f4a9be421932f1",
"assets/assets/images/onboarding1.png": "90e9533e299f1050da4ec685fea8b9c3",
"assets/assets/images/onboarding3.png": "64294c6f28d99d686b6c05b75be98b2e",
"assets/assets/images/onboarding2.png": "f2f753a2fe7a0cf2cb2edef9f1661396",
"assets/assets/images/car4.png": "1eb09c40c8f228c9447651fd1588c3b2",
"assets/assets/images/car5.png": "f207cc3ce0d80b8b6532de255f02f7fb",
"assets/assets/images/showroom.png": "c8b6874578a24cc1014cce31da2b3da3",
"assets/assets/images/car_medium.png": "7ceb82d489466e0db6c76f1a0c7c76be",
"assets/assets/images/car_splash.png": "d373bac7880603cddb45080a1340b0bc",
"assets/assets/images/red_car.png": "f8fa4f8d4ccb661eda34a9d62aa57c07",
"assets/assets/icons/automatic_icon.svg": "dbb265eb12ce8b9ef81a53d3b57daf1c",
"assets/assets/icons/show_room_icon.svg": "68ec9d20b19471af9dc2f7c467c33906",
"assets/assets/icons/add_icon.svg": "4f1e9c917514b26b7d15d0977943d599",
"assets/assets/icons/mazda_icon.svg": "9350011487c6d90f695e51a368951324",
"assets/assets/icons/share_icon.svg": "ff5c32e700fc2e76f039619c6b8c0f10",
"assets/assets/icons/home_icon.svg": "50ea91de825102cc3069634cc486170a",
"assets/assets/icons/bmw_icon.svg": "5246095a49dd64de518fa56100d7cd07",
"assets/assets/icons/add_active.svg": "3fdcfa3ec33e3a945c0d06b0d4154242",
"assets/assets/icons/profile_active.svg": "657d4138fd5dec30a8f34c37e0df5713",
"assets/assets/icons/profile_icon.svg": "013c90b83eda2a5e9123049cb8a2ca2e",
"assets/assets/icons/toyota_icon.svg": "14fa9bd57a9833dae4edaa00ac12e048",
"assets/assets/icons/home_active.svg": "1657547025ff90053a6fdca6fd23df0b",
"assets/assets/icons/seat_icon.svg": "17e2a3ab48a5fff5de42bb0cbfc909ba",
"assets/assets/icons/explore_icon.svg": "0aa1c4f1fb4ff7bda997f817f2c67a53",
"assets/assets/icons/audi_icon.svg": "d9aaad43616664e2b5f31506d0365514",
"assets/assets/icons/disel_icon.svg": "b91851a82c4d634fda7c1d48a27926bf",
"assets/assets/icons/back.svg": "98570c5c9af7a9b7022c7fbde5780acc",
"assets/assets/icons/history_icon.svg": "1d9895451ed3e72c40bed796eec94683",
"assets/assets/icons/explore_active.svg": "c89a5bb5bc6999b2d4030a0fbd3fd1f1",
"assets/assets/icons/history_active.svg": "64badcb4d11a8b46c88231732ca202d6",
"assets/assets/icons/notification_icon.svg": "9ce55570eef5ebc68e5e47b6dea575dc",
"assets/assets/fonts/Avenir%2520Regular.ttf": "77ce85fec67e99ffc50ed8edac7a4890",
"assets/assets/fonts/Avenir%2520Black.ttf": "d10ab385fbea9101af7f13e5e2f8e968",
"assets/assets/translations/en.json": "f8d74c56cc00198464b613150bc1f9a2",
"assets/assets/translations/ar.json": "82ccc5dfad591734c5624b80a1670cab",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
