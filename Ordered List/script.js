document.addEventListener('DOMContentLoaded', function () {
    var listItems = document.querySelectorAll('.ol li');

    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var randomColor = generateRandomColor();
            this.style.backgroundColor = randomColor;
        });
    });

    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
