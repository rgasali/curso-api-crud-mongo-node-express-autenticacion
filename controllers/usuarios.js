import usuarioModel from '../models/usuarios.js'
import bcrypt from 'bcrypt'
import jsonwebtoken from "jsonwebtoken"
import { generarToken } from '../helpers/autenticacion.js'

class usuarioController {
    constructor() {

    }

    async register(req, res) {
        try {
            const { email, nombre, telefono, clave } = req.body
            const usuarioExiste = await usuarioModel.getOne({ email })
            if (usuarioExiste) {
                return res.status(400).json({ error: "el usuario ya existe" })
            }

            const claveEncryptada = await bcrypt.hash(clave, 10)
            const data = await usuarioModel.create({
                email,
                nombre,
                telefono,
                clave: claveEncryptada
            })
            res.status(201).json(data)
        } catch (e) {
            console.log (e)
            res.status(500).send(e)
        }
    }

    async login(req, res) {
        const { email, clave } = req.body
        
        const usuarioExiste = await usuarioModel.getOne({ email })
            if (!usuarioExiste) {
                return res.status(400).json({ error: "el usuario no existe" })
        }
        const claveValida = await bcrypt.compare(clave, usuarioExiste.clave)
        if (!claveValida) {
            return res.status(400).json({error: "clave invalida"})
        }
        const token= generarToken(email)
        
        return res.status(200).json({msg:"usuario autenticado",token})
    }

    async perfil(req, res) {
    try {
        
        const data = await usuarioModel.getOne({email: req.emailConectado});  // Cambiado a getOne
        if (!data) {
            return res.status(404).json({ message: "usuario no encontrado" });
        }
        res.status(201).json(data);
    }
    catch (e) {
        res.status(500).send(e);
    }
}
}
export default new usuarioController();