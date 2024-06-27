import { ModeloMascota } from "../database/models/ModeloMascota.js";

export const getMascotaById =(req, res, next)=>{
    const idMascota = req.params.id;
    ModeloMascota.findOne({id: idMascota, veterinario: req.usuario.id})
    .then((data)=>{
        if(!data){
            throw new Error(`No existe ninguna mascota con el Id ${idMascota}`)
        }else{
            res.json(data)
        }
    })
    .catch((error)=>{
        next(error)
    })

}