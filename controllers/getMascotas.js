import { ModeloMascota } from "../database/models/ModeloMascota.js"
import {formatearFiltrosDB} from "../utils/functions.js"

export const getMascotas = (req, res, next) =>{
    const filtroNombre = formatearFiltrosDB(req.query.nombre)
    const filtroTipo = formatearFiltrosDB(req.query.tipo)

    const filtros = {veterinario: req.usuario.id}
    if(filtroNombre) filtros.nombre = filtroNombre;
    if(filtroTipo) filtros.tipo = filtroTipo;

    ModeloMascota.find(filtros)
    .then((data)=>{
        console.log("get mascotas =>",data)
        if(data.length === 0){
            res.json([])
        }else{
            res.json(data)
        }
    })
    .catch((error)=>{
        next(error)
    })
}