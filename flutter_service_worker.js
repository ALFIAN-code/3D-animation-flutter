'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "e6f4a6f0a7e8225e348d3b24deb56f2a",
"/": "e6f4a6f0a7e8225e348d3b24deb56f2a",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"version.json": "a027db439f40bb8c5822332090ddb5de",
"assets/lib/assets/hyundai_ioniq_5_-_lowpoly.glb": "fec1ab9c72b50652aeca93cb4fd85ac9",
"assets/lib/assets/profile11.svg": "373bddd7c4cde6e622af321ddf4071f7",
"assets/lib/assets/tesla_2018_model_3.glb": "40837aeacd9c85ea16d0b50c9bba31e4",
"assets/lib/assets/tesla_model_3.glb": "dcb0ac09e4342cd684b1300a226f2c44",
"assets/fonts/MaterialIcons-Regular.otf": "0bd3bf0f034d8c6def973f42372d20e9",
"assets/NOTICES": "2eebef25db17203cfccfd554423afa43",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3e614f33303b236d1c14133ac39549b3",
"assets/packages/o3d/assets/template.html": "24a1f29951029adea5122572451138fc",
"assets/packages/o3d/assets/model-viewer.min.js": "7f3dd99a5c27b30d285da8e8fd969b18",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "6d4e32c01c050f32bf1eda7ab62263a4",
"assets/AssetManifest.bin": "17d90e79bb408685e1dacbfc89dd0faf",
"main.dart.js": "5d6a19f9ea25d4576f1128d8f43b8ec0",
"flutter_bootstrap.js": "9852160e74a7f775fbecaea871fa1c6d",
".git/config": "9215a75fccb85bcfd57d913a37699220",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "2d53f091cb3f4bb0b0f5a6e01a851b2c",
".git/refs/heads/demo": "de764a2196bbf384acb56e524dddf9b1",
".git/refs/remotes/origin/demo": "de764a2196bbf384acb56e524dddf9b1",
".git/HEAD": "59b0e2dc6676eeb91af0dd131222a94a",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/a7/b2ab6fd7f61e0f1bd1d9ace2320a7b4d1ac759": "59ad82a2b46fd05bcb4e14d2b95ebe00",
".git/objects/67/c45853d1573b3fc44e9b86dbb097f66f646b68": "e43199d0f1c1588ace4f20a925c58b62",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/f42c086da1e99fda7f6fcf50cfb4c22e308db5": "d2527017ae8bd786d62c21ca73666a82",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/72/e840e0c3e0342602ab9a1b1778471157487675": "d5fcd46fe0faa11f4da1d8d29e4e86b8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/6cd31b35a9c1bfe4bd6df62be1c4ccbdaa6763": "3a52cf12bbbffcedcb1356286ec4e4f5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e8/6eee1bd1f03ee392b6e29fc771bb0ac1efc4c4": "3177cddaee3dbe4f9b4fe1bb9e6ed3c2",
".git/objects/3c/31737b6b1f67c6e880703e06ac649f20663bbc": "a07507ac684a631cb25f956270df12f6",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/b4/747d57d79efef9e8fb73437e6026b1533811b6": "ea2786c8b5fc5139648fdb7488f73d69",
".git/objects/42/6fcb709b9779da0e04b410aeb1428646a724ed": "65db39de9346db10f7bbd29c1ebfe74b",
".git/objects/42/ec7549b5e16d7c088487b49974d88c75ae2c8e": "466346d9d8ef0aeac977ddca1d66225e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/07/be85ee6d0a25c1159d5a68e7b6e4fd07b13945": "f87fffdd65f8d94aeb8bde0c2178ab73",
".git/objects/75/b7dd71619c13d853469f842c9cde2cfcb4b9f8": "1e764fd6a8215f619877e6f270435291",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/7f/4b8a20ea23bd45fffd9115ac1b2230008b039d": "102ab6c34a2c5b1d385fe451ea208ce3",
".git/objects/30/8b1665771da60cd54cfe17cfdfae2ee5b8abce": "af07738d9aacf9f0896af43572ed7d1d",
".git/objects/80/784ec265f49068d83da677266d818dbe9cb8e8": "c0142892223121ca21d0f9b4e431dfd9",
".git/objects/a1/874a58648933eaa2f9b567bcf4f9fe2b3de78e": "22aa25072d4de3a741eb5f8891e39e7d",
".git/objects/cb/37bb069509e872df83f8d7ef744897da0661c0": "f433ac85826e89a862b032f1e101b7b9",
".git/objects/0f/926a4f93f6864d2c4e76f68d5ad322215c90a1": "e00c7b8e67e822e7c6ea5dc0672238d0",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/03/bca47560e2118af8d59bd47be9eb38581adca2": "2374f34679bca8e645a7b0774c29f53d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/1ac63f889f432c310af7114f5ab932eb9b1e30": "ff52613644fa8634836f651a52ee34df",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/52/0892598b639c2327f2ac690ab36bbce1d05900": "d986560c9c2e1569fc43c6e82fbf1113",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b5/1047097e73030030f77482b87c3d40c417cda6": "068c483594a0c8bbf6a5f2c20b3e7e33",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/dd/841e615cf90ef8beeb846179801dd470757f27": "460f46ed197fa1f29de3f6d85d4b5c3c",
".git/objects/9e/5d4d1898302dcfddf06f763beeb27bd83b7362": "2741c010963d3f86512cd697da489ef8",
".git/objects/3b/d043e949f31ac72af5b04bdd29978bd798bd30": "2183811abd48a264c54d184c7be358c1",
".git/objects/3b/09dd67874c0b4eab36c4c0dc0be397cf631c46": "66bb2b038288b092eed556a063046220",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/index": "94037b03e6a37685a5964556e5d031c7",
".git/logs/refs/heads/demo": "99d9939116b93b131a93f6d668e842c7",
".git/logs/refs/remotes/origin/demo": "f3c8f18ad7049e5273c1459a39d4a1c1",
".git/logs/HEAD": "99d9939116b93b131a93f6d668e842c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"manifest.json": "49a9ded16c3b6e78d9656991359b6e98",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c"};
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
