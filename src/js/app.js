if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../sw.js').then(() => {
        console.log('service worker registered!');
    });
}

var deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('before install prompt fired');
    e.preventDefault();
    deferredPrompt = e;
    return false;
})
