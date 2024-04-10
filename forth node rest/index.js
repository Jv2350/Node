const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const express = require("express");
const { type } = require('os');
const { Agent } = require('https');
const server = express();
const morgan = require("morgan");


server.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date(), req.get("Cache-Control"))
    next()
})

server.use(express.json());// middleware parser for the body


// server.use(morgan('dev')) //morgan loger
server.use(morgan('default'));
server.use(express.static('public'))



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

