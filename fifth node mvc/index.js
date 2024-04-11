const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const express = require("express");
const { type } = require('os');
const { Agent } = require('https');
const server = express();
const morgan = require("morgan");
const { reset } = require('nodemon');


server.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date(), req.get("Cache-Control"))
    next()
})



// server.use(morgan('dev')) //morgan loger
server.use(morgan('default'));
server.use(express.static('public'))

server.use(express.json());// middleware parser for the body


// // api/endpoint/route
// server.get('/', auth, (req, res) => {
//     res.json({ type: "GET" })
// })
// server.post('/', auth, (req, res) => {
//     res.json({ type: "POST" })
// })
// server.put('/', auth, (req, res) => {
//     res.json({ type: "PUT" })
// })
// server.delete('/', auth, (req, res) => {
//     res.json({ type: "DELETE" })
// })
// server.patch('/', auth, (req, res) => {
//     res.json({ type: "PATCH" })
// })



server.get("/", (req, res) => {
    // res.sendStatus(404);
    // res.json(data);
    // res.send('Hello world');
    res.status(201).send('<h1>Hello world</h1>');
    // res.sendFile("D:/tp/diff lang/Node/third node/index.html");
})


server.listen(8080, () => {
    console.log("Server Started")
})

//###########################################################################

// products
// api root, base url, 

// read api (GET /products)
server.get('/products', (req, res) => {
    res.json(products);
})


// /products/id
server.get('/products/:id', (req, res) => {
    const id = +req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product);
})


// create POST api /products
server.post('/product', (req, res) => {
    console.req(body)
})

// ##############################################################
// update using put
server.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.status(201).json();
})

// update using patch
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(201).json();
});

// delete 

server.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1)
    res.status(201).json(product);
});