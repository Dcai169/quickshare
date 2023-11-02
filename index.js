addEventListener("DOMContentLoaded", () => {
    let screenSmallDimension = Math.min(window.screen.availHeight, window.screen.availWidth);
    let codeWidth = screenSmallDimension * 0.6;
    let codeElement = document.getElementById("qr");
    let codeLabel = document.getElementById("qrLink");
    codeElement.style.width = `${codeWidth}px`;
    codeElement.style.height = `${codeWidth}px`;
    codeElement.style.margin = `${screenSmallDimension*0.1}px`

    let codeObj = new QRCode(codeElement, {
        width: codeWidth, height: codeWidth
    });

    let destinationURL = new URL(window.location.toLocaleString()).searchParams.get('dest');

    if (destinationURL) {
        codeObj.makeCode(destinationURL);
        codeLabel.href = destinationURL;
        codeLabel.innerText = destinationURL;
    }
});

