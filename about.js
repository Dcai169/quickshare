addEventListener("DOMContentLoaded", async () => {
    let installButton = document.getElementById("installButton");

    installButton.addEventListener("click", installApp);

    if (navigator.userAgent.includes("Android") || navigator.userAgent.includes("CrOS X86_64")) {
        installButton.style.display = 'block';
    } else {
        installButton.style.display = 'none';
    }

    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevents the default mini-infobar or install dialog from appearing on mobile
        e.preventDefault();
        // Save the event because you’ll need to trigger it later.
        deferredPrompt = e;
        // Show your customized install prompt for your PWA
        alert('BeforeInstallPromptEvent');
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
            installButton.style.display = "none";

        }
    }
});