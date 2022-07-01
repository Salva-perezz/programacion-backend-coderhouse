const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
}

class Color {
    constructor() {
        this.value = `${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}`
    }
}

const randomColor = new Color()

console.log(randomColor)