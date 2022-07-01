import express from "express"
import { Request, Response } from 'express'
import Perimetro from './perimetro'
import Superficie from "./superficie"

const PORT = 8080
const app = express()

app.get('/cuadrado', (req: Request, res: Response) => {
  const { lado, operacion } = req.query
  const cuadrado = operacion === 'perimetro' ? new Perimetro(Number(lado)).cuadrado() : new Superficie(Number(lado)).cuadrado()
  const response = {
    figura: 'Cuadrado',
    calculo: operacion,
    entryParams: lado,
    result: cuadrado
  }
  res.json(response)
})

app.get('/circulo', (req: Request, res: Response) => {
  const { radio, operacion } = req.query
  const circulo = operacion === 'perimetro' ? new Perimetro(Number(radio)).circulo() : new Superficie(Number(radio)).circulo()
  const response = {
    figura: 'Circulo',
    calculo: operacion,
    entryParams: radio,
    result: circulo
  }
  res.json(response)
})

app.get('/rectangulo', (req: Request, res: Response) => {
  const { ladoUno, ladoDos, operacion } = req.query
  const rectangulo = operacion === 'perimetro' ? new Perimetro(Number(ladoUno), Number(ladoDos)).rectangulo() : new Superficie(Number(ladoUno), Number(ladoDos)).rectangulo()
  const response = {
    figura: 'Rectangulo',
    calculo: operacion,
    entryParams: [ladoUno, ladoDos],
    result: rectangulo
  }
  res.json(response)
})

app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`)
})
