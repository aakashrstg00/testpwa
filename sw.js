self.addEventListener('install', e => {
    console.log('[sw] installing sw.', e);
});

self.addEventListener('activate', e => {
    console.log('[sw] activating sw.', e);
    return self.clients.claim();
});

self.addEventListener('fetch', e => {
    console.log('[sw] something fetched!');
    e.respondWith(fetch(e.request));
});
