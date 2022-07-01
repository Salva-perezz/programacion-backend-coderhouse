"use strict";
function generateRandomColor(min, max) {
    const red = Math.floor(Math.random() * (max - min + 1) + min);
    const green = Math.floor(Math.random() * (max - min + 1) + min);
    const blue = Math.floor(Math.random() * (max - min + 1) + min);
    return { red, green, blue };
}
class Color {
    constructor() {
        this.color = generateRandomColor(0, 255);
    }
    getColor() {
        return this.color;
    }
}
const nuevoColor = new Color();
console.log(nuevoColor.color);
