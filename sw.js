// The Break Room — service worker.
// Its only job is notifications. It deliberately does NOT cache the
// app: a stale cached build is far more confusing than a slow load,
// and every deploy replaces app-live.html wholesale.

self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; } catch (e) { d = { body: event.data && event.data.text() }; }

  const title = d.title || "The Break Room";
  const options = {
    body: d.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    tag: d.tag || undefined,          // a second message in one thread replaces the first
    renotify: !!d.tag,
    data: { url: d.url || "/Commonground/app-live.html" },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || "/Commonground/app-live.html";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      // If the app is already open somewhere, focus it instead of opening a second copy.
      for (const client of list) {
        if (client.url.indexOf("/Commonground/") !== -1 && "focus" in client) return client.focus();
      }
      return self.clients.openWindow(target);
    })
  );
});
