import { Schema, model } from "mongoose";

const schemaMascota = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    tipo: String,
    raza: String,
    veterinario: String,
})

export const ModeloMascota = model("Mascota", schemaMascota)