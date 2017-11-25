if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../sw.js').then(() => {
        console.log('service worker registered!');
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('before install prompt fired');
    e.preventDefault();
})
