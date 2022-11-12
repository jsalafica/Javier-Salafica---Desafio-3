const Contenedor = require('./contenedor.js');

const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const contenedor = new Contenedor('./productos.txt')

//Rutas
app.get('/', (req, res) => {
    res.send(`<h2>Servidor de express</h2>`);
})

app.get('/productos', async (req, res) => {
    let productos = await contenedor.getAll();
    res.send(`Productos ${JSON.stringify(productos, null ,2)}`);
})

app.get('/productoRandom', async (req, res) => {
    let id = (Math.floor(Math.random() * 3)) + 1;
    let productoRandom = await contenedor.getById(id);
    res.send(`Producto random: ${JSON.stringify(productoRandom, null ,2)}`);
})

server.on('error', (err) => { console.log(` =====> ERROR: ${err}`)})