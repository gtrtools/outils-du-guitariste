// Changer cette version lors d'une modification du service worker.
const CACHE_NAME = "outils-guitariste-shell-v1";
const CACHE_PREFIX = "outils-guitariste-shell-";
const BASE_URL = new URL(self.registration.scope);
const INDEX_URL = new URL("index.html", BASE_URL).href;
const STATIC_PATHS = new Set([
  "app.js",
  "style.css",
  "manifest.json",
  "assets/icon-192.png",
  "assets/icon-512.png"
].map(path => new URL(path, BASE_URL).pathname));

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const response = await fetch(INDEX_URL, { cache: "reload" });
    if (!response.ok) throw new Error(`Impossible de charger l'accueil : ${response.status}`);

    const html = await response.clone().text();
    const resources = [...html.matchAll(/<(?:script|link)\b[^>]*\b(?:src|href)\s*=\s*["']([^"']+\.(?:js|css)(?:\?[^"']*)?)["']/gi)]
      .map(match => new URL(match[1], INDEX_URL))
      .filter(url => url.origin === BASE_URL.origin && url.pathname.startsWith(BASE_URL.pathname));
    for (const required of ["app.js", "style.css"]) {
      const path = new URL(required, BASE_URL).pathname;
      if (!resources.some(url => url.pathname === path)) {
        throw new Error(`Ressource nécessaire absente de l'accueil : ${required}`);
      }
    }

    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
      ...resources.map(url => url.href),
      new URL("manifest.json", BASE_URL).href,
      new URL("assets/icon-192.png", BASE_URL).href,
      new URL("assets/icon-512.png", BASE_URL).href
    ]);
    await cache.put(INDEX_URL, response);
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
  })());
});

async function networkFirst(request, navigation) {
  let response;
  try {
    response = await fetch(request, { cache: "no-cache" });
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(navigation ? INDEX_URL : request);
    if (cached) return cached;
    throw error;
  }

  if (response.ok) {
    try {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(navigation ? INDEX_URL : request, response.clone());
    } catch (error) {
      console.error("Impossible de mettre la ressource en cache :", error);
    }
  }
  return response;
}

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== BASE_URL.origin) return;

  const navigation = event.request.mode === "navigate"
    && (url.pathname === BASE_URL.pathname || url.href.split("?")[0] === INDEX_URL);
  if (navigation || STATIC_PATHS.has(url.pathname)) {
    event.respondWith(networkFirst(event.request, navigation));
  }
});
