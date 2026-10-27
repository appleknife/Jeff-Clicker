// Offline support. The art and the game itself are cached on install; the theme song
// (2.9 MB) is cached the first time someone actually plays it, so install stays light.
const CACHE = "jeff-clicker-v33";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/img/jeff.png",
  "./assets/img/jeff-mark.png",
  "./assets/img/bubble.png",
  "./assets/img/ult-icon.png",
  "./assets/img/icon-192.png",
  "./assets/img/icon-512.png",
  "./assets/img/icon-maskable-512.png",
  "./assets/img/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      // Each file on its own, so one 404 can never break the install.
      .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // The page itself: network first so updates land, cached copy when offline.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(r => { caches.open(CACHE).then(c => c.put("./index.html", r.clone())); return r; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Art, audio and fonts: cached copy first, then network.
  const sameOrigin = url.origin === location.origin;
  const fonts = url.hostname.endsWith("googleapis.com") || url.hostname.endsWith("gstatic.com");
  if (!sameOrigin && !fonts) return;

  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === "opaque") {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return r;
    }).catch(() => hit))
  );
});
