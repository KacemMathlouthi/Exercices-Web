document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    var olElement = document.querySelector('.ol');
    olElement.addEventListener('click', handleListClick);
}

function handleListClick(event) {
    var clickedElement = event.target;

    if (clickedElement.tagName === 'LI') {
        changeBackgroundColor(clickedElement);
    }
}

function changeBackgroundColor(item) {
    var randomColor = generateRandomColor();
    item.style.backgroundColor = randomColor;
}

function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
