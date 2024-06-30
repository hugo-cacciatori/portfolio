'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter_bootstrap.js": "e2b585bfaa1efd608a143b10c8d41e4a",
"index.html": "174a1a9b398b36430eb234e624943e0e",
"/": "174a1a9b398b36430eb234e624943e0e",
"version.json": "009c9e65172e010890f7f65fde438006",
"assets/assets/chicas_gap.jpg": "4a33b0bae2b364523c27d5cf4f0a5058",
"assets/assets/qoia.jpg": "70425625b39d05d6e5e97d668354016c",
"assets/assets/gotomarket.jpg": "f422f4b778efa2e6c2d7c5c75951896d",
"assets/assets/stendhal.jpg": "9794bfb2247fc66168189b1ca5a68c6a",
"assets/assets/profile.jpg": "603b2967aef2c4c3f084a9867d9582a5",
"assets/assets/bts.jpg": "68e5ef09459a93ebdb144b0a10106c5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "a3f0577d0595557e94ec39e44395aa8b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "5ea85b55cd2824208638547adbb1659b",
"assets/AssetManifest.bin": "53b1476f9d91377c703fe43910707991",
"assets/AssetManifest.bin.json": "25d16635860d077b02157ce0c30d30af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "ca90ac1bc7fb9f546b80a066b6793c30",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "16b017aca1bb0696917cb94354669644",
".git/refs/remotes/origin/main": "16b017aca1bb0696917cb94354669644",
".git/objects/e6/e3fa8743b326bf0e205551fb1fd5f02bd31a26": "dd25b41ae23fc06b936eb8801fa61d87",
".git/objects/3d/d7f5eb976bb1448f45a52e8ccdab257ff0ff5c": "01d4492d070ffe655c80568ea5bc7a5c",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/a1/8956156551d7564b8dfdd6c4b648e0406356ff": "ec54fe6cf045832d05ec07603a1e97a2",
".git/objects/b5/dbf5da8cf80c2d173e4e92ab1c85030be81725": "c49d3646bd1b09a8911a94234e8a9580",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/45/497d0e32da8ccd05971bfb05d83c971ed2872d": "105ad4cf9eb4a6f48321d122558f1fcc",
".git/objects/1d/20b377d22f581bc85bab9dd8fd590f196d96e0": "259c8ed1cc7890b131ba2eedd1d912a8",
".git/objects/7c/bde57f87af8bb6684fb587dbdca30039359c59": "17dd0aae734dfd6e90965442fcf3d74b",
".git/objects/d0/bb997874df5976606fa4c126c85c5ec7fe1a51": "5aa0041499a3ea274d2c6df2db9b0abb",
".git/objects/9e/4d35af8b5e54b7b5ad999f6df39d5c1bb50bcc": "e99d46287f36a673a4448e500c2f9959",
".git/objects/4f/8be898a19dd0e3919684a731b4a96ee86e0e13": "050fe9b42381cb93ca9bc67147289374",
".git/objects/4f/2c0544c4edb20714893c0702264ea421a1547e": "c485ee3ebd7edc713ecbfdd16997d149",
".git/objects/04/127d06ea67feb48fc561dcd131fc4151ddd250": "abc37cc46505cfa52a8e78ad02d83d0c",
".git/objects/22/bb210526160e6c105bd4acb4054a0b37a4cf40": "e0090fba625109a12bf63cb35e216fdd",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/ce/d9b760b89c34ac838a54f3e1404f3052532914": "9f11305309c257f3b2c182240a6510b2",
".git/objects/e2/ed48c06a3bfbd325aca1a1f093f8855745736a": "8a6f81527a1e8a1f96120f4404cecef6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/98/1a84ba9be8232214bed89b1391fd05bbc173cf": "e8fa1b7b00d081b739de6149282d82f0",
".git/objects/80/6c69813f5222bac306ce6d21b016f21fbec541": "3cee6473504dd727a29534671677f2e2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/58/bffe445ea8c17519df644deb0e990aa7b14d11": "1cc79c1232cd45cebef077d960af1c3c",
".git/objects/ee/a10db64d5d82193b16254424d57f653d5a7f7b": "ed924b64041bb93d3aba5e064898ebdd",
".git/objects/02/9c008ffadcc8eafadbf8547f7d913245f0e53a": "6908c972ba395946ca8fc39bb615417d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fc/0afddab59cf09abc7155889a5f4d405e627ef4": "4d0b0b41fa34d6923b192eecb8cfa9db",
".git/objects/48/9fd11dd1e66139072749f6868a3c714059b781": "759666267854b0e54d526a0e8ad3f1b8",
".git/objects/ca/70ff7520cd30cd39a9ff2f75525a2ca7594b4a": "f2d18bd4b3ab66a06b20965400aa7051",
".git/objects/ec/2d7060fd0868cd2ac882ee70a473811a8ae375": "9e3548ef7fdc63a1dc8a530819a255cb",
".git/objects/38/1677b52aaf15e71fbc6b9f8849987de2d7305d": "3d89f7becb22d511c2fdf9b61042c6a5",
".git/objects/a8/6c9aa9712c9ac167b16ab7d2177c19f9786619": "eb0220b8c1cc5f7bb2f39d506f5ecca7",
".git/objects/e0/2ceacaa61b0fb2034f2135c3c5bba4e133e5fe": "ba09272ea7364f0146a6f9fc54b545d8",
".git/objects/23/822925b28385e80a14c53bed8c178ab6eb27be": "e641f7f1de80481ed9e5e5925d96f37e",
".git/objects/de/142aca304fb12d9f762464263838385455f9c8": "ad258588133fc11f1dc31f71056a51fd",
".git/objects/2c/37f59dff99ffe1b5103cd7ec6f41953c0fe7f2": "136db6132db714c5caeb83d692f17784",
".git/objects/78/353cc20bb68630559fc8d395b64732bd19e4ad": "73b7bd511c4a549837b6d84f9d3897fb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/logs/HEAD": "4483cfb6a45af7bf280360e9ddc81bd4",
".git/logs/refs/heads/main": "4483cfb6a45af7bf280360e9ddc81bd4",
".git/logs/refs/remotes/origin/main": "064cdf7d86b77979a4da0064b67a15c4",
".git/index": "74faec713e4c915a816fe7373e4d786c",
".git/config": "f5a76b1ecc247ffd1d038931b0ad63d2",
"404.html": "bf4d697ee16b050539c0838cf361d082",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js": "694f8819d84bd1ce5fb466806f6cdb3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "e74af8957b5899dc6da961caee768ec9"};
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
