import express from "express";
import usuarioController from '../controllers/usuarios.js';
import { verificarToken } from "../helpers/autenticacion.js";


const route = express.Router();

route.post('/register', usuarioController.register);
route.post('/login', usuarioController.login);
route.get('/perfil/', verificarToken, usuarioController.perfil);


export default route;