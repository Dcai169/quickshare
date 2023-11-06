addEventListener("DOMContentLoaded", () => {
    let clientPlatform = navigator?.userAgentData.platform;
    let installButton = document.getElementById("installButton");

    window.addEventListener("DOMContentLoaded", async event => {
        installButton.addEventListener("click", installApp);
    });

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevents the default mini-infobar or install dialog from appearing on mobile
        e.preventDefault();
        // Save the event because you’ll need to trigger it later.
        deferredPrompt = e;
        // Show your customized install prompt for your PWA
        if (clientPlatform == "Android" || clientPlatform == "ChromeOS") {
            installButton.disabled = false;
        }
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
            // We hide the install button
            document.querySelector("#install").style.display = "none";

        }
    }
});