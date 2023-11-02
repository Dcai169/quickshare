addEventListener("DOMContentLoaded", () => {
    let screenSmallDimension = Math.min(window.screen.availHeight, window.screen.availWidth);
    let codeWidth = screenSmallDimension * 0.6;
    let codeElement = document.getElementById("qr");
    let codeLabel = document.getElementById("qrLink");
    let urlRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)

    codeElement.style.width = `${codeWidth}px`;
    codeElement.style.height = `${codeWidth}px`;
    codeElement.style.margin = `${screenSmallDimension*0.1}px`

    let codeObj = new QRCode(codeElement, {
        width: codeWidth, height: codeWidth
    });

    let urlParams = new URL(window.location.toLocaleString()).searchParams;
    let label = urlParams.get('title');
    let text = urlParams.get('text');

    if (text.match(urlRegex)) {
        codeObj.makeCode(text);
        codeLabel.href = text;

        if (label) {
            codeLabel.innerText = label;
        }
    }
});

