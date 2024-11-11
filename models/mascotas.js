import Mascota from '../schemas/mascotas.js'
import mongoose from 'mongoose'
/* import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js"; */

class mascotaModel{

    async create(mascota) {
        return await Mascota.create(mascota)
      /*  const colMascotas = dbClient.db.collection('mascotas')
        return await colMascotas.insertOne(mascota) */
    }

    async getAll() {
        return await Mascota.find()
        /* const colMascotas = dbClient.db.collection('mascotas')
        return await colMascotas.find({}).toArray(); */
    }

    async getOne(id) {
    try {
        // Asegúrate de que el id sea válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("El ID proporcionado no es válido.");
        }
        
        const mascota = await Mascota.findById(id);
        return mascota;
    } catch (e) {
        console.log(e);
        return null; // Devuelve null en caso de error
    }
}
        /* const colMascotas = dbClient.db.collection('mascotas')
        return await colMascotas.findOne({_id:new ObjectId(id)}); */
    

    async update(id, mascota) {
        try {
            return await Mascota.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, mascota, { new: true })
            /* const colMascotas = dbClient.db.collection('mascotas')  
            return colMascotas.updateOne({_id:new ObjectId(id)}, {$set: mascota}) */
        } catch (e) {
            console.log(e)
        }
        }

    async delete(id) {
        return await Mascota.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
        /* const colMascotas = dbClient.db.collection('mascotas')  
        return colMascotas.deleteOne({_id:new ObjectId(id)}) */
    }
}

export default new mascotaModel;