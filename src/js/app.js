if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://aakashrstg00.github.io/testpwa/sw.js').then(() => {
        console.log('service worker registered!');
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('before install prompt fired');
    e.preventDefault();
})
