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
});

var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
var deferredPrompt = require('./app.js').deferredPrompt;

function openCreatePostModal() {
    createPostArea.style.display = 'block';
    if (deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((result) => {
            console.log(result.outcome);
            if (result.outcome === 'dismissed') {
                console.log('installation cancelled');
            } else {
                console.log('install success');
            }
        });
        deferredPrompt = null;
    }
}

function closeCreatePostModal() {
    createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
