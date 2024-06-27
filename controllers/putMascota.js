import { ModeloMascota } from "../database/models/ModeloMascota.js";

export const putMascota = (req, res, next) =>{
    const idMascota = req.params.id;
    // const nombre = req.body.nombre;
    // const tipo = req.body.tipo;
    // const raza = req.body.raza;
    const {nombre, tipo, raza} = req.body;
    const datosNuevos = {};
    if(nombre) datosNuevos.nombre = nombre;
    if(tipo) datosNuevos.tipo = tipo;
    if(raza) datosNuevos.raza = raza;

    ModeloMascota.updateOne({id: idMascota}, datosNuevos)
    .then((data)=>{
        if(data.matchedCount === 0){
            throw new Error(`No exite mascota con el ID ${idMascota}`)
        }
        res.json({
            message: `Mascota con id ${idMascota} modificada con exito`
        })
    })
    .catch((error)=>{
        next(error)
    })
}