function generateRandomColor(min, max) {
    var red = Math.floor(Math.random() * (max - min + 1) + min);
    var green = Math.floor(Math.random() * (max - min + 1) + min);
    var blue = Math.floor(Math.random() * (max - min + 1) + min);
    return { red: red, green: green, blue: blue };
}
var Color = /** @class */ (function () {
    function Color() {
        this.color = generateRandomColor(0, 255);
    }
    Color.prototype.getColor = function () {
        return this.color;
    };
    return Color;
}());
var nuevoColor = new Color();
console.log(nuevoColor.getColor());
