function changeColor() {
    let color = document.getElementById("colorInput")
    document.getElementById("output").style.color = JSON.stringify(color);
}

function changeFont() {
    let font = document.getElementById("font").value;
    document.getElementById("output").style.fontFamily = font;
}

function changeSize() {
    let size = document.getElementById("sizeInput")
    document.getElementById("output").style.fontSize = JSON.stringify(size);
}


function submit() {
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
}
