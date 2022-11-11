const Contenedor = require('./contenedor.js');

const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`);
});

const contenedor = new Contenedor('./productos.txt')
// let productos = [];
// async function main(){
//     const contenedor = new Contenedor('./productos.txt')
//     productos = await contenedor.getAll();
//     // console.log(`Productos: ${JSON.stringify(productos)}`);
// }

// main();

//Rutas
app.get('/', (req, res) => {
    res.send(`<h2>Servidor de express</h2>`);
})

app.get('/productos', async (req, res) => {
    let productos = await contenedor.getAll();
    res.send(`Productos ${JSON.stringify(productos)}`);
})

app.get('/productoRandom', async (req, res) => {
    let id = (Math.floor(Math.random() * 3)) + 1;
    let productoRandom = await contenedor.getById(id);
    res.send(`Producto random: ${JSON.stringify(productoRandom)}`);
})

server.on('error', (err) => { console.log(` =====> ERROR: ${err}`)})