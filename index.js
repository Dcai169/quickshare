addEventListener("DOMContentLoaded", () => {
    let screenSmallDimension = Math.min(window.screen.availHeight, window.screen.availWidth);
    let codeWidth = screenSmallDimension * 0.6;
    let codeElement = document.getElementById("qr");
    let codeLabel = document.getElementById("qrLink");
    let urlRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi);

    codeElement.style.width = `${codeWidth}px`;
    codeElement.style.height = `${codeWidth}px`;
    codeElement.style.margin = `${screenSmallDimension*0.1}px`

    let codeObj = new QRCode(codeElement, {
        width: codeWidth, height: codeWidth
    });

    let urlParams = new URL(window.location.toLocaleString()).searchParams;
    let label = urlParams.get('title');
    let text = urlParams.get('text');
    let urls = text.match(urlRegex);

    if (urls[0]) {
        codeObj.makeCode(urls[0]);

        if (label) {
            codeLabel.href = urls[0];
            codeLabel.innerText = label;
        }
    }
});

