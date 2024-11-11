import 'dotenv/config';
import express from "express";
import routesMascotas from "./routes/mascotas.js"
import routesUsuarios from "./routes/usuarios.js"
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/mascotas', routesMascotas)
app.use('/usuarios', routesUsuarios)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log ("servidor activo en el puerto "+PORT))
} catch (e) {
    console.log(e)
}

process.on('SIGINT', async () => {
    dbClient.cerrarConexion()
    process.exit(0)
})