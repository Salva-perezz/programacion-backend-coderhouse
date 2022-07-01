type RandomColor = {
    red: number
    green: number
    blue: number
}

function generateRandomColor(min: number, max: number): RandomColor {
    const red = Math.floor(Math.random() * (max - min + 1) + min)
    const green = Math.floor(Math.random() * (max - min + 1) + min)
    const blue = Math.floor(Math.random() * (max - min + 1) + min)

    return { red, green, blue }
}

class Color {
    public color: RandomColor

    constructor() {
        this.color = generateRandomColor(0, 255)
    }

    getColor(): RandomColor {
        return this.color
    }
}

const nuevoColor = new Color()

console.log(nuevoColor.color)