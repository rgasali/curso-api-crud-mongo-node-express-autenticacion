import Usuario from '../schemas/usuarios.js'
import mongoose from 'mongoose'
/* import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js"; */

class usuarioModel{

    async create(usuario) {
        return await Usuario.create(usuario)
      /*  const colUsuarios = dbClient.db.collection('usuarios')
        return await colUsuarios.insertOne(mascota) */
    }

    async getAll() {
        return await Usuario.find()
        /* const colUsuarios = dbClient.db.collection('usuarios')
        return await colUsuarios.find({}).toArray(); */
    }

    async getOneById(id) {
    try {
       /*  // Asegúrate de que el id sea válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("El ID proporcionado no es válido.");
        } */
        
        return await Usuario.findById(id);
        ;
    } catch (e) {
        console.log(e);
        return null; // Devuelve null en caso de error
    }
    }
    
    async getOne(filtro) {
        return await Usuario.findOne(filtro)
    }
        /* const colUsuarios = dbClient.db.collection('usuarios')
        return await colUsuarios.findOne({_id:new ObjectId(id)}); */
    

    async update(id, usuario) {
        try {
            return await Usuario.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, usuario, { new: true })
            /* const colUsuarios = dbClient.db.collection('usuarios')  
            return colUsuarios.updateOne({_id:new ObjectId(id)}, {$set: usuario}) */
        } catch (e) {
            console.log(e)
        }
        }
    async delete(id) {
        return await Usuario.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
        /* const colUsuarios = dbClient.db.collection('usuarios')  
        return colUsuarios.deleteOne({_id:new ObjectId(id)}) */
    }
}

export default new usuarioModel;