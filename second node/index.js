const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8')
const data = fs.readFileSync('data.json', 'utf-8')


// const data = { age: 5 };
const server = http.createServer((req, res) => {
    console.log("Server started");
    // console.log(req.url)
    // res.setHeader('Dummy', 'Dummy Value'); // header visible inside the network

    // res.end(JSON.stringify(data)); //to display the data into the string format we uses the stringify method of json

    // res.setHeader('Content-Type', 'application/json') // setting the content type 

    // res.setHeader('Content-Type', 'test/html') // sets the content type as text/html using it browser will take default html

    // res.setHeader('Content-Type', 'application/json') // setting the content type 
    // res.end(data);


    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;

        default:
            res.writeHead(404);
            res.end("Not found");
    }
})
server.listen(8080)