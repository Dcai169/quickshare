addEventListener("DOMContentLoaded", async () => {
    let installButton = document.getElementById("installButton");
    let availabilityText = document.getElementById("availability");

    installButton.addEventListener("click", installApp);

    if (navigator.userAgent.includes("Android") || navigator.userAgent.includes("CrOS X86_64")) {
        installButton.style.display = 'block';
        availabilityText.style.display = 'none';
    } else {
        installButton.style.display = 'none';
        availabilityText.style.display = 'block';
    }

    // if ('getInstalledRelatedApps' in window.navigator) {
    //     const relatedApps = await navigator.getInstalledRelatedApps();
    //     relatedApps.forEach((app) => {
    //         //if your PWA exists in the array it is installed
    //         installButton.disabled = true;
    //     });
    // }

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevents the default mini-infobar or install dialog from appearing on mobile
        e.preventDefault();
        // Save the event because you’ll need to trigger it later.
        deferredPrompt = e;
        // Show your customized install prompt for your PWA
        installButton.style.display = "block";
        installButton.disabled = false;
    });

    window.addEventListener('appinstalled', () => {
        installButton.style.display = "none";
    });

    async function installApp() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            // Find out whether the user confirmed the installation or not
            const { outcome } = await deferredPrompt.userChoice;
            // The deferredPrompt can only be used once.
            deferredPrompt = null;
            // Act on the user's choice
            if (outcome === 'accepted') {
                // showResult('😀 User accepted the install prompt.', true);
            } else if (outcome === 'dismissed') {
                // showResult('😟 User dismissed the install prompt');
            }
        }
    }
});