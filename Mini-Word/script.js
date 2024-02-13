function changeColor() {
    let color = document.getElementById("colorInput").value;
    document.getElementById("output").style.color = color;
}

function changeFont() {
    let font = document.getElementById("font").value;
    document.getElementById("output").style.fontFamily = font;
}

function changeSize() {
    let size = document.getElementById("fontSizeInput").value;
    document.getElementById("output").style.fontSize = size + "px";
}


function submit() {
    var body = document.getElementById("body");
    let text = document.getElementById("textArea").value;
    let newText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "\n") {
            newText += "<br>";
        } else {
            newText += text[i];
        }
    }
    document.getElementById("output").innerHTML = newText;
    document.body.style.backgroundImage = 'url("img2.jpg")';
}

