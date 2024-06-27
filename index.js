import express from "express"
import "dotenv/config"
import cors from "cors"
import { conectarDB } from "./database/conexion.js";
import { getMascotas } from "./controllers/getMascotas.js";
import { getMascotaById } from "./controllers/getMascotaById.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { postMascota } from "./controllers/postMascota.js";
import { putMascota } from "./controllers/putMascota.js";
import { deleteMascota } from "./controllers/deleteMascota.js";
import { postUsuario } from "./controllers/postUsuario.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { controlarSesion } from "./middlewares/controlarSesion.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())
await conectarDB();

//middleware -> mostrar data requests
app.use(mostrarDatosRequest)

app.get("/", (req, res)=>{
    res.send("Api Mascotas")
})

app.post("/registrar", postUsuario)
app.post("/login", loginUsuario)

app.use(controlarSesion)

app.post("/logout", logoutUsuario)

app.get("/mascotas", getMascotas)
app.get("/mascota/:id", getMascotaById)
app.post("/mascota", postMascota)
app.put("/mascota/:id", putMascota)
app.delete("/mascota/:id", deleteMascota)

// middleware manejador de errores
app.use(manejadorErrores)

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}`)
} )