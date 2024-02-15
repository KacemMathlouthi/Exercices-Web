document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    var listItems = document.querySelectorAll('.ol li');
    listItems.forEach(addClickEvent);
}

function addClickEvent(item) {
    item.addEventListener('click', changeBackgroundColor);
}

function changeBackgroundColor() {
    var randomColor = generateRandomColor();
    this.style.backgroundColor = randomColor;
}

function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
