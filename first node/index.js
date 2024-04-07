const lib = require('./lib.js');
// import { add, diff, div, mul } from './lib.js'
const fs = require("fs");


const t1 = performance.now();
// const txt = fs.readFileSync('./demo.txt', 'utf-8')
fs.readFile('./demo.txt', 'utf-8', (err, txt) => {
    console.log(txt);
});
// console.log(txt)

console.log(lib.add(4, 5), lib.mul(4, 5), lib.diff(4, 5), lib.div(4, 5));
const t2 = performance.now();
console.log(t2 - t1);