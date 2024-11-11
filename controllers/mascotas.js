import mascotasModel from '../models/mascotas.js'

class mascotaController {
    constructor() { }
    
    async create(req, res) {
        try {
            const data = await mascotasModel.create(req.body);
            res.status(201).json(data);
        }
        catch (e) {
            res.status(500).send(e)
        }
    }

     update(req, res) {
       try {
            res.status(201).json({ status: 'update-ok' });
        }
        catch (e) {
            res.status(500).send(e)
        }
    }

     delete(req, res) {
        try {
            res.status(201).json({ status: 'delete-ok' });
        }
        catch (e) {
            res.status(500).send(e)
        }
    }

     async getAll(req, res) {
         try {
            const data = await mascotasModel.getAll();
            res.status(201).json(data);
        }
        catch (e) {
            res.status(500).send(e)
        }
    }

    async getOne(req, res) {
    try {
        const { id } = req.params;
        const data = await mascotasModel.getOne(id);  // Cambiado a getOne
        if (!data) {
            return res.status(404).json({ message: "Mascota no encontrada" });
        }
        res.status(200).json(data);
    }
    catch (e) {
        res.status(500).send(e);
    }
}

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.update(id, req.body)
            res.status(200).json(data);
        }
        catch (e) {
            res.status(500).send(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.delete(id)
            res.status(206).json(data);
        }
        catch (e) {
            res.status(500).send(e)
        }
    }
}

export default new mascotaController();