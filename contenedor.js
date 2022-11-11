const fs = require('fs');

class Contenedor {

    constructor(ruta){
        this.ruta = ruta
    }

    async getAll() {
        try {
            const data = await fs.promises.readFile(this.ruta, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    async getById(id) {
        try {
            const listado = await this.getAll();
            return listado.find(item => item.id === id) ?? null
        } catch (error) {
            throw new Error(`No se encontro el dato: ${error}`);
        }
    }

}

module.exports = Contenedor;