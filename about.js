addEventListener("DOMContentLoaded", () => {
    document.getElementById("installButton").addEventListener('click', async () => {
        // deferredPrompt is a global variable we've been using in the sample to capture the `beforeinstallevent`
        deferredPrompt.prompt();
        // Find out whether the user confirmed the installation or not
        const { outcome } = await deferredPrompt.userChoice;
        // The deferredPrompt can only be used once.
        deferredPrompt = null;
        // Act on the user's choice
        if (outcome === 'accepted') {
          alert('User accepted the install prompt.');
        } else if (outcome === 'dismissed') {
            alert('User dismissed the install prompt');
        }
      });
});