import express from "express";
import { getTime } from "./lib/utils";
import Persona from "./Persona";
import { Request, Response } from 'express'

const p: Persona = new Persona("Coder", "House");

const app = express();

app.get("/", (req: Request, res: Response) => {
 res.send({
   time: getTime(),
   name: p.getFullName(),
 });
});

const PORT = 8080;
app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`);
});
