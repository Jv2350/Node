const express = require("express");
const server = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productRouter = require('./routes/product')
const userRouter = require("./routes/user")

// db connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log("Database connected");
}




// parsers
server.use(express.json());// middleware parser for the body
server.use(morgan('default'));
server.use(express.static('public'))
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);





server.listen(8080, () => {
    console.log("Server Started");
})