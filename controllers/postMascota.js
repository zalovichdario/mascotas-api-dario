import { ModeloMascota } from "../database/models/ModeloMascota.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postMascota =async (req, res, next)=>{
    const {nombre, tipo, raza} = req.body;

    const nuevaMascota = new ModeloMascota();
    nuevaMascota.id =await obtenerProximoId(ModeloMascota)
    nuevaMascota.nombre= nombre;
    nuevaMascota.tipo = tipo;
    nuevaMascota.raza = raza;  
    nuevaMascota.veterinario = req.usuario.id;

    nuevaMascota.save()
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        next(error)
    })

}