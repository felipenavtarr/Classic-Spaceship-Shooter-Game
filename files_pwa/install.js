'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('button_install');

installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

// guardo el evento y hago visible el botón
function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    // preguntar al usuario
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true); // se oculta el botón
    deferredInstallPrompt.userChoice.then((choice) => {
        if(choice.outcome === "accepted") {
            console.log("aceptado")
        } else {
            console.log("No acepatdo")
        }
        deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
    console.log("Classic Spaceship Shooter app installed");
}
