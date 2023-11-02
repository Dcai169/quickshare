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

    let urlParams = new URL(window.location.toLocaleString()).searchParams;
    let label = urlParams.get('title');
    let text = urlParams.get('text');
    let destinationURL = urlParams.get('dest');


    if (destinationURL) {
        codeObj.makeCode(destinationURL);
        codeLabel.href = destinationURL;

        if (label) {
            codeLabel.innerText = label;
        } else {
            codeLabel.innerText = destinationURL;
        }
    }
});

