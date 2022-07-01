export default class Superficie {
    private data: number
    private data2: number | undefined
    
    constructor(data: number, data2?: number) {
        this.data = data
        this.data2 = data2
    }

    cuadrado() {
        return this.data * this.data
    }

    circulo() {
        return (this.data * this.data) * 3,14
    }

    rectangulo() {
        if (typeof this.data2 === 'number') {
            return this.data * this.data2
        } else {
            return null
        }
    }
}