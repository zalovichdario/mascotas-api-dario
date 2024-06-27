import { ModeloUsuario } from "../database/models/ModeloUsuario.js"

export const logoutUsuario = async (req, res, next) =>{
    const token = req.headers["authorization"]
// obtenemos el token de los headers

    const usuario = await ModeloUsuario.findOne({session: token});
// buscamos usuario que tenga ese token como session
    if(usuario) {
        // si encontramos uno, lo borramos el session token, y guardamos, y retornamos que salio todo bien
        usuario.session = null;
        await usuario.save();
        res.json({message: "Sesion cerrada con exito!"})
    }else{
        next(new Error("no se encontro el usuario"))
    }
}