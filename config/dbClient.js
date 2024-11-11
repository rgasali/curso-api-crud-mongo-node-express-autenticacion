import 'dotenv/config'
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

class dbClient{
    constructor() {
        this.connectarBaseDatos()
    }
    async connectarBaseDatos(){
        //constructor() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/adopcion?retryWrites=true&w=majority`;
        /* const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adopcion`; */
        // this.client = new MongoClient(queryString);
        await mongoose.connect(queryString)
       // this.conectarDB()
    }

    /* async conectarDB() {
        try {
            await this.client.connect()
            this.db = this.client.db('adopcion')
            console.log("conectado al servidor de la base de datos")
        }
        catch (e) {
            console.log(e)
        }
    } */

    async cerrarConexion() {
        try{
        await mongoose.disconnect()
         console.log("conexion a la base de datos cerrada")
        }
        catch (e) {
           console.error("error al cerrar la base de datos: " , e) 
        }
    }
}

export default new dbClient();