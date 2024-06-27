import { ModeloMascota } from "../database/models/ModeloMascota.js";

export const deleteMascota =(req, res, next) =>{
    const idMascota = req.params.id;
    ModeloMascota.deleteOne({id: idMascota})
    .then((data)=>{
        if(data.deletedCount !== 1){
            throw new Error(`No existe ninguna mascota con el id ${idMascota}`)
        }else{
            res.json({
                message: `Mascota con id ${idMascota} eliminada con exito`
            })
        }
    })
    .catch((error)=>{
        next(error)
    })
}