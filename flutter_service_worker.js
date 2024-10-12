'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a19f69559a551c379896575b8057fe1e",
"assets/AssetManifest.bin.json": "6c1e7e47368e4486f32f7ec7a90578c2",
"assets/AssetManifest.json": "2b3500b54711bbfb14d2736f7c143fa4",
"assets/assets/icons/cv.webp": "5a6577456c327656b2f16c3e01628976",
"assets/assets/icons/dart.png": "029f486803eccb103622cf8110fd6d6f",
"assets/assets/icons/email.webp": "b99846fc11d3705d1366d99e671f5358",
"assets/assets/icons/figma.png": "d334e5408d30e371f34c78d07fc8ae64",
"assets/assets/icons/firebase.png": "031f6738d82f413aa7513bdc8067beeb",
"assets/assets/icons/flutter.png": "26f7247a2019fbaedca0be83efe6ac5d",
"assets/assets/icons/getx.png": "4048662ecb1787a244a5138386ae917d",
"assets/assets/icons/git.png": "91e38c1fb4b2410c06d56542d09086d0",
"assets/assets/icons/github.webp": "4a60883ba39af65a498749fa043b91d5",
"assets/assets/icons/linkedin.png": "932896684a7405812813cafc82de1c9a",
"assets/assets/icons/map.webp": "0fb875dce0013efddcb8d91e87dd2616",
"assets/assets/icons/nodejs.png": "edddd431d17aaf5786280bca2cacfbac",
"assets/assets/icons/provider.png": "47c4e52a320e5f5d2904e0fcd398d4e6",
"assets/assets/icons/whatsapp.webp": "ff3c7682dcdb44c678235e9e74e14748",
"assets/assets/icons/work.webp": "57e6d7e5346d3309f22c19ff135d2cba",
"assets/assets/images/bgImage.webp": "37577bf5a05711c87eae713bbf6bf4d8",
"assets/assets/images/foodieshaven.png": "5a5bc52b3b0ee0c7da2b3988c9c24d8e",
"assets/assets/images/gostnews.png": "fa7f257a509164177ebf1c5fc7ffae2a",
"assets/assets/images/hinas.webp": "a3e60053036cb8b3f6d133631c052d07",
"assets/assets/images/hinas3.webp": "2890ecb11f58782d3f5018e2f47be842",
"assets/assets/images/lms.png": "47debd1e154bb61aaac035aa17800d20",
"assets/assets/images/mobies.png": "ccf76f6fa857b6ec8285ce774ef95417",
"assets/assets/images/moneytracker.png": "f2bf8890f1bef7f694ffdfd2b8eca9f9",
"assets/assets/images/paniyaal.png": "d44f6139eaedf8e5fa387cbc978dd31d",
"assets/assets/images/portfolio.png": "b5b47067e8d3e59c1c4d8a71defa153a",
"assets/assets/images/taskley.png": "01b47217e78f0e7627ad1ef259b5369b",
"assets/assets/images/ui1.webp": "e1adf94e2be18f0222d87f7d13522882",
"assets/assets/images/ui2.webp": "dbf6ac7c01cc5b629e08d9da8e067db8",
"assets/assets/images/ui3.webp": "93731eed654f7f80559af444fdc79f1a",
"assets/assets/images/ui4.webp": "c85ece56a70bb7127b46f6852ae0160c",
"assets/assets/images/wallpapery.png": "8e25d64bdfbe58bc96cd1a1c6633638f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e649cbd7c81f563cabe5b102ae521247",
"assets/NOTICES": "ba80c66a62060b7298c74447824c40bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d5b0c0e8d21f9a00cf693f1aad088aae",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "457d6c892d1f80324809d1abd36dc739",
"icons/Icon-192.png": "8e690803e9f0166b9436ff8989d42d59",
"icons/Icon-512.png": "f2885245bc9856152c746add5aeee189",
"icons/Icon-maskable-192.png": "8e690803e9f0166b9436ff8989d42d59",
"icons/Icon-maskable-512.png": "f2885245bc9856152c746add5aeee189",
"index.html": "1ec3455f5a3ded55e3c6203b95916171",
"/": "1ec3455f5a3ded55e3c6203b95916171",
"main.dart.js": "6012401fb8331f325479948dc5d6ad1a",
"manifest.json": "103517e711358e6ae712d5ee67e38a97",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
