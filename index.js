#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const [,, args] = process.argv;
console.log(process.argv)
console.log(args);

const miner = (file, command, argument) => {
  
  let data = fs.readFileSync(path.resolve(file), 'utf8');
  console.log(data);
  
}

miner(args);

// process.stidin.on('data', data => {
//   console.log(data);

// });